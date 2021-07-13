/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { path, equals } from 'ramda'
import { IconCaret } from 'vtex.store-icons'
import { withCssHandles } from 'vtex.css-handles'
import SwiperCore, { Thumbs, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Video, { getThumbUrl } from '../Video'
import ProductImage from '../ProductImage'
import ThumbnailSwiper from './ThumbnailSwiper'
import ImagePlaceholder from './ImagePlaceholder'
import {
  THUMBS_ORIENTATION,
  THUMBS_POSITION_HORIZONTAL,
} from '../../utils/enums'
import styles from './swiper.scoped.css'

import './swiper.global.css'
import './overrides.global.css'

const CARET_ICON_SIZE = 24
const CARET_CLASSNAME =
  'pv8 absolute top-50 translate--50y z-2 pointer c-action-primary'

// install Swiper's Thumbs component
SwiperCore.use([Thumbs, Navigation, Pagination])

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

const initialState = {
  thumbUrl: [],
  alt: [],
  activeIndex: 0,
}

class Carousel extends Component {
  state = {
    ...initialState,
    thumbSwiper: null,
    gallerySwiper: null,
  }

  isVideo = []

  get hasGallerySwiper() {
    return Boolean(this.state.gallerySwiper)
  }

  get hasThumbSwiper() {
    return Boolean(this.state.thumbSwiper)
  }

  setInitialVariablesState() {
    const slides = this.props.slides || []

    this.isVideo = []

    slides.forEach(async (slide, i) => {
      if (slide.type === 'video') {
        const thumbUrl = await getThumbUrl(slide.src, slide.thumbWidth)

        this.isVideo[i] = true
        this.setVideoThumb(i)(thumbUrl)
      } else {
        // Image object doesn't exist when it's being rendered in the server side
        if (!window.navigator) {
          return
        }

        const image = new Image()

        image.src = slide.thumbUrl
      }
    })
  }

  componentDidMount() {
    this.setInitialVariablesState()
  }

  componentDidUpdate(prevProps) {
    const { activeIndex } = this.state
    const { isVideo } = this

    if (!equals(prevProps.slides, this.props.slides)) {
      this.setInitialVariablesState()

      const newInitialState = { ...initialState }

      if (!this.props.slides) return

      this.setState(newInitialState)

      return
    }

    const paginationElement = path(
      ['swiper', 'pagination', 'el'],
      this.state.gallerySwiper
    )

    if (paginationElement) {
      paginationElement.hidden = isVideo[activeIndex]
    }
  }

  handleSlideChange = () => {
    this.setState(prevState => {
      if (!this.hasGallerySwiper) {
        return
      }

      const { activeIndex } = prevState.gallerySwiper

      return { activeIndex, sliderChanged: true }
    })
  }

  setVideoThumb = i => (url, title) => {
    this.setState(prevState => {
      const thumbUrl = { ...prevState.thumbUrl }
      const alt = { ...prevState.alt }

      thumbUrl[i] = url
      alt[i] = title

      return { thumbUrl, alt }
    })
  }

  renderSlide = (slide, i) => {
    const {
      aspectRatio,
      maxHeight,
      zoomMode,
      zoomFactor,
      ModalZoomElement,
      zoomProps: legacyZoomProps,
      fieldValue,
      positionOfSpecification
    } = this.props

    // Backwards compatibility
    const { zoomType: legacyZoomType } = legacyZoomProps || {}
    const isZoomDisabled =
      legacyZoomType === 'no-zoom' || zoomMode === 'disabled'

    switch (slide.type) {
      case 'image':
        return (
          <ProductImage
            index={i}
            src={slide.url}
            alt={slide.alt}
            maxHeight={maxHeight}
            zoomFactor={zoomFactor}
            aspectRatio={aspectRatio}
            ModalZoomElement={ModalZoomElement}
            zoomMode={isZoomDisabled ? 'disabled' : zoomMode}
            positionOfSpecification={positionOfSpecification}
            fieldValue={fieldValue}
          />
        )

      case 'video':
        return (
          <Video
            url={slide.src}
            setThumb={this.setVideoThumb(i)}
            playing={i === this.state.activeIndex}
            id={i}
          />
        )

      default:
        return null
    }
  }

  get galleryParams() {
    const { handles, slides = [], showPaginationDots = true } = this.props

    const params = {}

    if (slides.length > 1 && showPaginationDots) {
      params.pagination = {
        el: `.${styles['swiper-pagination']}`,
        clickable: true,
        clickableClass: styles.swiperPaginationClickable,
        bulletClass: styles.swiperBullet,
        bulletActiveClass: styles['swiperBullet--active'],
        renderBullet(_index, className) {
          return `<span class="${className} c-action-primary"></span>`
        },
      }
    }

    if (slides.length > 1) {
      params.navigation = {
        prevEl: '.swiper-caret-prev',
        nextEl: '.swiper-caret-next',
        disabledClass: `c-disabled ${styles.carouselCursorDefault}`,
      }
    }

    params.thumbs = {
      swiper: this.state.thumbSwiper,
      multipleActiveThumbs: false,
      slideThumbActiveClass: handles.productImagesThumbActive,
    }

    return params
  }

  render() {
    const {
      aspectRatio,
      maxHeight,
      placeholder,
      position,
      handles,
      slides = [],
      thumbnailMaxHeight,
      thumbnailAspectRatio,
      thumbnailsOrientation,
      zoomProps: { zoomType },
      showPaginationDots = true,
      showNavigationArrows = true,
      displayThumbnailsArrows = false,
    } = this.props

    const hasSlides = slides && slides.length > 0

    const isThumbsVertical =
      thumbnailsOrientation === THUMBS_ORIENTATION.VERTICAL

    const hasThumbs = slides && slides.length > 1

    const galleryCursor = {
      'in-page': styles.carouselGaleryCursor,
      'no-zoom': '',
    }

    const imageClasses = classNames(
      'w-100 border-box',
      galleryCursor[hasSlides ? zoomType : 'no-zoom'],
      {
        'ml-20-ns w-80-ns pl5-ns':
          isThumbsVertical &&
          position === THUMBS_POSITION_HORIZONTAL.LEFT &&
          (hasThumbs || !hasSlides),
        'mr-20-ns w-80-ns pr5-ns':
          isThumbsVertical &&
          position === THUMBS_POSITION_HORIZONTAL.RIGHT &&
          (hasThumbs || !hasSlides),
      }
    )

    if (!hasSlides) {
      return (
        <div className={imageClasses}>
          {placeholder ? (
            <ProductImage
              src={placeholder}
              alt="Product image placeholder"
              maxHeight={maxHeight}
              aspectRatio={aspectRatio}
              zoomMode="disabled"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      )
    }

    const containerClasses = classNames(
      handles.carouselContainer,
      'relative overflow-hidden w-100',
      {
        'flex-ns justify-end-ns':
          isThumbsVertical &&
          position === THUMBS_POSITION_HORIZONTAL.LEFT &&
          hasThumbs,
        'flex-ns justify-start-ns':
          isThumbsVertical &&
          position === THUMBS_POSITION_HORIZONTAL.RIGHT &&
          hasThumbs,
      }
    )

    const thumbnailSwiper = (
      <ThumbnailSwiper
        onSwiper={instance => this.setState({ thumbSwiper: instance })}
        isThumbsVertical={isThumbsVertical}
        thumbnailAspectRatio={thumbnailAspectRatio}
        thumbnailMaxHeight={thumbnailMaxHeight}
        thumbUrls={this.state.thumbUrl}
        displayThumbnailsArrows={displayThumbnailsArrows}
        slides={slides}
        position={position}
      />
    )

    return (
      <div className={containerClasses} aria-hidden="true">
        {isThumbsVertical && thumbnailSwiper}

        <div className={imageClasses}>
          {!this.state.thumbSwiper?.destroyed && (
            <Swiper
              onSwiper={instance => this.setState({ gallerySwiper: instance })}
              className={handles.productImagesGallerySwiperContainer}
              threshold={10}
              resistanceRatio={slides.length > 1 ? 0.85 : 0}
              onSlideChange={this.handleSlideChange}
              updateOnWindowResize
              {...this.galleryParams}
            >
              {slides.map((slide, i) => (
                <SwiperSlide
                  key={`slider-${i}`}
                  className={`${handles.productImagesGallerySlide} swiper-slide center-all`}
                >
                  {this.renderSlide(slide, i)}
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
          )}

          {!isThumbsVertical && thumbnailSwiper}
        </div>
      </div>
    )
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
      alt: PropTypes.string,
      thumbUrl: PropTypes.string,
      bestUrlIndex: PropTypes.number,
    })
  ),
  ModalZoomElement: PropTypes.any,
  displayThumbnailsArrows: PropTypes.bool,
}

export default withCssHandles(CSS_HANDLES)(Carousel)
