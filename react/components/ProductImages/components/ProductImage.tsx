import React, { FC, useMemo, useRef } from 'react'
import { Modal } from 'vtex.modal-layout'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import styles from './specificationDiv.css'
import Zoomable, { ZoomMode } from './Zoomable'
import { imageUrl } from '../utils/aspectRatioUtil'
import ProductImageContext, {
  State as ProductImageState,
} from './ProductImageContext'

const IMAGE_SIZES = [600, 800, 1200]
const DEFAULT_SIZE = 800
const MAX_SIZE = 2048

interface Props {
  index: number
  src: string
  alt: string
  zoomMode: ZoomMode
  zoomFactor: number
  aspectRatio?: AspectRatio
  maxHeight?: number | string
  ModalZoomElement?: typeof Modal,
  positionOfSpecification?: number,
  fieldValue?: string
}

type AspectRatio = string | number

const CSS_HANDLES = ['productImage', 'productImageTag']

const ProductImage: FC<Props> = ({
  index,
  src,
  alt,
  zoomFactor = 2,
  maxHeight = 600,
  ModalZoomElement,
  aspectRatio = 'auto',
  zoomMode = 'in-place-click',
  positionOfSpecification=0,
  fieldValue=''
}) => {
  const srcSet = useMemo(
    () =>
      IMAGE_SIZES.map(
        size => `${imageUrl(src, size, MAX_SIZE, aspectRatio)} ${size}w`
      ).join(','),
    [src, aspectRatio]
  )

  const { handles } = useCssHandles(CSS_HANDLES)
  const imageRef = useRef(null)

  const imageContext: ProductImageState = useMemo(
    () => ({
      src,
      alt,
    }),
    [alt, src]
  )

  return (
    <ProductImageContext.Provider value={imageContext}>
      <div className={handles.productImage}>
        <Zoomable
          mode={zoomMode}
          factor={zoomFactor}
          ModalZoomElement={ModalZoomElement}
          zoomContent={
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              // This img element is just for zoom
              role="presentation"
              src={imageUrl(
                src,
                DEFAULT_SIZE * zoomFactor,
                MAX_SIZE,
                aspectRatio
              )}
              className={`${applyModifiers(handles.productImageTag, 'zoom')}`}
              style={{
                // Resets possible resizing done via CSS
                maxWidth: 'unset',
                width: `${zoomFactor * 100}%`,
                height: `${zoomFactor * 100}%`,
                objectFit: 'contain',
              }}
              // See comment regarding sizes below
              sizes="(max-width: 64.1rem) 100vw, 50vw"
            />
          }
        >
          <img
            ref={imageRef}
            data-vtex-preload={index === 0 ? 'true' : 'false'}
            className={`${applyModifiers(handles.productImageTag, 'main')}`}
            style={{
              width: '100%',
              height: '100%',
              maxHeight: maxHeight || 'unset',
              objectFit: 'contain',
            }}
            src={imageUrl(src, DEFAULT_SIZE, MAX_SIZE, aspectRatio)}
            srcSet={srcSet}
            alt={alt}
            title={alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            // WIP
            // The value of the "sizes" attribute means: if the window has at most 64.1rem of width,
            // the image will be of a width of 100vw. Otherwise, the
            // image will be 50vw wide.
            // This size is used for picking the best available size
            // given the ones from the srcset above.
            //
            // This is WIP because it is a guess: we are assuming
            // the image will be of a certain size, but it should be
            // probably be gotten from flex-layout or something.
            sizes="(max-width: 64.1rem) 100vw, 50vw"
          />
        </Zoomable>
        <div className={styles.containerProdSpecification} style={{display: index==positionOfSpecification? 'flex':'none'}}>
          <p>
            {fieldValue}
          </p>
        </div>
      </div>
    </ProductImageContext.Provider>
  )
}

export default ProductImage
