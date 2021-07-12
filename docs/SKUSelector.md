📢 Use this project, [contribute](https://github.com/vtex-apps/store-components) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# SKU Selector

The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.

![image](https://user-images.githubusercontent.com/12139385/70264113-931db980-1776-11ea-9a7e-6d4c8f122ad8.png)

## Configuration

1. Add the `vtex.store-component` app to your theme's dependencies in the `manifest.json`;

```json
  "dependencies": {
    "vtex.store-components": "3.x"
  }
```

2. Add the `sku-selector` block to any block below `store.product` template (product page). For example:

```json
  "store.product": {
    "children": [
      "flex-layout.row#product",
    ]
  },
  "flex-layout.row#product": {
    "children": [
      "sku-selector"
    ]
  },
  "sku-selector": {
    "props": {
      "hideImpossibleCombinations": false
    }
  },
```

| Prop name   | Type      | Description            | Default value                       |
| -------------------------------- | ----------- | ------------------------------------- | ----------------------------------- |
| `visibility`  | `enum`  | Defines the scenarios in which the SKU selector should be displayed. Possible values are: `always` (it will always be displayed even if the product has only one SKU option) or `more-than-one` (the SKU Selector is only displayed when the product has more than one SKU option).  | `always` |
| `visibleVariations`  | `array` | Specifies which product variations should be displayed in the product details page. Notice the following: if you declare a name that doesn't represent a real product variation or an empty array, no variations will be displayed. Check out more information regarding this prop structure below this table. | `undefined` |
| `hideImpossibleCombinations`     | `boolean`   | Whether a product variation that leads to an impossible product combination should be clickable (`true`) or not (`false`). Notice that in both scenarios the variation will be displayed. However, when the prop is set as `false`, the variation is faded displayed (with less opacity). | `true`  |
| `disableUnavailableSelectOptions`     | `boolean`   | Whether a product variation that leads to an impossible product combination should be displayed with the disabled attribute when `displayMode` is set to `select`. By default, all select options are without the disabled attribute set based on the type of variation | `false`  |
| `maxItems`  | `number`  | Maximum number of variation items to be displayed in the SKU Selector before the `See more` button. The button will always be displayed 2 items before the number set in `maxItems`. | `10`  |
| `showValueForVariation`  | `enum`  | Displays a value for the selected variation. This prop replaces the former `showValueNameForImageVariation` (deprecated). Possible values are: `none` (no values are displayed when the variation is selected), `image` (displays only the image value for the selected variation, if any) or `all` (all variation values are displayed).  | `none` | 
| `variationsSpacing`  | `number` | Defines the `margin-bottom` size to be applied in the rendered product variations. Possible values are from `0` to `11` (the prop value is not in `px`, every value represents a tachyons class). | `7`   |
| `showVariationsErrorMessage`  | `boolean` | Whether an error message should be displayed whenever the `BuyButton` is clicked on but no available variation was selected (`true`) or not (`false`). | `true` |
| `showVariationsLabels` | `enum`   | Where variation names should be displayed. Possible values are: `none` (doesn't display the variation names. Replaces the previous `false` behavior), `variation` (shows the variation name as a header of the items. Replaces the previous `true` behavior), `itemValue` (displays the variation name before with each item's value) and `variationAndItemValue` (behaves as `variation` and `itemValue` at the same time).    | `variation` |
| `displayMode` | `enum` | Defines how the product variation names will be displayed (it doesn't apply to product variation images). Possible values are: `default` (displays all variation names), `select` (only displays the selected variation name) or `slider` (displays all variation names in a slider when the number of available options in greater than the value defined in the `sliderDisplayThreshold` prop). Notice that this prop is _responsive_, so you can declare an object as its value specifying a value for each breakpoint (`desktop` and `mobile`). | `default`  |
| `sliderDisplayThreshold` | `number` | Minimum number of product variation names that should be displayed using `slider` display mode. This prop only properly works when `displayMode` is set as `slider`.  | `3`  |
| `sliderArrowSize` | `number`  | Controls the size (height and width) in pixels of the navigation arrows rendered when `displayMode` is set as `slider`. | `12` |
| `sliderItemsPerPage` | `object` | Controls how many slides should be shown on each type of device when `displayMode` is set as `slider`. Check out more information regarding this prop structure below this table. | `{desktop: 3, tablet: 2, phone: 1}` |
| `thumbnailImage` | `string`  | First image to be displayed. This prop value must be the same text string defined in the desired product image's `imageLabel` field (from the Catalog module). If you use this prop and no image declaring the same text string in its `imageLabel` field is found, any product image will be randomly rendered instead. | `undefined` |
| `imageHeight`  | `number` | `object` | Height (in `px`) of the product thumbnail image. You can declare an object as its value in case you want to define a height for each device (`desktop` and `mobile`). | `undefined` |
| `imageWidth` | `number` | `object` | Width (in `px`) of the product thumbnail image. You can declare an object as its value in case you want to define a width for each device (`desktop` and `mobile`).  | `undefined`  |
| `initialSelection` | `enum`  | Controls the user initial selection for available variations when product page is fully loaded. Possible values are: `complete` (selects the first available SKU's variation values), `image` (selects the first available image variation) or `empty` (no variations will be selected when the page is loaded).  | `complete` |
| `classes` | `CustomCSSClasses` | Used to override default CSS handles. To better understand how this prop works, we recommend reading about it [here](https://github.com/vtex-apps/css-handles#usecustomclasses). Note that this is only useful if you're using this block as a React component. | `undefined` |

- **`visibleVariations` array**

| Prop name       | Type    | Description  | Default value |    
| ----------- | ------- | ----------- | ----------- | 
| `name` | `string` | Product variation name.  | `undefined` | 

- **`sliderItemsPerPage` object**

| Prop name      | Type    | Description  | Default value |    
| ----------- | ------- | ----------- | ----------- | 
| `desktop` | `number` | Number of slides to be displayed on desktop devices when `displayMode` is set as `slider`.   | `3` | 
| `tablet` | `number` | Number of slides to be displayed on tablet devices when `displayMode` is set as `slider`. | `2` | 
| `phone` | `number` | Number of slides to be displayed on phone devices when `displayMode` is set as `slider`. | `1` |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                     |
| ------------------------------- |
| `frameAround`                   |
| `seeMoreButton`                 |
| `skuSelectorContainer`          |
| `skuSelectorInternalBox`        |
| `skuSelectorItemImageValue`     |
| `skuSelectorItemImage`          |
| `skuSelectorItemTextValue`      |
| `skuSelectorItem`               |
| `skuSelectorNameContainer`      |
| `skuSelectorNameSeparator`      |
| `skuSelectorName`               |
| `skuSelectorOptionsList`        |
| `skuSelectorSelectorImageValue` |
| `skuSelectorSubcontainer`       |
| `skuSelectorTextContainer`      |
| `valueWrapper`                  |
