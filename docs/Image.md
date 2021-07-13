📢 Use this project, [contribute](https://github.com/vtex-apps/store-components) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion). 

# Image

The `Image` is a VTEX block that allows to **add any image** in the store. 

![image](https://user-images.githubusercontent.com/284515/70230392-f982e780-1736-11ea-921b-e83208e80620.png)

## Configuration

1. Import the `vtex.store-component` app to your theme's dependencies in the `manifest.json`;

```json
  "dependencies": {
    "vtex.store-components": "3.x"
  }
```

2. Add the `image` block in any template from your theme. For example:

```json
  "image#example": {
    "props": {
      "src": "https://storecomponents.vteximg.com.br/arquivos/box.png",
      "maxHeight": 24
    }
  },
```

| Prop name     | Type       | Description                                                                | Default value | 
| ------------- | ---------- | -------------------------------------------------------------------------- | - |
| `src`         | `string!`  | Specifies the URL of an image                                              | - |
| `alt`         | `string`   | Specifies an alternate text for an image                                   | - |
| `inlineWidth` | `number` / `string` | Specifies the image's inline width attribute  | - |
| `inlineHeight`| `number` / `string` | Specifies the image's inline height attribute | - |
| `maxWidth`    | `string`   | Specifies the max width of an image                                        | - |
| `maxHeight`   | `string`   | Specifies the max height of an image                                       | - |
| `srcset`      | `string`   | Specifies the URL of the image to use in different situations              | - |
| `sizes`       | `string`   | Specifies image sizes for different page layouts                           | - |
| `title` | `string` | Title to be shown on hover | - |
| `link`        | [`Link`](https://github.com/vtex-apps/native-types/blob/f63aeeb8f6e62f4a9aaec052a8be34973be7389b/pages/contentSchemas.json#L52-L74)| Specifies the link the image will redirect when clicked on                 | - |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| --- |
| `imageElement` |
