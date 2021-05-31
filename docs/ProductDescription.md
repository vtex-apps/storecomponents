# Product Description

## Description

`ProductDescription` is a VTEX block that displays the description of a product.
This Component can be imported and used by any VTEX App.

:loudspeaker: **Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Configuration

1. Import the `vtex.store-components` app to your theme's dependencies in the `manifest.json`, for example:

```json
  "dependencies": {
    "vtex.store-components": "2.x"
  }
```

2. Add the `product-description` block to any block below `store.product`(Product template). For example:

```json
  "store.product": {
    "children": [
      "flex-layout.row#product",
    ]
  },
  "flex-layout.row#product": {
    "children": [
      "product-description"
    ]
  }
```

### Configuration

| Prop name         | Type      | Description                                                                                                                                                                          | Default     |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `collapseContent` | `Boolean` | If true, whenever the product description is too big, it will collapse and show a "Show More" button. When false, it will never collapse and will always show the whole description. | `true` |
| `title`           | `string`  | Defines a custom title for the description section. | `undefined` |
| `classes` | `CustomCSSClasses` | Used to override default CSS handles. To better understand how this prop works, we recommend reading about it [here](https://github.com/vtex-apps/css-handles#usecustomclasses). Note that this is only useful if you're using this block as a React component. | `undefined` |
| `customCollapse`           | `boolean` | Overrides the `collapseContent` prop and allows you to collapse content by number of characters. | `false` |
| `desktopLimitCharacters`   | `number`  | Works only if `collapseContent` is `true`. It determine the number of characters shown for desktop devices. | `1000` |
| `mobileLimitCharacters`    | `number`  | Works only if `collapseContent` is `true`. It determine the number of characters shown for mobile devices. | `500` |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                   |
| ----------------------------- |
| `productDescriptionContainer` |
| `productDescriptionTitle`     |
| `productDescriptionText`      |
| `readMoreButton`              |
