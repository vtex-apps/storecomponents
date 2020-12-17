import React, { useCallback, memo, useState, FC, useMemo } from 'react'
import { compose, flip, gt, filter, pathOr, clone } from 'ramda'
import { ResponsiveInput } from 'vtex.responsive-values'
import { useCssHandles } from 'vtex.css-handles'

import styles from '../styles.css'
import {
  isColor,
  getValidMarginBottom,
  findItemWithSelectedVariations,
  findListItemsWithSelectedVariations,
} from '../utils'
import {
  SelectorProductItem,
  CallbackItem,
  SelectedVariations,
  ImageMap,
  DisplayOption,
  DisplayVariation,
  Variations,
  DisplayMode,
} from '../types'
import Variation from './Variation'
import useEffectSkipMount from './hooks/useEffectSkipMount'

export type ShowValueForVariation = 'none' | 'image' | 'all'

function getShowValueForVariation(
  showValueForVariation: ShowValueForVariation,
  variationName: string
) {
  const isImage = isColor(variationName)

  return (
    showValueForVariation === 'all' ||
    (showValueForVariation === 'image' && isImage)
  )
}

interface Props {
  seeMoreLabel: string
  maxItems: number
  variations: Variations
  skuItems: SelectorProductItem[]
  onSelectItem: (callbackItem: CallbackItem) => void
  imagesMap: ImageMap
  selectedVariations: Record<string, string | null>
  hideImpossibleCombinations: boolean
  showValueForVariation: ShowValueForVariation
  showBorders?: boolean
  imageHeight?: number
  imageWidth?: number
  showVariationsLabels: boolean
  variationsSpacing?: number
  showVariationsErrorMessage: boolean
  displayMode: DisplayMode
  sliderDisplayThreshold: number
  sliderArrowSize: number
  sliderItemsPerPage: ResponsiveInput<number>
  displayPrices?: boolean
}

const isSkuAvailable = compose<
  SelectorProductItem | undefined,
  number,
  boolean
>(
  flip(gt)(0),
  pathOr(0, ['sellers', '0', 'commertialOffer', 'AvailableQuantity'])
)

const showItemAsAvailable = ({
  possibleItems,
  selectedVariations,
  variationCount,
  isSelected,
}: {
  possibleItems: SelectorProductItem[]
  selectedVariations: SelectedVariations
  variationCount: number
  isSelected: boolean
}) => {
  const selectedNotNull = filter(Boolean, selectedVariations)
  const selectedCount = Object.keys(selectedNotNull).length

  if (selectedCount === variationCount && isSelected) {
    const item = findItemWithSelectedVariations(
      possibleItems,
      selectedVariations
    )

    return isSkuAvailable(item)
  }

  return possibleItems.some(isSkuAvailable)
}

interface AvailableVariationParams {
  variations: Variations
  selectedVariations: SelectedVariations
  imagesMap: ImageMap
  onSelectItemMemo: (callbackItem: CallbackItem) => () => void
  skuItems: SelectorProductItem[]
  hideImpossibleCombinations: boolean
}

const parseOptionNameToDisplayOption = ({
  selectedVariations,
  variationName,
  skuItems,
  onSelectItemMemo,
  imagesMap,
  variationCount,
  hideImpossibleCombinations,
}: {
  selectedVariations: SelectedVariations
  variationName: string
  skuItems: SelectorProductItem[]
  onSelectItemMemo: (callbackItem: CallbackItem) => () => void
  imagesMap: ImageMap
  variationCount: number
  hideImpossibleCombinations: boolean
}) => (variationValue: {
  name: string
  originalName: string
}): DisplayOption | null => {
  const isSelected = selectedVariations[variationName] === variationValue.name
  const image = imagesMap?.[variationName]?.[variationValue.name]

  const newSelectedVariation = clone(selectedVariations)

  newSelectedVariation[variationName] = isSelected ? null : variationValue.name

  const possibleItems = findListItemsWithSelectedVariations(
    skuItems,
    newSelectedVariation
  )

  if (possibleItems.length > 0) {
    // This is a valid combination option
    const [item] = possibleItems

    const {
      sellers: [
        {
          commertialOffer: { Price: price },
        },
      ],
    } = item

    const callbackFn = onSelectItemMemo({
      name: variationName,
      value: variationValue.name,
      skuId: item.itemId,
      isMainAndImpossible: false,
      possibleItems,
    })

    return {
      label: variationValue.name,
      originalName: variationValue.originalName,
      onSelectItem: callbackFn,
      image,
      available: showItemAsAvailable({
        possibleItems,
        selectedVariations,
        variationCount,
        isSelected,
      }),
      impossible: false,
      price,
    }
  }

  if (!hideImpossibleCombinations) {
    // This is a impossible combination and will only appear if the prop allows.
    return {
      label: variationValue.name,
      originalName: variationValue.originalName,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSelectItem: () => {},
      image,
      available: true,
      impossible: true,
    }
  }

  // This is a impossible combination and will be hidden.
  return null
}

const variationNameToDisplayVariation = ({
  variations,
  selectedVariations,
  skuItems,
  onSelectItemMemo,
  imagesMap,
  variationCount,
  hideImpossibleCombinations,
}: {
  variations: Variations
  selectedVariations: SelectedVariations
  skuItems: SelectorProductItem[]
  imagesMap: ImageMap
  onSelectItemMemo: (callbackItem: CallbackItem) => () => void
  variationCount: number
  hideImpossibleCombinations: boolean
}) => (variationName: string): DisplayVariation => {
  const name = variationName
  const { values, originalName } = variations[variationName]

  const options = values
    .map(
      parseOptionNameToDisplayOption({
        selectedVariations,
        variationName,
        skuItems,
        onSelectItemMemo,
        imagesMap,
        variationCount,
        hideImpossibleCombinations,
      })
    )
    .filter(Boolean) as DisplayOption[]

  return { name, originalName, options }
}

// Parameters are explained on PropTypes
const getAvailableVariations = ({
  variations,
  selectedVariations,
  imagesMap,
  onSelectItemMemo,
  skuItems,
  hideImpossibleCombinations,
}: AvailableVariationParams): DisplayVariation[] => {
  const variationCount = Object.keys(variations).length

  return Object.keys(variations).map(
    variationNameToDisplayVariation({
      variations,
      selectedVariations,
      skuItems,
      onSelectItemMemo,
      imagesMap,
      variationCount,
      hideImpossibleCombinations,
    })
  )
}

const getAvailableVariationsPromise = (
  params: AvailableVariationParams
): Promise<DisplayVariation[]> => {
  return new Promise(resolve => {
    const result = getAvailableVariations(params)

    resolve(result)
  })
}

const CSS_HANDLES = ['skuSelectorContainer']

/** Renders the main and the secondary variation, if it exists. */
const SKUSelector: FC<Props> = ({
  seeMoreLabel,
  maxItems,
  variations,
  skuItems,
  onSelectItem,
  imagesMap,
  imageHeight,
  imageWidth,
  showBorders,
  displayMode,
  selectedVariations,
  showVariationsLabels,
  showValueForVariation,
  hideImpossibleCombinations,
  showVariationsErrorMessage,
  variationsSpacing: marginBottomProp,
  sliderDisplayThreshold,
  sliderArrowSize,
  sliderItemsPerPage,
  displayPrices,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const variationsSpacing = getValidMarginBottom(marginBottomProp)
  const onSelectItemMemo = useCallback(
    ({
      name,
      value,
      skuId,
      isMainAndImpossible,
      possibleItems,
    }: CallbackItem) => () =>
      onSelectItem({ name, value, skuId, isMainAndImpossible, possibleItems }),
    [onSelectItem]
  )

  const availableVariationsPayload = useMemo(
    () => ({
      variations,
      selectedVariations,
      imagesMap,
      onSelectItemMemo,
      skuItems,
      hideImpossibleCombinations,
    }),
    [
      variations,
      selectedVariations,
      imagesMap,
      onSelectItemMemo,
      skuItems,
      hideImpossibleCombinations,
    ]
  )

  const [displayVariations, setDisplayVariations] = useState<
    DisplayVariation[]
  >(() => getAvailableVariations(availableVariationsPayload))

  useEffectSkipMount(() => {
    let isCurrent = true
    const promise = getAvailableVariationsPromise(availableVariationsPayload)

    promise.then(availableVariations => {
      if (isCurrent) {
        setDisplayVariations(availableVariations)
      }
    })

    return () => {
      isCurrent = false
    }
  }, [availableVariationsPayload])

  const variationClasses = `mb${variationsSpacing}`

  return (
    <div
      className={`${styles.skuSelectorContainer} ${handles.skuSelectorContainer}`}
    >
      {displayVariations.map((variationOption, index) => {
        const selectedItem = selectedVariations[variationOption.name]

        return (
          <Variation
            mode={displayMode}
            maxItems={maxItems}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            showBorders={showBorders}
            variation={variationOption}
            selectedItem={selectedItem}
            seeMoreLabel={seeMoreLabel}
            showLabel={showVariationsLabels}
            containerClasses={variationClasses}
            key={`${variationOption.name}-${index}`}
            showErrorMessage={showVariationsErrorMessage}
            showValueForVariation={getShowValueForVariation(
              showValueForVariation,
              variationOption.name
            )}
            sliderDisplayThreshold={sliderDisplayThreshold}
            sliderArrowSize={sliderArrowSize}
            sliderItemsPerPage={sliderItemsPerPage}
            displayPrices={displayPrices}
          />
        )
      })}
    </div>
  )
}

export default memo(SKUSelector)
