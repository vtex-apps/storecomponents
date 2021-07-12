import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'
import { IconCaret } from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

import { useCarouselContext } from './index.js'
import styles from './swiper.scoped.css'

import './swiper.global.css'
import './overrides.global.css'

const CSS_HANDLES = [
  'carouselContainer',
  'productImagesThumbsSwiperContainer',
  'productImagesThumbActive',
  'productImagesGallerySwiperContainer',
  'productImagesGallerySlide',
  'swiperCaret',
  'swiperCaretNext',
  'swiperCaretPrev',
]

const CARET_ICON_SIZE = 24
const CARET_CLASSNAME =
  'pv8 absolute top-50 translate--50y z-2 pointer c-action-primary'

const MainImageSwiper = () => {
  const { handles } = useCssHandles(CSS_HANDLES)

  const {
    renderSlide,
    slides,
    onGallerySwiper,
    threshold,
    resistanceRatio,
    onSlideChange,
    galleryParams,
    showPaginationDots,
    showNavigationArrows,
  } = useCarouselContext()

  return (
    <Swiper
      onSwiper={instance => onGallerySwiper(instance)}
      className={handles.productImagesGallerySwiperContainer}
      threshold={threshold}
      resistanceRatio={resistanceRatio}
      onSlideChange={onSlideChange}
      updateOnWindowResize
      {...galleryParams}
    >
      {slides.map((slide, i) => (
        <SwiperSlide
          key={`slider-${i}`}
          className={`${handles.productImagesGallerySlide} swiper-slide center-all`}
        >
          {renderSlide(slide, i)}
        </SwiperSlide>
      ))}

      <div
        key="pagination"
        className={classNames(styles['swiper-pagination'], {
          dn: slides.length === 1 || !showPaginationDots,
        })}
      />

      <div
        className={classNames({
          dn: slides.length === 1 || !showNavigationArrows,
        })}
      >
        <span
          key="caret-next"
          className={`swiper-caret-next pl7 pr2 right-0 ${CARET_CLASSNAME} ${handles.swiperCaret} ${handles.swiperCaretNext}`}
        >
          <IconCaret
            orientation="right"
            size={CARET_ICON_SIZE}
            className={styles.carouselIconCaretRight}
          />
        </span>
        <span
          key="caret-prev"
          className={`swiper-caret-prev pr7 pl2 left-0 ${CARET_CLASSNAME} ${handles.swiperCaret} ${handles.swiperCaretPrev}`}
        >
          <IconCaret
            orientation="left"
            size={CARET_ICON_SIZE}
            className={styles.carouselIconCaretLeft}
          />
        </span>
      </div>
    </Swiper>
  )
}

export default MainImageSwiper
