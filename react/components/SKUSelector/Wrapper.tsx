import React, { useMemo, useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { pathOr, pick, path } from 'ramda'
import { useProductDispatch } from 'vtex.product-context/ProductDispatchContext'

import SKUSelector from './index'
import { ProductItem, Variations } from './types'
import { useResponsiveValues } from 'vtex.responsive-values'

const useVariations = (skuItems: ProductItem[], shouldNotShow: boolean, variationsToShow?: string[]) => {
  const result = useMemo(() => {
    if (shouldNotShow || variationsToShow && variationsToShow.length === 0) {
      return {}
    }
    const variations: Variations = {}
    const variationsSet: Record<string, Set<string>> = {}
    if (variationsToShow) {
      variationsToShow = variationsToShow.map(variation => variation.toLowerCase().trim())
    }

    for (const skuItem of skuItems) {
      for (const currentVariation of skuItem.variations) {
        const { name, values } = currentVariation
          if (!variationsToShow || variationsToShow.includes(name.toLowerCase().trim())) {

            const value = values[0]
            const currentSet = variationsSet[name] || new Set()
            currentSet.add(value)
            variationsSet[name] = currentSet
        }
      }
    }
    const variationsNames = Object.keys(variationsSet)
    // Transform set back to array
    for (const variationName of variationsNames) {
      const set = variationsSet[variationName]
      variations[variationName] = Array.from(set)
    }
    return variations
  }, [skuItems, shouldNotShow])
  return result
}

interface MatchingImagesProps {
  showMatchedImages?: boolean
  imageTextMatch?: string
}

interface Props {
  skuItems: ProductItem[]
  skuSelected: ProductItem
  onSKUSelected?: (skuId: string) => void
  maxItems?: number
  seeMoreLabel: string
  hideImpossibleCombinations?: boolean
  showValueNameForImageVariation?: boolean
  imageHeight?: number | object
  imageWidth?: number | object
  matchedImagesProps?: MatchingImagesProps
  variationsToShow?: string[]
  showVariationsLabels?: boolean
  bottomMargin?: 'default' | 'none'
}

const SKUSelectorWrapper: StorefrontFC<Props> = props => {
  const valuesFromContext = useProduct()
  const dispatch = useProductDispatch()

  const { imageHeight, imageWidth } = useResponsiveValues(pick(['imageHeight', 'imageWidth'], props))

  const skuItems =
    props.skuItems != null
      ? props.skuItems
      : pathOr<ProductItem[]>([], ['product', 'items'], valuesFromContext)

  const skuSelected =
    props.skuSelected != null
      ? props.skuSelected
      : (valuesFromContext.selectedItem as ProductItem)

  const shouldNotShow =
    skuItems.length === 0 ||
    !skuSelected ||
    !skuSelected.variations ||
    skuSelected.variations.length === 0

  const variations = useVariations(skuItems, shouldNotShow, props.variationsToShow)

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'SKU_SELECTOR_SET_IS_VISIBLE',
        args: { isVisible: !shouldNotShow },
      })
    }
  }, [shouldNotShow, dispatch])

  if (shouldNotShow) {
    return null
  }

  return (
    <SKUSelector
      skuItems={skuItems}
      variations={variations}
      imageWidth={imageWidth}
      skuSelected={skuSelected}
      maxItems={props.maxItems}
      imageHeight={imageHeight}
      seeMoreLabel={props.seeMoreLabel}
      bottomMargin={props.bottomMargin}
      onSKUSelected={props.onSKUSelected}
      showVariationsLabels={props.showVariationsLabels}
      hideImpossibleCombinations={props.hideImpossibleCombinations}
      showValueNameForImageVariation={props.showValueNameForImageVariation}
      imageTextMatch={path(['matchedImagesProps', 'imageTextMatch'], props)}
      showMatchedImages={pathOr(false, ['matchedImagesProps', 'showMatchedImages'], props)}
    />
  )
}

SKUSelectorWrapper.schema = {
  title: 'admin/editor.skuSelector.title',
  description: 'admin/editor.skuSelector.description',
}

export default SKUSelectorWrapper
