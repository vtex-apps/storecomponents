📢 Use this project, [contribute](https://github.com/vtex-apps/store-components) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion). 

# Product Images

`ProductImages` is a VTEX block responsible for **rendering a product image or video**.

![image](https://user-images.githubusercontent.com/284515/70234551-a5c8cc00-173f-11ea-87d9-9f95c79761c8.png)

## Configuration

1. Import the `vtex.store-component` app to your theme's dependencies in the `manifest.json`;

```json
  "dependencies": {
    "vtex.store-components": "3.x"
  }
```

2. Add the `product-images` block to any block below `store.product` (Product template). For example:

```json
  "store.product": {
    "children": [
      "flex-layout.row#product",
    ]
  },
  "flex-layout.row#product": {
    "children": [
      "product-images"
    ]
  },
  "product-images": {
    "props": {
      "displayThumbnailsArrows": true
    }
  },
```

| Prop name                 | Type      | Description                                                                                                 | Default Value |
| ------------------------- | --------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| `aspectRatio`             | `string`                                   | Sets the aspect ratio of the image, that is, whether the image should be square, portrait, landscape, etc. The value should follow the [common aspect ratio notation](https://en.wikipedia.org/wiki/Aspect_ratio_(image)) i.e. two numbers separated by a colon such as `1:1` for square, `3:4` for upright portrait, or `1920:1080` for even large values) | `"auto"`          |
| `contentOrder`   | `'videos-first'` &#124; `'images-first'`    | Controls the order in which the images and videos are displayed.                                 | `'images-first'`    | 
| `displayThumbnailsArrows` | `boolean` | Displays navigation arrows on the thumbnails media (if there are enough thumbnails for them to scroll)              | `false`       |
| `placeholder` | `string` | Sets the URL for a placeholder image to be used in case there is no available image or video of the product. | `undefined`       |
| `hiddenImages`       | `string`  | Hides images whose labels match the values listed in this prop. Intended to be used along with the `product-summary-sku-selector` block. You can have more information at the [SKU Selector](https://vtex.io/docs/components/all/vtex.store-components/sku-selector) documentation | `skuvariation` |
| `maxHeight`             | `number`                                   | Maximum height for individual product images (in pixels). | `600`          |
| `position`                | `Enum`    | Set the position of the thumbnails (`left` or `right`). Only used when `thumbnailsOrientation` is `vertical` | `left`        |
| `showNavigationArrows`             | `boolean`                                   | Controls if the navigation arrows should appear | `true`          |
| `showPaginationDots`             | `boolean`                                   | Controls if the pagination dots should appear | `true`          |
| `thumbnailAspectRatio`             | `string`                                   | Sets the aspect ratio of the thumbnail image; For more information about aspect ratio, check the `aspectRatio` prop | `"auto"`          |
| `thumbnailMaxHeight`             | `number`                                   | Maximum height for the thumbnail image (in pixels). | `150`          |
| `thumbnailsOrientation`   | `Enum`    | Choose the orientation of the thumbnails. Can be set to `vertical` or `horizontal`                                 | `vertical`    | 
| `zoomFactor` | `number` | Sets how much the zoom increases the image size (e.g. `2` will make the zoomed-in image twice as large) | 2 |
| `zoomMode` | `enum` | Defines the image zoom behavior. Possible values are: `disabled` (zoom is disabled), `in-place-click`(zoom will be triggered when the image is clicked on), `in-place-hover`(zoom will be triggered when the image is hovered on)  or `open-modal` (image is zoommed using a modal). | `in-place-click` |
| `ModalZoom` | `block` | Opens a modal for product image zooming. This prop's value must match the name of the block responsible for triggering the modal containing the product image for zooming (e.g. `modal-layout` from [Modal layout](https://vtex.io/docs/components/all/vtex.modal-layout/) app). Notice that the `ModalZoom` prop will work only if the `zoomMode` prop is set as `open-modal`. To learn more, check out the [Advanced Configuration section](#Advanced-Configuration). | `undefined` |
| `contentType` | `enum` | Controls the type of content that will be displayed in the block. Possible values are: `images`, `videos`, or `all`. | `all` |
| `displayMode` | `enum` | Defines how the product media should be displayed. Possible values are `carousel` (displays the product images and videos in a carousel) and `list` (displays only the product images inline, with no extra markup). *Caution*: The `list` value does not display product videos and it is only compatible with the `maxHeight`, `hiddenImages`, `zoomFactor`, `aspectRatio`,`ModalZoomElement`, and `zoomMode` props. | `carousel` |

### Advanced configuration

In this section, we teach you how to use modal zoom, a property for when you want to open a popup containing the product image for zooming. To use this feature, configure your `product-images` block using the `zoomMode` and `ModalZoom` props with `open-modal` and `modal-layout` set as its values, respectively.

When configured as stated previously, the `zoomMode` prop will allow the trigger of a modal for image zooming. In addition to that, the `MozalZoom` prop will render the block passed in as its value - in this case, mandatorily the `modal-layout`. In such a way, **we become able to configure a modal containing the product image for zooming**.

Once both props are correctly configured, you must declare the `modal-layout` block and the `product-images.high-quality-image` block as its child.

The `modal-layout` block is the one responsible for building the Modal component and triggering the image zooming in a popup box. The `product-images.high-quality-image` block, in turn, is a *special* block, only meant to render the `product-image` block inside the modal. 

Check out an example below:


```jsonc
{
  "product-images.high-quality-image": {
    "props": {
      "zoomMode": "in-place-click",
      "zoomFactor": 2
    }
  },
  "modal-layout#product-zoom": {
    "children": [
      // you can put any other block inside the modal,
      // this is just a normal modal
      "flex-layout.row#product-name",
      "product-images.high-quality-image"
    ]
  },
  "product-images": {
    "props": {
      "ModalZoom": "modal-layout#product-zoom",
      // to use the ModalZoom, the product-images zoomMode value must be set as open-modal
      "zoomMode": "open-modal",
      "aspectRatio": {
        "desktop": "auto",
        "phone": "16:9"
      }
    }
  }
}
```

Notice that the `product-images.high-quality-image` block must be declared as a child of `modal-layout` and, in addition to that, you can also declare other blocks exported by the [Modal Layout app](https://vtex.io/docs/components/all/vtex.modal-layout) as children.

The following table shows the props allowed by `product-images.high-quality-image`:

| Prop name | Type | Description | Default Value |
| --- | --- | --- | --- |
| `zoomMode` | `enum` | Defines the zoom behavior for the `product-images.high-quality-image` block. Possible values are: `disabled` (zoom is disabled), `in-place-click`(zoom will be triggered when the image is clicked on), or `in-place-hover`(zoom will be triggered when the image is hovered on). Different from the `store-images` prop, this one doesn't accept `open-modal` value. | `disabled` |
| `zoomFactor` | `number` | Sets how much the zoom increases the image size (e.g. `2` will make the zoomed-in image twice as large). | `2` |
| `aspectRatio` | `string` | Sets the aspect ratio of the image, that is, whether the image should be square, portrait, landscape, etc. The value should follow the [common aspect ratio notation](https://en.wikipedia.org/wiki/Aspect_ratio_(image) i.e. two numbers separated by a colon such as `1:1` for square, `3:4` for upright portrait, or `1920:1080` for even large values).| `auto` |
| `defaultSize` | `number` |  Image default size (in `px`). | `1200` | 
| `imageSizes` | `[number]` | Image size(s) (in `px`) to be used in the image's [`srcset` HTML attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). If no value is passed to this prop, the `srcset` will use the image original size.  | `undefined` |
| `maxSize` | `number` | Image maximum size (in `px`) for rendering regardless of the screen size. Notice that this prop only works if you also declare the `imageSizes` prop. | `4096` |

You also can wrap the main slider with another layout app, this can be useful when you will pass a floating badge over the image. The main slider is exported by `product-images.main-swiper`. Here an implementation example:

```jsonc
{
  "product-images": {
    "children": [
      "flex-layout.col#productImageMain"
    ],
    "props": {
      "aspectRatio": {
        "desktop": "1:1",
        "phone": "1:1"
      },
      "displayThumbnailsArrows": true,
      "maxHeight": 445,
      "showPaginationDots": false,
      "zoomMode": "in-place-hover",
      "thumbnailMaxHeight": 84,
      "thumbnailAspectRatio": "1:1"
    }
  },
  "flex-layout.col#productImageMain": {
    "children": [
      "stack-layout#productImageMain"
    ],
    "props": {
      "preventVerticalStretch": true,
      "verticalAlign": "middle"
    }
  },
  "stack-layout#productImageMain": {
    "props": {
      "blockClass": "product"
    },
    "children": [
      "product-images-swiper",
      "flex-layout.col#badges"
    ]
  },
  "flex-layout.col#badges": {
    "children": [
      "product-price-savings"
    ],
    "props": {
      "blockClass": "shelf-image-badges",
      "rowGap": 3,
      "horizontalAlign": "right"
    }
  },
}
```

#### Customization

In order to apply CSS customizations on this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| --- |
| `carouselContainer` |
| `carouselCursorDefault` |
| `carouselGaleryCursor` |
| `carouselGaleryThumbs` |
| `carouselIconCaretLeft` |
| `carouselIconCaretRight` |
| `carouselImagePlaceholder` |
| `carouselInconCaretRight` |
| `carouselThumbBorder` |
| `figure` |
| `figure--video` |
| `highQualityContainer` |
| `image` |
| `imgZoom` |
| `productImagesContainer` (`content` is deprecated) |
| `productImagesContainer--carousel`|
| `productImagesContainer--list`|
| `productImagesGallerySlide` |
| `productImagesGallerySwiperContainer` |
| `productImagesThumb` |
| `productImagesThumbActive` |
| `productImagesThumbCaret` |
| `productImagesThumbsSwiperContainer` |
| `productImageTag--main`|
| `productImageTag--zoon`|
| `productImageTag`|
| `productVideo` |
| `swiper-pagination` |
| `swiperBullet--active` |
| `swiperBullet` |
| `swiperCaret` |
| `swiperCaretNext` |
| `swiperCaretPrev` |
| `thumbImg` |
| `thumbImg--video` |
| `video` |
| `video`|
| `videoContainer` |
