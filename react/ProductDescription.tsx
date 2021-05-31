import React, { memo, useMemo, useRef, useState } from 'react'
import type { MemoExoticComponent, PropsWithChildren } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { formatIOMessage } from 'vtex.native-types'
import { useProduct } from 'vtex.product-context'
import { useDevice } from 'vtex.device-detector'
import { Button } from 'vtex.styleguide'

import { SanitizedHTML, DEFAULTS } from './components/SanitizedHTML'
import GradientCollapse from './components/GradientCollapse'

import './ProductDescription.css'

const CSS_HANDLES = [
  'productDescriptionContainer',
  'productDescriptionTitle',
  'productDescriptionText',
  'readMoreButton',
] as const

const defaultDesktopCharacters = 1000
const defaultMobileCharacters = 500

type Props = {
  /** Description fallback */
  description?: string
  /** Section title */
  title?: string
  /** Define if content should start collapsed or not */
  collapseContent?: boolean
  /** Used to override default CSS handles */
  customCollapse?: boolean
  desktopLimitCharacters?: number
  mobileLimitCharacters?: number
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

const allowedTags = [
  ...DEFAULTS.allowedTags,
  'link',
  'body',
  'html',
  'style',
  'link',
  'script',
  'head',
  'meta',
  'object',
  'embed',
]

const allowedAttributes = {
  ...DEFAULTS.allowedAttributes,
  meta: ['charset', 'name', 'content'],
  object: ['type', 'height', 'width', 'data'],
  embed: ['height', 'width', 'src'],
}

/**
 * Product Description Component.
 * Render the description of a product
 */
function ProductDescription(props: PropsWithChildren<Props>) {
  const { handles } = useCssHandles(CSS_HANDLES, { classes: props.classes })
  const intl = useIntl()
  const { product } = useProduct()
  const { isMobile } = useDevice()

  const { collapseContent = true, title, customCollapse = false } = props
  const description = props.description ?? product?.description
  const [isCustomCollapsed, setCustomCollapsed] = useState(customCollapse)

  const {
    desktopLimitCharacters = defaultDesktopCharacters,
    mobileLimitCharacters = defaultMobileCharacters,
  } = props

  const limitCharacters = useMemo(() => {
    if (isCustomCollapsed) {
      const validDesktopLimitCharacters = Number.isNaN(desktopLimitCharacters)
        ? defaultDesktopCharacters
        : desktopLimitCharacters

      const validMobileLimitCharacters = Number.isNaN(mobileLimitCharacters)
        ? defaultMobileCharacters
        : mobileLimitCharacters

      return isMobile ? validMobileLimitCharacters : validDesktopLimitCharacters
    }

    return 0
  }, [
    isCustomCollapsed,
    isMobile,
    desktopLimitCharacters,
    mobileLimitCharacters,
  ])

  if (!description) {
    return null
  }

  const changeDescription = () => {
    setCustomCollapsed(false)
  }

  return (
    <div className={handles.productDescriptionContainer}>
      <FormattedMessage id="store/product-description.title">
        {txt => (
          <h2
            className={`${handles.productDescriptionTitle} t-heading-5 mb5 mt0`}
          >
            {title ? formatIOMessage({ id: title, intl }) : txt}
          </h2>
        )}
      </FormattedMessage>

      {customCollapse ? (
        <div className={`${handles.productDescriptionText} c-muted-1`}>
          <SanitizedHTML
            content={
              isCustomCollapsed
                ? description.substring(0, limitCharacters)
                : description
            }
            allowedTags={allowedTags}
            allowedAttributes={allowedAttributes}
          />
          {isCustomCollapsed && description.length > limitCharacters ? (
            <span className={`${handles.showMoreButtonSpan}`}>
              <Button
                size="small"
                variation="tertiary"
                onClick={changeDescription}
              >
                {intl.formatMessage({
                  id: 'store/customCollapse.readMore',
                })}
              </Button>
            </span>
          ) : null}
        </div>
      ) : (
        <div className={`${handles.productDescriptionText} c-muted-1`}>
          {collapseContent ? (
            <GradientCollapse collapseHeight={220}>
              <SanitizedHTML
                content={description}
                allowedTags={allowedTags}
                allowedAttributes={allowedAttributes}
              />
            </GradientCollapse>
          ) : (
            <SanitizedHTML
              content={description}
              allowedTags={allowedTags}
              allowedAttributes={allowedAttributes}
            />
          )}
        </div>
      )}
    </div>
  )
}

const MemoizedProductDescription: MemoExoticComponent<
  typeof ProductDescription
> & { schema?: Record<string, string> } = memo(ProductDescription)

MemoizedProductDescription.schema = {
  title: 'admin/editor.product-description.title',
}

export default MemoizedProductDescription
