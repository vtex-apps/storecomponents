import React from 'react'
import { isEmpty } from 'ramda'
import { useProduct } from 'vtex.product-context'
import ContentLoader from 'react-content-loader'
import { useCssHandles } from 'vtex.css-handles'
import type { CssHandlesTypes } from 'vtex.css-handles'

const CSS_HANDLES = [
  'productNameContainer',
  'productBrand',
  'productSku',
  'productReference',
  'productNameLoader',
  'productNameBrandLoader',
  'productNameSkuLoader',
] as const

type DeprecatedProps = {
  /**
   * Name of the product
   * @deprecated This prop is fulfilled automatically via product-context.
   */
  name?: string
  /**
   * Selected SKU name
   * @deprecated This prop is fulfilled automatically via product-context.
   */
  skuName?: string
  /**
   * Product reference
   * @deprecated This prop is fulfilled automatically via product-context.
   */
  productReference?: string
  /**
   * Brand name
   * @deprecated This prop is fulfilled automatically via product-context.
   */
  brandName?: string
}

type Props = {
  /** Show sku */
  showSku?: boolean
  /** Show product reference */
  showProductReference?: boolean
  /** Show brand name */
  showBrandName?: boolean
  /** Classes to be applied to root element */
  className?: string
  /** Classes to be applied to brandName element */
  brandNameClass?: string
  /** Classes to be applied to skuName element */
  skuNameClass?: string
  /** Classes to be applied to productReference element */
  productReferenceClass?: string
  /** Classes to be applied to loader root element */
  loaderClass?: string
  /** HTML tag to be used in the component container */
  tag?: 'div' | 'h1' | 'h2' | 'h3'
  /** Used to override default CSS handles */
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
} & DeprecatedProps

function ProductName({
  productReferenceClass,
  brandNameClass,
  skuNameClass,
  loaderClass,
  className,
  showSku = false,
  showBrandName = false,
  showProductReference = false,
  tag: Wrapper = 'div',
  classes,
  name,
  skuName,
  brandName,
  productReference,
}: Props) {
  const { handles } = useCssHandles(CSS_HANDLES, { classes })

  if (!name) {
    return (
      <div
        className={`${handles.productNameContainer} ${
          handles.productNameLoader
        } ${loaderClass ?? ''}`}
      >
        <ContentLoader
          style={{
            width: '100%',
            height: '100%',
          }}
          width={456}
          height={100}
          preserveAspectRatio="xMinYMin meet"
        >
          <rect height="1.125em" width="75%" x="15%" />
          <rect height="1.125em" width="50%" x="25%" y="1.75em" />
        </ContentLoader>
      </div>
    )
  }

  return (
    <Wrapper
      className={`${handles.productNameContainer} mv0 ${className ?? ''}`}
    >
      <span className={`${handles.productBrand} ${brandNameClass ?? ''}`}>
        {name} {showBrandName && brandName && `- ${brandName}`}
      </span>
      {showSku && skuName && (
        <span className={`${handles.productSku} ${skuNameClass ?? ''}`}>
          {skuName}
        </span>
      )}
      {showProductReference && productReference && (
        <span
          className={`${handles.productReference} ${
            productReferenceClass ?? ''
          }`}
        >
          {`REF: ${productReference}`}
        </span>
      )}
    </Wrapper>
  )
}

/**
 * Displays the product name along other information such as **SKU** or **brand**.
 */
function ProductNameWrapper(props: Props) {
  const valuesFromContext = useProduct()

  if (!valuesFromContext || isEmpty(valuesFromContext)) {
    return <ProductName {...props} />
  }

  const { product, selectedItem } = valuesFromContext

  return (
    <ProductName
      {...props}
      tag={props.tag ?? 'h1'}
      name={props.name ?? product?.productName}
      skuName={props.skuName ?? selectedItem?.name}
      productReference={props.productReference ?? product?.productReference}
      brandName={props.brandName ?? product?.brand}
      className={props.className ?? 't-heading-4'}
    />
  )
}

ProductNameWrapper.schema = {
  title: 'admin/editor.productName.title',
  description: 'admin/editor.productName.description',
  type: 'object',
  properties: {
    showBrandName: {
      type: 'boolean',
      title: 'admin/editor.productName.showBrandName.title',
      default: false,
      isLayout: true,
    },
    showSku: {
      type: 'boolean',
      title: 'admin/editor.productName.showSku.title',
      default: false,
      isLayout: true,
    },
    showProductReference: {
      type: 'boolean',
      title: 'admin/editor.productName.showProductReference.title',
      default: false,
      isLayout: true,
    },
  },
}

export default ProductNameWrapper
