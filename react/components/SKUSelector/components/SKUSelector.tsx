import React, { useCallback, memo, useState, useMemo } from 'react'
import { filter, clone } from 'ramda'
import { ResponsiveValuesTypes } from 'vtex.responsive-values'

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
import { useSKUSelectorCssHandles } from '../SKUSelectorCssHandles'
import { getDefaultSeller } from '../../../utils/sellers'

export type ShowValueForVariation = 'none' | 'image' | 'all'

// The boolean type was kept because for backward compatibility
export type ShowVariationsLabels =
  | boolean
  | 'none'
  | 'variation'
  | 'itemValue'
  | 'variationAndItemValue'

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
  disableUnavailableSelectOptions: boolean
  showValueForVariation: ShowValueForVariation
  showBorders?: boolean
  imageHeight?: number
  imageWidth?: number
  showVariationsLabels: ShowVariationsLabels
  variationsSpacing?: number
  showVariationsErrorMessage: boolean
  displayMode: DisplayMode
  sliderDisplayThreshold: number
  sliderArrowSize: number
  sliderItemsPerPage: ResponsiveValuesTypes.ResponsiveValue<number>
}

function isSkuAvailable(item?: SelectorProductItem) {
  if (!item) {
    return false
  }

  const seller = getDefaultSeller(item.sellers)

  if (!seller) {
    return false
  }

  return seller.commertialOffer?.AvailableQuantity > 0
}

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
  disableUnavailableSelectOptions: boolean
}

const parseOptionNameToDisplayOption = ({
  selectedVariations,
  variationName,
  skuItems,
  onSelectItemMemo,
  imagesMap,
  variationCount,
  hideImpossibleCombinations,
  disableUnavailableSelectOptions,
}: {
  selectedVariations: SelectedVariations
  variationName: string
  skuItems: SelectorProductItem[]
  onSelectItemMemo: (callbackItem: CallbackItem) => () => void
  imagesMap: ImageMap
  variationCount: number
  hideImpossibleCombinations: boolean
  disableUnavailableSelectOptions: boolean
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
      disabled: disableUnavailableSelectOptions,
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
      disabled: disableUnavailableSelectOptions,
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
  disableUnavailableSelectOptions,
}: {
  variations: Variations
  selectedVariations: SelectedVariations
  skuItems: SelectorProductItem[]
  imagesMap: ImageMap
  onSelectItemMemo: (callbackItem: CallbackItem) => () => void
  variationCount: number
  hideImpossibleCombinations: boolean
  disableUnavailableSelectOptions: boolean
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
        disableUnavailableSelectOptions,
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
  disableUnavailableSelectOptions,
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
      disableUnavailableSelectOptions,
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

export const CSS_HANDLES = ['skuSelectorContainer'] as const

/** Renders the main and the secondary variation, if it exists. */
function SKUSelector({
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
  disableUnavailableSelectOptions,
  showVariationsErrorMessage,
  variationsSpacing: marginBottomProp,
  sliderDisplayThreshold,
  sliderArrowSize,
  sliderItemsPerPage,
}: Props) {
  const { handles } = useSKUSelectorCssHandles()
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
      disableUnavailableSelectOptions,
    }),
    [
      variations,
      selectedVariations,
      imagesMap,
      onSelectItemMemo,
      skuItems,
      hideImpossibleCombinations,
      disableUnavailableSelectOptions,
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
          />
        )
      })}
    </div>
  )
}

export default memo(SKUSelector)
