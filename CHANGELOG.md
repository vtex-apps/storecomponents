# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- New prop `displayPrices` to `sku-selector`.

## [3.137.0] - 2020-12-15
### Added
- `displayMode` prop to `product-images`

## [3.136.3] - 2020-12-11
### Fixed
- SKUSelector types.

## [3.136.2] - 2020-12-08

### Changed
- Migrate `user-address` to TypeScript.

## [3.136.1] - 2020-12-08
### Changed
- Refactored `ProductDescription` to TypeScript.

## [3.136.0] - 2020-12-08
### Added
- `withLink` prop on `ProductBrand`. It controls in which cases the component should link to the brand's page.
### Changed
- `logoWithLink` prop on `ProductBrand` is now deprecated.

## [3.135.0] - 2020-12-08
### Changed
- Preload main image of `ProductImages`.

## [3.134.0] - 2020-12-08
### Added
- New prop `containerMode` to `search-bar`.

## [3.133.1] - 2020-12-08
### Changed
- Migrate `autocomplete-result-list` and `search-bar` to TypeScript.

## [3.133.0] - 2020-12-07
### Added
- `ProductImages` displays a default placeholder image if no image or video is present.
- `ProductImages` can receive a custom placeholder image by using the `placeholder` prop

## [3.132.7] - 2020-12-07
### Changed
- Refactored ProductName to TypeScript.

## [3.132.6] - 2020-12-02
### Changed
- `Logo` components implementation from JavaScript to TypeScript.

## [3.132.5] - 2020-12-02
### Changed
- `ProductBrand` components implementation from JavaScript to TypeScript.

## [3.132.4] - 2020-12-02
### Changed
- `Notification` components implementation from `js` to `tsx`.

## [3.132.3] - 2020-12-01
### Changed
- Deprecate blocks: `newsletter`, `product-specifications`, and `product-highlights`.
- Deprecate components: `Animation`, `CategoriesHighlights`, `CollectionBadges`, `DiscountBadge`, `GradientCollapse`, `Greeting`, `Newsletter`, `ProductHighlights`, `ProductSpecifications`, `Slider`, and `ProductSeparator`.

## [3.132.2] - 2020-12-01
### Changed
- Refactored `Container` to TypeScript.

## [3.132.1] - 2020-11-30
### Changed
- Refactored `AvailabilitySubscriber` to typescript.

## [3.132.0] - 2020-11-18
### Added
- New prop `inputType` to `search-bar`.

## [3.131.3] - 2020-11-13
### Fixed
- Navigating between product images using thumbnails was not working 


## [3.131.2] - 2020-11-10
### Changed
- Refactor `CollectionBadge` to TypeScript.

## [3.131.1] - 2020-10-27

### Changed

- Increase search bar delay

## [3.131.0] - 2020-10-13

### Added
- `picture` and `source` to `SanitizedHTML` allowed tag list.
- Fixing `vtex link`.

## [3.130.2] - 2020-09-28
### Fixed
- Issue where product images would zoom out immediately in certain cases.

## [3.130.1] - 2020-09-21

### Added
- `shouldUpdateOrderForm` prop to `ShippingSimulator`
- `showIfEmpty` prop to `UserAddress` so that shopper with no address can add one
- Event listener to `UserAddress` for `locationUpdated` event from `vtex.shopper-location`

## [3.130.0] - 2020-09-21
### Added
- `product-sku-attributes` interface

## [3.129.0] - 2020-09-18
### Fixed
- Added a deprecation disclaimer in the Product Specifications block documentation.

### Added
- Table head to `shipping-simulator`.
- Missing CSS handles to `shipping-simulator`.

## [3.128.1] - 2020-09-18
### Fixed
- SKU Selector issue with translated stores.

## [3.128.0] - 2020-09-17
### Added
- Color translation for `fi-FI`.

## [3.127.1] - 2020-09-09
### Fixed
- Add full path of content definitions to avoid breaking when extending some interface.

## [3.127.0] - 2020-09-08
### Changed
- Render BackToTopButton only when visible.

## [3.126.3] - 2020-09-04
### Fixed
- AddressInfo showing *null, null* when only postalCode is available

## [3.126.2] - 2020-09-03

### Added
- `showStreet`, `showCityAndState`, `showPostalCode`, `showPrefix` props to `UserAddress`
- CSS handles to `UserAddress`

## [3.126.1] - 2020-09-03
### Fixed
- Encode forward slash in the search term.

## [3.126.0] - 2020-09-02
### Changed
- [`ProductImages`] Updated Swiper from `v4` to `v6`.

## [3.125.0] - 2020-08-28
### Changed
- Update shipping data on `orderForm` after shipping simulation.
- Pre-fill postal code information with `orderForm`'s shipping data.

## [3.124.0] - 2020-08-27
### Added
- New CSS Handles to `product-specifications`:
  - `specificationsTableRow`
  - `specificationsTableHead`
  - `specificationsTableBody`

## [3.123.8] - 2020-08-26
### Fixed
- Allow to pass `width` and `height` to `iframe` and `img` tags.
- Allow to pass `rowspan` and `colspan` to `td` tags.

## [3.123.7] - 2020-08-25
### Fixed
- Updated `README.md` file for `animation`, `slider` and `product-price` blocks to remove the `Deprecated` badge from the title.

## [3.123.6] - 2020-08-25
### Fixed
- Documentation on `product-images` block.

## [3.123.5] - 2020-08-24
### Added
- `object` and `embed` to `ProductDescription` allowed tag list.

## [3.123.4] - 2020-08-18
### Added
- Calculate shipping when enter is pressed

## [3.123.3] - 2020-08-14
### Fixed
- Issue of product specification in multilanguage stores.

## [3.123.2] - 2020-08-12
### Fixed
- Prop name in docs.

## [3.123.1] - 2020-08-11
### Added
- `meta` and `head` to `SanitizedHTML` allowed tag list.

## [3.123.0] - 2020-08-11
### Added
- `imageSizes`, `defaultSize`, `maxSize` props to `HighQualityProductImage`.

### Fixed
- `HighQualityProductImage` reducing image size.

## [3.122.7] - 2020-08-10
### Added
- `header` and `footer` to `SanitizedHTML` allowed tag list.

## [3.122.6] - 2020-08-10
### Fixed
- Update `insane` to support parsing `<!doctype...>`.

## [3.122.5] - 2020-08-05
### Fixed
- Allow `link` and `script` tags in `product-description`.
- Allow attributes `rel`, `href`, and `type` for `link` tag in `SanitizeHtml`.

## [3.122.4] - 2020-08-05
### Fixed
- Allow `link`, `body`, `html`, and `style` tags in `product-description`.
- Allow `figure` tag in `SanitizeHtml`.

## [3.122.3] - 2020-08-04
### Fixed
- SKUSelector `hideImpossibleCombinations` rendering a variation with no items attached.

## [3.122.2] - 2020-08-04
### Changed
- Update eslint and re-format project.

## [3.122.1] - 2020-07-30
### Fixed
- SKUSelector: Use `originalName` to match with `visibleVariations` prop.

## [3.122.0] - 2020-07-29

### Added
- Add new `productImageTag--zoom` and `productImageTag--main` CSS Handles to Product Images component.

## [3.121.0] - 2020-07-27
### Added
- Expose `SanitizedHTML` component.

## [3.120.8] - 2020-07-22
### Fixed
- SKU Selector documentation (prop table).

## [3.120.7] - 2020-07-21
### Fixed
- Use `originalName` in SKU Selector values.

## [3.120.6] - 2020-07-21
### Fixed
- Use `originalName` in SKU Selector to avoid CSS classes to vary based on translation.

## [3.120.5] - 2020-07-21
### Fixed
- Replace `insane` with `@vtex/insane` to support wildcard tag in `allowedAttributes`.

## [3.120.4] - 2020-07-17
### Fixed
- Prevent `insane` from filtering out `iframe`s.

## [3.120.3] - 2020-07-17
### Fixed
- Prevent `insane` defaults from being overriden if no extra config was passed.

## [3.120.2] - 2020-07-17
### Removed
- Unused icons and buttons from `react-share`.

## [3.120.1] - 2020-07-16
### Changed
- Remove `react-html-parser` in favor of `insane`.

## [3.120.0] - 2020-07-16
### Added
- Inserted CSS Handle for active swiperBullet in Product Images Carousel.

## [3.119.12] - 2020-07-16
### Changed
- Create a schema to the interface `image` without the description to remove it from the new CMS.

## [3.119.11] - 2020-07-16
### Changed
- Change wrapper element of `share` icons from `div` to `button`.

## [3.119.10] - 2020-07-15
### Fixed
- Revert changes from `3.119.9`.

## [3.119.9] - 2020-07-15 [YANKED]
### Changed
- Replace `react-html-parser` with `html-react-parser`.

## [3.119.8] - 2020-07-15
### Fixed
- Handling of recursive input values in assembly options.

## [3.119.7] - 2020-07-14
### Fixed
- Search Bar documentation (New CSS Handles: `searchBarInnerContainer--opened` and `searchBarInnerContainer--filled`

## [3.119.6] - 2020-07-08
### Fixed
- Animation component documentation by adding a deprecation badge and disclaimer.
- Slider component documentation by adding a deprecation badge and disclaimer.

## [3.119.5] - 2020-07-07
### Fixed
- Product Image not being updated whenever a color variant sku was selected.

## [3.119.4] - 2020-07-01
### Fixed
- Issue where the background image of infocard component wouldn't be adjustable via CSS when lazyloaded.

## [3.119.3] - 2020-06-25
### Fixed
- `open-modal` zoom option of `product-images` not working in mobile.

## [3.119.2] - 2020-06-23
### Fixed
- Updated Product Image's README.md (fixed the `ModalZoom` prop type).

## [3.119.1] - 2020-06-22
### Fixed
- `Newsletter` not allow empty spaces on email input.

## [3.119.0] - 2020-06-19
### Added
- Props `ModalZoom` to `product-images`.
- Option `'open-modal'` to prop `zoomMode` of `product-images`.
- `product-images.high-quality-image` block.

## [3.118.0] - 2020-06-17
### Added
- Apply modifiers to handle `searchBarInnerContainer` in `SearchBar`.

### Fixed
- CSS Handles table in README.md file: added the needed attribute to the `specificationItemProperty` handle.

## [3.117.3] - 2020-06-15
### Removed
- Table of maintenance of major versions from docs.

## [3.117.2] - 2020-06-10
### Fixed
- Lint problems.

## [3.117.1] - 2020-06-09

### Removed
- `rest` query string.

## [3.117.0] - 2020-06-08
### Added
- `contentType` prop to the ProductImages component.

## [3.116.5] - 2020-06-08
### Fixed
- Local version of `react-intl`.

## [3.116.4] - 2020-06-04
### Fixed
- `autocomplete` breaking because of `inputValue` beeing `undefined`.

## [3.116.3] - 2020-06-04
### Changed
- if `search-bar` is in a modal it closes after navigation.

## [3.116.2] - 2020-06-04
### Changed
- Bump dependency versions.

## [3.116.1] - 2020-06-04
### Fixed
- Typos in the documentation.

## [3.116.0] - 2020-06-03
### Added
- New data attribute on product specification with the name of the specification.

## [3.115.3] - 2020-06-02
### Fixed
- Brand image link changed to brand slug instead of brand name.

## [3.115.2] - 2020-05-29
### Fixed
- Revert release v3.110.1 that was making images to not load in Chrome 83.

## [3.115.1] - 2020-05-28
### Fixed
- Fixed Product Price block documentation by adding a deprecation badge and disclaimer.

## [3.115.0] - 2020-05-20
### Added
- Option to edit `callToActionLinkTarget` prop from the InfoCard on site editor.

## [3.114.6] - 2020-05-19

### Added

- Back to Top Button added to readme

## [3.114.5] - 2020-05-13

### Fixed

- Improve documentation for Buy Button block

## [3.114.4] - 2020-05-12
### Fixed
- `Autocomplete` closing by clicking on an interactive component inside it.

## [3.114.3] - 2020-05-07
### Fixed
- `Newsletter` now appears on the site-editor again.

## [3.114.2] - 2020-05-05
### Fixed
- `proptypes` on InfoCard component.

## [3.114.1] - 2020-05-05
### Fixed
- `BackToTopButton` not being rendered on mobile devices.

## [3.114.0] - 2020-05-04
### Added
- `callToActionLinkTarget` and `linkTarget` props to the `InfoCard` component.

## [3.113.0] - 2020-04-30
### Added
- `swiperBullet` css handle to `ProductImages` pagination bullet.

### Changed
- Use `vtex/swiper#4.5.2`.

## [3.112.0] - 2020-04-29
### Added
- Added `BackToTopButton` Component.

## [3.111.0] - 2020-04-23
### Added
- `textMode` prop to the InfoCard component.

## [3.110.2] - 2020-04-20
### Security
- Bump versions of dependencies.

## [3.110.1] - 2020-04-16
### Fixed
- `ProductImages` zoom out of the first image not working.

## [3.110.0] - 2020-04-13
### Added
-  New prop `selectedSeller` to BuyButton.

## [3.109.3] - 2020-04-08
### Fixed
- `InfoCard`s with no image not being rendered at all.

## [3.109.2] - 2020-04-07
### Changed
- Allow `info-card` background to be loaded lazily.

## [3.109.1] - 2020-04-06
### Fixed
- Problem where `InfoCard` component would render `banner` div even if no image was received.

## [3.109.0] - 2020-03-25

### Added
- färger (sv_SE), farby (sk_SK) and boje (sr_RS) to the array of colors of `SKUSelector`

## [3.108.0] - 2020-03-19
### Added
- kolory (pl_PL) and farve (dk_DK) to the array of colors of `SKUSelector`

## [3.107.0] - 2020-03-17
### Added
- `showMoreButton`, `content` and `container` CSS Handles to `GradientCollapse`.

## [3.106.0] - 2020-03-16
### Added
- Add `selected` modifier to the selected item in SKUSelector.

## [3.105.3] - 2020-03-16
### Fixed
- Color name for Romanian.

## [3.105.2] - 2020-03-13
### Fixed
- Color name for Italian.

## [3.105.1] - 2020-03-09
### Fixed
- `SKUSelector` not showing any images if you pass the prop `thumbnailImage` and the images have a label, but none of them can pass to the test of the `thumbnailImage` regex.

## [3.105.0] - 2020-03-04
### Added
- Some CSS Handles to the `SelectorItem` component.

## [3.104.3] - 2020-02-21
### Fixed
- Add rootpath to view cart toast url.

## [3.104.2] - 2020-02-19
### Fixed
- `SearchBar` moving when icon change from `search` to `clear`.

## [3.104.1] - 2020-02-19
### Fixed
- `displayMode` error message being erroneously displayed.

## [3.104.0] - 2020-02-19
### Added
- `displayMode` prop to define the behavior of buttons on the `SearchBar` component.

### Changed
- Deprecate `submitOnIconClick` prop from `SearchBar` in favor of `displayMode`.

## [3.103.2] - 2020-02-19
### Fixed
- PropTypes error in ProductImages.

## [3.103.1] - 2020-02-18
### Changed
- Import addressQuery directly.

## [3.103.0] - 2020-02-14
### Added
- `contentOrder` prop to `product-images`.

## [3.102.9] - 2020-02-13
### Fixed
- Only define a selected SKU if all visible variations are set.
- Handle initial empty SKU selection.

## [3.102.8] - 2020-02-13
### Fixed
- Stop considering empty arrays to `visibleSpecifications` and `hiddenSpecifications` in `ProductSpecfications`.

## [3.102.7] - 2020-02-12
### Fixed
- Do not show "Item already in cart" toast if adding item with options.

## [3.102.6] - 2020-02-11
### Added
- Dispatch `SELECT_IMAGE_VARIATION` action when manually selecting a image variant SKU

## [3.102.5] - 2020-02-10
### Added
- Documentation to the `title` prop of the `image` block.

## [3.102.4] - 2020-02-10
### Added
- Translations for the prop `title` of the `image` block.

## [3.102.3] - 2020-02-10
### Fixed
- French color typo

## [3.102.2] - 2020-01-30

### Fixed
- Fix specification values exibition. It was showing just the first value of the array.

## [3.102.1] - 2020-01-23
### Changed
- Ordered `SearchBar` props on readme.

### Added
- `attemptPageTypeSearch` on `SearchBar`'s readme.

## [3.102.0] - 2020-01-22
### Added
- Couleur for France, Kleuren for Netherlands and Colori for Italy.

## [3.101.2] - 2020-01-22
### Fixed
- The order of the SKU variations in the product details page. The order should be the one in the catalog now.

## [3.101.1] - 2020-01-21
### Fixed
- Outdated documentation on `ProductSpecifications` component.

## [3.101.0] - 2020-01-17

### Added
- `visibility` prop to `sku-selector` to show it only when it has more than one sku

## [3.100.1] - 2020-01-14
### Fixed
- Issue with image sizing in the SKU Selector.

## [3.100.0] - 2020-01-13
### Added
- New `"slider"` value for `displayMode` from SKU Selector.
- New props `sliderDisplayThreshold`, `sliderArrowSize` and `sliderItemsPerPage` to configure the `slider-layout` used by SKU Selector when `displayMode` is set to `"slider"`.

## [3.99.0] - 2020-01-10
### Added
- New CSS handle `logoLink`.

## [3.98.0] - 2020-01-02
### Added
- `showValueForVariation` to `SKUSelector`.

### Changed
- Deprecate `showValueNameForImageVariation` prop from `SKUSelector.

## [3.97.1] - 2019-12-30
### Fixed
- Fix problem of swiper breaking when updating in a infinite loop.

## [3.97.0] - 2019-12-26
### Added
- `minSearchTermLength` prop to `SearchBar`. Defines the minimum search term length allowed.
- `autocompleteAlignment` prop to `SearchBar`. Autocomplete Horizontal alignment.
- `openAutocompleteOnFocus` prop to `SearchBar`. Identify if autocomplete should be open on input focus or not.
- `blurOnSubmit` prop to `SearchBar`. Identify if input should blur on submit.
- `autocompleteFullWidth` prop to `SearchBar`. If true, the autocomplete will fill the whole window width.
- `submitOnIconClick` prop to `SearchBar`. Identify if icon should submit on click.

### Changed
- Now, the search bar input and the autocomplete are different components. `search-bar` and `autocomplete-result-list` respectively.

## [3.96.2] - 2019-12-20
### Changed
- Use installedAppPublic query in BuyButton.

## [3.96.1] - 2019-12-20
### Fixed
- Space between variation name and `:`.

## [3.96.0] - 2019-12-20
### Added
- Use UTM and UTMi params on addToCart mutation.

## [3.95.8] - 2019-12-19
### Fixed
- Handle buy button click while order form is loading by handling it gracefully and not showing the tooltip.

## [3.95.7] - 2019-12-19
### Changed
- Update `react-id-swiper` dependency to 3.3.2, fixes issues in ProductImages.

## [3.95.6] - 2019-12-18
### Fixed
- Problem with ProductImages scroll when selecting other SKUs.

## [3.95.5] - 2019-12-18
### Fixed
- Prevent add to cart while orderForm is loading.

## [3.95.4] - 2019-12-17

## Changed
- Updated documentation: added `blockClass` prop to the Product Price docs and updated the fork disclaimer

## [3.95.3] - 2019-12-16
### Changed
- Render SKUSelector on server.
- Render first product image on server.

## [3.95.2] - 2019-12-16
- Added spec `farbe` for DE

## [3.95.1] - 2019-12-12
### Fixed
-  Problematic issue with the container css handle.

## [3.95.0] - 2019-12-11
### Added
- Support for `icon-search` and `icon-close` blocks to be received by `SearchBar` components.

## [3.94.0] - 2019-12-11
### Changed
- Use `withCssHandles` instead of using styles to generate the CSS handles of the `Container` compenent.

## [3.93.0] - 2019-12-09
### Changed
- Add missing handles to `ProductImages`and use `useCssHandles` hook instead of styles file.

## [3.92.8] - 2019-12-09
### Changed
- Updated documentation for the following `store-components` blocks: Image, Info Card, Buy Button, Logo, Product Brand, Product Image, Product Name, Product Price and Shipping Simulator.

## [3.92.7] - 2019-12-06
### Fixed
- Some tests that were breaking since migration to react-apollo@3.x.

### Changed
- Improved some tests.
- Upgrade TS version.
- Use optional chaining in SKUSelector, code improvements.

## [3.92.6] - 2019-12-06

## [3.92.5] - 2019-12-05
### Added
- Image to SKU selector documentation

## [3.92.4] - 2019-12-05
### Changed
- Documentation format

## [3.92.3] - 2019-12-05

## [3.92.2] - 2019-12-05

## [3.92.1] - 2019-12-03
### Fixed
- Private installedApp query should be client only.

## [3.92.0] - 2019-12-03
### Changed
- `BuyButton` redirects to the appropriate cart depending on the version of `vtex.checkout` installed in the account.

## [3.91.1] - 2019-11-26
### Fixed
- In availability subscribe mutation, send all args as string.

## [3.91.0] - 2019-11-21
### Added
- `displayMode` to `SKUSelector`.

## [3.90.0] - 2019-11-21
### Added
- Prop `placeholder` to `SearchBar`'s schema.

## [3.89.0] - 2019-11-21
### Added
- Prop `title` to `ProductDescription`.

## [3.88.0] - 2019-11-18
### Added
- `thumbnailAspectRatio` and `thumbnailMaxHeight` props on `product-images`.

## [3.87.0] - 2019-11-13
### Added
- `showNavigationArrows` and `showPaginationDots` props on `product-images`.

## [3.86.1] - 2019-11-13
### Fixed
- Bug of selected images of `ProductImages`, now the control of the active class is in the component instead of the `SwiperJS` lib.

## [3.86.0] - 2019-11-13
### Added
- Support to block class.

### Fixed
- Verify that the item has been added to the cart by filtering `skuId` and `seller` in the BuyButton.

## [3.85.0] - 2019-11-12
### Added
- Option to edit `visibleSpecifications` and `hiddenSpecifications` in Site Editor.

## [3.84.2] - 2019-11-12
### Fixed
- `thumbnailImage` prop from `SKUSelector` keeping images that has no labels.

## [3.84.1] - 2019-11-12
### Fixed
- `ProductImages`' thumbs always keep active the first item.

## [3.84.0] - 2019-11-08
### Changed
- Default value of `hiddenImages` from `ProductImages`.
- `SKUSelector` and `ProductImages` now uses `imageLabel` instead of `imageText` to hide or show an image of the SKU.

### Fixed
- `SKUSelector` using objects of product's context that might be undefined.

## [3.83.1] - 2019-11-07
### Changed
- Default aspect ratio of `ProductImages` to `auto`.

## [3.83.0] - 2019-11-07
### Changed
- `ProductImages` uses `img` instead of `canvas`, and removes blurred loader.

## [3.82.2] - 2019-11-07

## [3.82.1] - 2019-11-07
### Fixed
- `BuyButton` crashing if there is no component above it that provide the context of product.

## [3.82.0] - 2019-11-06
### Added
- `initialSelection` and `showVariationsErrorMessage` to `SKUSelector`.
- `showTooltipOnSkuNotSelected` to `BuyButton`.

### Changed
- `BuyButton` now only adds a product to the cart if all variations have one option selected.
- Show an error next to the variation name of the `SKUSelector` if you try to add to the cart before selecting all variations of the product.

## [3.81.1] - 2019-11-06
### Changed
- `collapsable` prop to `collapsible` on `ProductSpecifications`.

## [3.81.0] - 2019-11-06
### Added
- CSS handles to the savings value.

## [3.80.3] - 2019-11-05
### Fixed
- `collapsable` prop not being passed down from the Wrapper to the actual component on `ProductSpecifications`.

## [3.80.2] - 2019-11-01
### Fixed
- Width property being overwritten when using ProductImages in horizontal mode.

## [3.80.1] - 2019-11-01

## [3.80.0] - 2019-10-31
### Added
- New `collapsable` prop to `ProductSpecifications`.

## [3.79.3] - 2019-10-29

## [3.79.2] - 2019-10-29
### Added
- Missing docs of `SKUSelector`.

## [3.79.1] - 2019-10-28
### Fixed
-  `GradientCollapse` not working if its parent doesn't control the `collapse` state.

## [3.79.0] - 2019-10-28
### Added
- `customSearchPageUrl` prop to `SearchBar`.

## [3.78.3] - 2019-10-25
### Fixed
- Case where slides prop would be undefined and cause crash on ProductImages.

## [3.78.2] - 2019-10-25
### Fixed
- Price savings to prevent it from showing `Save 0`.

## [3.78.1] - 2019-10-24
### Fixed
- `GradientCollapse` in safari not giving the full size to it's children.

## [3.78.0] - 2019-10-24
### Fixed
- `SearchBar` making a request in every change of `inputValue`.

## [3.77.0] - 2019-10-23
### Added
- More css handles to the `ProductPrice`

## [3.76.1] - 2019-10-23
### Fixed
- Infinity loop in product page because of calling `onSKUSelected`.

## [3.76.0] - 2019-10-23
### Added
- `collapsed` and `onCollapsedChange` props to `GradientCollapse` in order to be possible control if the component is collapsed or not from outsize of `GradientCollapsed`.
- `shouldCollapseOnTabChange` to `ProductSpecifications`.

### Changed
- Make `GradientCollapse` as a Funcional Component.
- The "See more" button from `GradientCollapse`is now a `button` instead of a `div`.

### Fixed
- `GradientCollapse` not changing the size of the container when children change.

## [3.75.1] - 2019-10-23
### Fixed
- Spanish translations.

## [3.75.0] - 2019-10-23
### Added
- `matchedImagesProps`, `variationsSpacing` and `variationsSpacing` to `SKUSelector`.
- `shouldAddToCart` to `BuyButton`.

### Changed
- Remove images that has the value of prop `hiddenImages` on it's property `imageText` from `ProductImages`.
- Remove or keep only the images that has the value of prop `thumbnailImage` on it's property `imageText` from `SKUSelector`.
- `SKUSelector` will just add spaces between variations instead of adding a spacing at the end of all variations.

### Fixed
- Not calling `onSKUSelected` at second render when `SKUSelector` sets an SKU.

## [3.74.1] - 2019-10-18
### Fixed
- Problem causing the "Compras API" bot to break.

## [3.74.0] - 2019-10-18
### Added
- CSS Handles to some views in `SKUSelector`.
- CSS classes to BuyButton.

## [3.73.1] - 2019-10-18

## [3.73.0] - 2019-10-15
### Added
- New `specificationsTablePropertyHeading`, `specificationsTableSpecificationHeading`, `specificationItemProperty` and `specificationItemSpecifications` CSS handles to `ProductSpecifications`.
- New `resultsItemName`, `searchBarInnerContainer`, `autoCompleteOuterContainer`, `spinnerInnerContainer` and `spinnerContainer` CSS handles to `SearchBar`.
- New `infoCardCallActionText` CSS handle to `InfoCard`.
- New `productBrandLogoWrapper`, `productBrandLogoLink`, `productBrandLogoSpacer` and `productBrandNameSpacer` CSS handles to `ProductBrand`.
- New `productDescriptionTitle` and `productDescriptionText` CSS handles to `ProductDescription`.

### Changed
- Added the new `css-handles` on the following components: Icon & Newsletter

## [3.72.3] - 2019-10-14
### Changed
- In `ProductSpecifications`, use specificationGroups resolver to get translated values.

## [3.72.2] - 2019-10-14
### Fixed
- `ProductImages`: fix thumbnails arrows when orientation is horizontal.

## [3.72.1] - 2019-10-11
### Changed
- Update `react-share`.

## [3.72.0] - 2019-10-10
### Added
- `imageHeight` and `imageWidth` to `SkuSelector`.

## [3.71.3] - 2019-10-03
### Fixed
- `DiscountBadge` would show negative percentages when the actual selling price of a product is higher then it's original one.

## [3.71.2] - 2019-10-03
### Fixed
- dont add input value to options in add to cart, if object is empty.

## [3.71.1] - 2019-09-24
### Changed
- Release with fixed `builder-hub`.

## [3.71.0] - 2019-09-24
### Changed
- Set SKUSelector visibility in product context.

## [3.70.1] - 2019-09-19
### Fixed
- Cleaned up some extraneous dependencies.

### Removed
- Loader type "linear" from product images, falls back into spinner loader.

## [3.70.0] - 2019-09-19
### Added
- `customToastURL` prop to `BuyButton`.

## [3.69.0] - 2019-09-18
### Added
- Send InputValues to GraphQL.

### Changed
- Render logo as `amp-img` if in AMP page.

## [3.68.7] - 2019-09-10
### Changed
- Use autocmplete query from `search-graphql` in `SearchBar`.

## [3.68.6] - 2019-09-05

### Fixed
- Remove percentual width/height from `ContentLoader`

## [3.68.5] - 2019-09-05

## [3.68.4] - 2019-09-03
### Fixed
- Fixes regarding videos, fix ProductImages handling youtube videos.
- Fix possible deadlock on ProductImages.

## [3.68.3] - 2019-09-03
### Fixed
- Fix DiscountBadge z-index.

## [3.68.2] - 2019-08-30

## [3.68.1] - 2019-08-30
### Fixed
- Default parameter when `usePWA()` is undefined.

## [3.68.0] - 2019-08-29
### Added
- Show install prompt when clicking `buyButton`.

## [3.67.3] - 2019-08-29
### Fixed
- `SearchBar`: Issue where clicking on the search term would not work properly when `attemptPageTypeSearch` is enabled.

## [3.67.2] - 2019-08-29
### Fixed
- Issue where buy button would throw an error when getting "loading of undefined".

## [3.67.1] - 2019-08-29

## [3.67.0] - 2019-08-28
### Added
- Notification bar content schema for i18n support

## [3.66.4] - 2019-08-28
### Fixed
- `Image`: properly use CMS translatable props with formatIOMessage.

### Changed

- `ProductPrice`: show list price even if selling price is a range and list price is not.

## [3.66.2] - 2019-08-27
### Fixed
- Fixes IE11 Swiper issue, by importing a forked version.

## [3.66.1] - 2019-08-23

### Fixed

- Prevent addToCart while orderForm is loading.

## [3.66.0] - 2019-08-21

### Added

- Add new message to be shown in the Toast when the user tries to add an item to the minicart that is already there.

## [3.65.1] - 2019-08-21

### Added

- Added spec `colour` for UK

## [3.65.0] - 2019-08-21

### Added

- Add CSS Handle to target the search bar icon (`searchBarIcon`).

## [3.64.0] - 2019-08-21

### Added

- Query params `_q` and `_c` so it's possible to Google Analytics to track the searched terms and category

## [3.63.1] - 2019-08-21

### Fixed

- Search Bar height CSS.

## [3.63.0] - 2019-08-20

### Changed

- How `ProductBrand` can get the brand information. It is now possible to get this data through props, but if the props are `undefined` the value will still be obtained through the product context

## [3.62.2] - 2019-08-15

### Fixed

- `SearchBar`: the `placeholder` property was not working

## [3.62.1] - 2019-08-13

### Changed

- `BuyButton`: if isOneClickBuy, call graphql directly, skip optimistic add.

## [3.62.0] - 2019-08-12

### Added

- Support to videos (YouTube and Vimeo) in `ProductImages` carousel

## [3.61.0] - 2019-08-12

## [3.60.1] - 2019-08-08

### Changed

- `addToAvailabilitySubscriberMutation`'s mutation to `createDocument`

## [3.60.0] - 2019-08-06

### Added

- `discountInsideContainer` class to DiscountBadge.

## [3.59.1] - 2019-08-05

### Fixed

- The `ResultList` now have the correct size when the `SearchBar` is bigger than 320px

## [3.59.0] - 2019-08-05

### Added

- New prop `showValueNameForImageVariation` to `sku-selector`.
- New CSS handle `skuSelectorNameSeparator`.
- New CSS handle `skuSelectorSelectorImageValue`.
- New CSS handle `skuSelectorTextContainer`.

### Changed

- Migrate SKUSelector to Typescript.

## [3.58.1] - 2019-08-02

### Fixed

- Product Price classes in sellingPrice. Added `sellingPriceValue` and `sellingPriceValue--range` to value element. Also added `sellingPriceContainer` as a replacement to the `sellingPrice` in the parent element.

## [3.58.0] - 2019-08-01

### Added

- Toast message in `BuyButton` when an item is added offline to minicart.

## [3.57.3] - 2019-07-30

### Fixed

- Remove unnecessary autcomplete query when input value is empty.

## [3.57.2] - 2019-07-26

### Fixed

- Postal code validation in ShippingSimulator.

## [3.57.1] - 2019-07-26

### Fixed

- Correctly add logic to parse assembly options state from productContext in BuyButton.

## [3.57.0] - 2019-07-25

### Added

- Added the `logoWithLink` prop to the `ProductBrand`

## [3.56.1] - 2019-07-24

### Added

- Added link prop to image component

## [3.56.0] - 2019-07-23

### Added

- **ProductImages:** Prop `displayThumbnailsArrows`.

## [3.55.0] - 2019-07-23

### Added

- Pass more data down to Minicart addToCart to fulfill analytics data.

## [3.54.2] - 2019-07-19

### Fixed

- InfoCard missing to use formatIOMessage in a localized url.

## [3.54.1] - 2019-07-19

### Fixed

- Issue where going back to a product with variations would render empty variations.

## [3.54.0] - 2019-07-17

### Added

- Format currency based on sales channel configuration.

## [3.53.1] - 2019-07-11

### Fixed

- Protect against undefined assemblyOptions in state.

## [3.53.0] - 2019-07-11

### Added

- Add support for adding to cart Assembly Options in buy button.
- Add prop to show total price on buy button.

## [3.52.3] - 2019-07-11

### Fixed

- Fix UserAddress Proptype.

## [3.52.2] - 2019-07-11

### Fixed

- Make addressQuery query have ssr: false, because it has scope private.

## [3.52.1] - 2019-07-11

### Changed

- Use new address query on `UserAddress`.

## [3.52.0] - 2019-07-08

### Changed

- Uses product id as internal url

### Added

- Types of props on Availability Subscriber documentation.

## [3.51.3] - 2019-07-05

### Added

- Documentation on Product Brand props.
- Product Brand and Product Image on the list of components of the main Read Me.

## [3.51.2] - 2019-07-04

### Fixed

- Show SKUSelector even when SKU items is one.

## [3.51.1] - 2019-07-04

### Fixed

- Read me of Availability subscriber. Explain that it doesn't warn users.
- Default text of component to make it less misleading.

## [3.51.0] - 2019-07-04

### Added

- `htmlId` prop on InfoCard

## [3.50.1] - 2019-07-03

### Removed

- Deprecated the usage of `productId` to navigate to product urls

## [3.50.0] - 2019-07-02

### Changed

- Uses `productId` to navigate to product urls

## [3.49.1] - 2019-07-02

### Fixed

- Issue with updating state of SKUSelector on ProductContext.

## [3.49.0] - 2019-07-01

### Added

- `ProductDescription` - Add `collapseContent` prop.

## [3.48.0] - 2019-06-27

### Added

- Prop `attemptPageTypeSearch` on `search-bar`; if `true`, uses the term the user has inputted to try to navigate to the proper page type (e.g. a department, a brand, a category)

## [3.47.5] - 2019-06-27

### Fixed

- Build assets with new builder hub.

## [3.47.4] - 2019-06-26

### Fixed

- Fixes NaN being sent to search result width.

## [3.47.3] - 2019-06-26

### Changed

- Slugify variation option name added to the variation item.

## [3.47.2] - 2019-06-25

### Fixed

- Sets min width to search results box.

## [3.47.1] - 2019-06-24

### Changed

- Show option to search for term instead of showing "no matches" in search autocomplete.

### Fixed

- Fix spaces in search autocomplete list.

## [3.47.0] - 2019-06-24

### Added

- **ProductBrand** component, along with **product-brand** block.

## [3.46.2] - 2019-06-24

### Fixed

- **NotificationBar** is now editable via Storefront.

## [3.46.1] - 2019-06-21

## [3.46.0] - 2019-06-21

### Added

- Added support for rootPath in one click buy mode.

## [3.45.3] - 2019-06-19

### Fixed

- Hardcoded "BRL" currency on Shipping Simulator component.

## [3.45.2] - 2019-06-19

### Fixed

- Bug with vanishing `-` sign on DiscountLabel when it had empty labels.

## [3.45.1] - 2019-06-18

### Changed

- Wording on "added to cart" toast.

## [3.45.0] - 2019-06-18

### Added

- "View cart" button on "Added to cart" toast.

## [3.44.0] - 2019-06-17

### Changed

- `SKUSelector` now supports many variations for skus, not only 2.
- Add layout prop `hideImpossibleCombinations` for `SKUSelector`, with docs.

## [3.43.7] - 2019-06-12

### Fixed

- Use require to conditionally import Swiper in `ProductImages` to not break SSR.

## [3.43.6] - 2019-06-11

### Added

- See more button for SKUSelector with a lot of items in a variation.
- Schema for `SKUSelector` wtih `seeMoreLabel, maxItems` prop.

## [3.43.5] - 2019-06-10

### Fixed

- Issue on the SearchBar suggestions where the user couldn't select items, on mobile devices.

## [3.43.4] - 2019-06-10

### Fixed

- `InfoCard`: Make `imageUrl` and `mobileImageUrl` have image-uploader ui widget on storefront.

## [3.43.3] - 2019-06-10

### Fixed

- `InfoCard`: change null default values to empty strings.

## [3.43.2] - 2019-06-07

### Fixed

- Fixed issue that causes syntax error on IE11, due to the use of ES6 features.

## [3.43.1] - 2019-06-07

### Fixed

- Fix bad release of 3.43.0 (no real change in code).

## [3.43.0] - 2019-06-06

### Added

- i18n using `vtex.native-types` to allow `NewsLetter` to respond properly to content i18n.

## [3.42.8] - 2019-06-06

## [3.42.7] - 2019-06-06

### Fixed

- Compatibility with custom non-flexible product-pages in all components used in ProductDetails.

## [3.42.6] - 2019-06-05

### Fixed

- Bug where the product images thumbnail gallery would scroll infinitely.

## [3.42.5] - 2019-06-05

### Fixed

- Hides SKU selector when there are no variations to be selected.
- `BuyButton`: use given props over context, if set.

## [3.42.4] - 2019-06-05

### Fixed

- Use props as default value instead of context.

## [3.42.3] - 2019-06-05

### Fixed

- Remove `showProductPrice` rule from `ProductPrice` wrapper.

## [3.42.2] - 2019-06-05

### Fixed

- HOTFIX: Rollback SKUSelector and ProductImage do version without Wrapper.

## [3.42.1] - 2019-06-04

### Fixed

- Get image of smaller size for `SKUSelector` and `ProductImages` images.

## [3.42.0] - 2019-06-04

### Added

- Wrapper to components to consume product context.

## [3.41.2] - 2019-05-28

### Added

- Content schema to `ProductPrice`.

## [3.41.1] - 2019-05-28

### Fixed

- Remove `showInstallPrompt` unused feature.

## [3.41.0] - 2019-05-27

### Added

- Added props `sellingPriceRange, showListPriceRange` and `showSellingPriceRange, showListPriceRange` to `productPrice` component.

## [3.40.0] - 2019-05-27

### Added

- Content schema to `InfoCard`.

## [3.39.0] - 2019-05-27

### Added

- i18n using `vtex.native-types` to allow `DiscountBadge` to respond properly to content i18n.

## [3.38.1] - 2019-05-26

### Fixed

- Fix warnings on the components `Image`, `BuyButton`, and `Logo`.

## [3.38.0] - 2019-05-25

### Added

- Added some CSS overrides classes to infocard and logo.

## [3.37.2] - 2019-05-21

### Fixed

- Removed `w-100` from `DiscountBadge` to avoid it to pass the image width.

## [3.37.1] - 2019-05-20

### Fixed

- Enable `ShippingSimulator` to accept any postal code format and validate using the country rules.

## [3.37.0] - 2019-05-17

### Added

- 'Open Minicart' feature after click on `BuyButton`.

## [3.36.1] - 2019-05-13

### Fixed

- Fixed bug where clicking on search result items would just close the search results list.

## [3.36.0] - 2019-05-10

### Added

- Send to the service worker a 'installPrompt' event when clicking the `BuyButton`.

## [3.35.0] - 2019-05-09

### Added

- Schema to `Logo` component.

## [3.34.0] - 2019-05-09

### Added

- `labelListPrice` prop in `ProductPrice`.

## [3.33.1] - 2019-05-09

### Fixed

- Fix z-index issue on the search ResultList component.

## [3.33.0] - 2019-05-08

### Added

- Add the `carouselImagePlaceholder` CSS handler to allow custom image placeholders.

## [3.32.2] - 2019-05-03

### Fixed

- Enable zoom with one click instead of two in `ProductImages`.

## [3.32.1] - 2019-05-03

### Fixed

- Instead of rendering a content loader when there is no image to be rendered in `Carousel`, it now renders a placeholder.

## [3.32.0] - 2019-05-02

### Changed

- Hide `InstallmentsPrice` when there's only _1x_ options.

## [3.31.0] - 2019-04-30

### Added

- Add zoom types and implement zoom `ìn-gallery` in `ProductImages` component.

## [3.30.2] - 2019-04-30

### Fixed

- Add `brand` props to send to minicart on `BuyButton`.

## [3.30.1] - 2019-04-29

### Added

- Allow case insensitive product specifications filter.

## [3.30.0] - 2019-04-26

### Added

- Added props `hiddenSpecifications` and `visibleSpecifications` to `productSpecifications` component.

## [3.29.2] - 2019-04-25

### Fixed

- Availability of a specific variation is based on all SKU's now.

## [3.29.1] - 2019-04-25

### Changed

- Add isLayout to `InfoCard` props.

## [3.29.0] - 2019-04-25

### Added

- CSS classes for reaching a sku variation name and value.

## [3.28.1] - 2019-04-25

### Fixed

- Fix propType `ShippingSimulator` error, removed warning from console.

## [3.28.0] - 2019-04-24

### Changed

- Scopes messages by domain (`admin/` and `store/`)

## [3.27.0] - 2019-04-24

### Fixed

- Notification bar width is now 100%.

## [3.26.0] - 2019-04-24

### Changed

- Make `UserAddress` use modal block.

## [3.25.10] - 2019-04-22

### Added

- CSS class to `InfoCard` image.

### Changed

- Make `InfoCard` headline and subline now support HTML and are sanitized before being displayed.

## [3.25.9] - 2019-04-18

## [3.25.8] - 2019-04-18

### Fixed

- Variations not being grouped.

## [3.25.7] - 2019-04-18

### Fixed

- Blurred Loader image blinking.

## [3.25.6] - 2019-04-15

### Changed

- Remove sort of sku item variations.

## [3.25.5] - 2019-04-12

### Added

- Added `container` CSS handle to Container.

### Changed

- Reduced horizontal padding for Container on wide screen sizes.

## [3.25.4] - 2019-04-12

### Fixed

- Ensure mutation to require acronym as String

## [3.25.3] - 2019-04-11

### Changed

- Use `insane` lib to sanitize HTML on `NotificationBar`.

## [3.25.2] - 2019-04-11

### Added

- Add `imageActionUrl` prop to `InfoCard`.

## [3.25.1] - 2019-04-10

### Changed

- Limit width of Container

## [3.25.0] - 2019-04-10

### Added

- New block `image`.

## [3.24.3] - 2019-04-10

## [3.24.2] - 2019-04-09

## [3.24.1] - 2019-04-09

### Fixed

- Add safeguard to InfoCard `blockClass` prop

## [3.24.0] - 2019-04-09

### Fixed

- Fix propType name for `showCategoriesHighlighted` in `CategoriesHighlights`.
- Fix SKUSelector displaying the wrong selected item.

### Added

- InfoCard new property `blockClass`.

### Fixed

- InfoCard schema.
- InfoCard CMS labels.

## [3.23.0] - 2019-04-09

### Added

- Pinterest share option on `Share`.

## [3.22.2] - 2019-04-05

### Fixed

- SKU Selector not changing selected item.

## [3.22.1] - 2019-04-05

### Fixed

- Remove margin when there is no thumbnails on `ProductImages`.

## [3.22.0] - 2019-04-04

### Added

- Place thumbs according to position on `ProductImages`.

### Fixed

- Misplaced `Logo` position on mobile.

### Changed

- Changed `Logo` to be a functional component instead of a class.
- Remove unused `VtexLogo` along with the props `color` and `showLabel` in `Logo`.
- Replaced `withRuntime` HOC by `useRuntime` hook in `Logo`.

## [3.21.8] - 2019-04-03

### Fixed

- Refactoring `Greeting`.

## [3.21.7] - 2019-04-01

### Changed

- Use location-marker from `store-icons` on `UserAddress`.

## [3.21.6] - 2019-04-01

### Added

- New blocks `notification.bar` and `notification.inline`.

## [3.21.5] - 2019-04-01

### Fixed

- Parse local state order form.

## [3.21.4] - 2019-03-29

### Added

- Implement query to get pickup point checkedIn name on `UserAddress`.

## [3.21.1] - 2019-03-28

### Fixed

- Fix labels to selling price and list price.

## [3.21.0] - 2019-03-27

### Added

- Add `ProductHighlights` component.
- Add `Newsletter` component.

## [3.20.4] - 2019-03-26

### Fixed

- Use title in svg Logo.

## [3.20.3] - 2019-03-25

### Added

- Allow adding link to logo.

### Changed

- Set w-100 to search bar and add padding.
- Adjust default logo size and add padding.

## [3.20.2] - 2019-03-22

### Fixed

- Fix local query on `UserAddress`.

## [3.20.1] - 2019-03-21

### Fixed

- Add fallback to store-graphql add item on `BuyButton`.

## [3.20.0] - 2019-03-21

### Changed

- Use the new Apollo Local State management API to handle the orderForm operations.

## [3.19.10] - 2019-03-15

### Fixed

- Fix zoom and slide change on `Carousel` of `ProductImages`.

## [3.19.9] - 2019-03-14

### Fixed

- Clicking the `BuyButton` will no more redirect if there is an `anchor` tag ancestor.

## [3.19.8] - 2019-03-14

### Changed

- Change messages basic languages files.

## [3.19.7] - 2019-03-14

### Added

- Add behavior test to SKUSelector.
- Behavior tests for BuyButton.

### Fixed

- Set `SearchBar` input focus when user click search icon.

## [3.19.6] - 2019-03-11

### Fixed

- Change current product image when pressing on a thumbnail.

### Added

- `ProductImages` snapshot tests.

## [3.19.5] - 2019-03-07

### Added

- logoUrl now support `{{account}}` in the string url.
  eg. store with account name gc-xoi8837:
  https://static.gocommerce.com/{{account}}/assets/logo.png
  it will render https://static.gocommerce.com/gc-xoi8837/assets/logo.png

### Changed

- Using `react-testing-library` instead `enzyme`.

## [3.19.4] - 2019-03-01

### Changed

- Make `SKUSelector` more generic, add "step-by-step" mode, save state

## [3.19.3] - 2019-03-01

### Changed

- Using `store-icons` instead of `dreamstore-icons`.

## [3.19.2] - 2019-02-27

### Changed

- Change overall look of `SearchBar` on mobile and desktop in order to match the design.

### Fixed

- Make the clear button on `SearchBar` work as expected.

## [3.19.1] - 2019-02-26

### Added

- `min-width` for Logo

## [3.19.0] - 2019-02-25

### Added

- `UserAddress` component.
- Added `ProductImages` docs.

## [3.18.2] - 2019-02-25

### Fixed

- Improve CSS handles in `ProductImages` component.

### Added

- Snapshot tests for `Share`.

## [3.18.1] - 2019-02-21

### Added

- Add `info-card` to `interfaces.json`

## [3.18.0] - 2019-02-21

### Added

- Snapshot tests for `ProductPrice`.
- Snapshot tests for `BuyButton`.
- Snapshot tests for `AvailabilitySubscriber`.
- Snapshot tests for `Animation`.
- Snapshot tests for `CollectionBadges`.
- Snapshot tests for `Container`.
- Snapshot tests for `DiscountBadge`.
- Snapshot tests for `CategoriesHighlights`.
- Snapshot tests for `GradientCollapse`.
- Snapshot tests for `Greeting`.
- Snapshot tests for `ProductNames`.
- Better use of helpers in tests.
- Snapshot tests for `ProductDescription`.
- Snapshot tests for `Logo`.
- Snapshot tests for `ProductSpecifications`.
- Snapshot tests for `SKUSelector`.
- Snapshot tests for `ShippingSimulator`.
- Snapshot tests for `SearchBar`.
- Create `InfoCard` component.

## [3.17.2] - 2019-02-18

### Fixed

- Fix product images carousel refresh bug.

## [3.17.1] - 2019-02-18

### Fixed

- Quick fix on `AutocompleteInput` to remove warnings.

### Added

- Base settings for tests.

## [3.17.0] - 2019-02-15

### Added

- Support to CSS Modules in `Share`.

## [3.16.4] - 2019-02-15

### Fixed

- Undo the link-state changes.

## [3.16.3] - 2019-02-14

## [3.16.2] - 2019-02-14

## [3.16.1] - 2019-02-13

### Fixed

- Wrong rebase.

## [3.16.0] - 2019-02-13

### Added

- Use the new minicart's optimistic strategy on `BuyButton`.

## [3.15.1] - 2019-02-13

### Fixed

- Fix `Logo` to only use maxWidth and maxHeight to define it's size.

### Added

- Add an API Docs to `ProductDescription`.

## [3.15.0] - 2019-02-12

### Added

- Create an API Docs.
- Add an API Docs to `ProductName`.
- Refactor `Product Description` component into two new components.
- Create `ProductSpecifications` component allowing two visualizations modes.
- Create `GradientCollapse` component.

## [3.14.3] - 2019-02-08

### Fixed

- Improve `BuyButton` `README.md`

## [3.14.2] - 2019-02-08

### Added

- Add callbacks to click event on `BuyButton`

## [3.14.1] - 2019-02-06

## [3.14.0] - 2019-02-06

### Added

- After switching secondary variations on a product, those changes won't be kept on `history`.

### Fixed

- Remove scrolling to top after changing SKU in `SKUSelector`.

## [3.13.1] - 2019-02-05

### Added

- Make it possible to be able to add items with assembly options on `BuyButton`

## [3.13.0] - 2019-02-05

### Added

- Declare interfaces for components used in `ProductDetail`.

## [3.12.4] - 2019-02-04

### Fixed

- Error of not defined variable in the `Carousel` component.

## [3.12.3] - 2019-02-04

### Fixed

- Fix `ProductName` container css class not being used.

## [3.12.2] - 2019-02-01

## [3.12.1] - 2019-01-31

### Changed

- Move slides property to getter on `ProductImages` component.

### Fixed

- Fix `forceUpdate` being called on instantiation of the `ProductImage` component.

## [3.12.0] - 2019-01-30

### Changed

- Use icons from `vtex.dreamstore-icons`.

## [3.11.2] - 2019-01-29

### Fixed

- Remove `inheritComponent` from blocks.

## [3.11.1] - 2019-01-29

### Fixed

- Show installments with fee when the biggest with free is 1.

## [3.11.0] - 2019-01-28

### Changed

- Bump messages builder to `1.x`.

### Fixed

- Fix typo on added to cart message in english

## [3.10.3] - 2019-01-28

### Changed

- Support to CSS Modules in `ProductPrice`.

## [3.10.2] - 2019-01-28

### Changed

- Support to CSS modules in `CategoriesHighlights`.

## [3.10.1] - 2019-01-28

### Added

- Props on `Slider` for custom classes.

## [3.10.0] - 2019-01-25

### Changed

- Emit `addToCart` event from `BuyButton`.

## [3.9.2] - 2019-01-25

### Fixed

- Incorrect click area on product summary.

## [3.9.0] - 2019-01-25

### Changed

- Support to CSS modules in `ProductImages`.
- Support to CSS modules in `SKUSelector`.

## [3.8.5] - 2019-01-25

## [3.8.4] - 2019-01-25

### Added

- Added props that allow search icon to be on left or right in `SearchBar`.

## [3.8.3] - 2019-01-25

### Fixed

- Labels not pointing to input on `ShippingSimulator`.

## [3.8.2] - 2019-01-18

## [3.8.1] - 2019-01-18

### Changed

- Bump dependencies majors.

## [3.8.0] - 2019-01-18

### Changed

- Bump vtex.styleguide to 9.x.

## [3.7.0] - 2019-01-18

### Changed

- Update React builder to `3.x`.

## [3.6.3] - 2019-01-17

### Fixed

- Fixes warning of `propTypes` being passed to `React.forwardRef`.

## [3.6.2] - 2019-01-17

### Fixed

- Use header elements in `ProductName` through tag prop.

## [3.6.1] - 2019-01-17

### Fixed

- Use header elements in `ProductDetails` instead of span tags.

## [3.6.0] - 2019-01-17

### Changed

- Support to CSS modules in `SearchBar`.
- Support to CSS modules in `ProductDescription`.
- Support to CSS modules in `Greeting`.
- Support to CSS modules in `CollectionBadges`.
- Support to CSS modules in `DiscountBadge`.
- Support to CSS modules in `AvailabilitySubscriber`.
- Support to CSS modules in `Logo`.
- Support to CSS modules in `ShippingSimulator`.

## [3.5.8] - 2019-01-15

### Fixed

- Remove logo inline style css.

## [3.5.7] - 2019-01-14

### Changed

- Change default logo to Dreamstore logo.

## [3.5.6] - 2019-01-14

### Fixed

- Add `SearchBar` padding in mobile view.

## [3.5.5] - 2019-01-14

### Changed

- Add CSS modules on `Slider` component.

## [3.5.4] - 2019-01-14

### Fixed

- Remove undefined css classes of `ProductName` component.

## [3.5.3] - 2019-01-10

### Changed

- Change the syntax of routes `/` to `.`.

## [3.5.2] - 2019-01-09

### Changed

- Proxy unused props of the `Container` component to the root element.

## [3.5.1] - 2019-01-09

### Added

- `vtex.shipping-estimate-translator` app to translate and place the correct delivery time on `ShippingSimulator`

## [3.5.0] - 2019-01-09

### Changed

- Bye `pages.json`! Welcome `store-builder`.

## [3.4.0] - 2019-01-09

### Added

- `Container` component.

## [3.3.1] - 2018-12-27

### Fixed

- Fix typing problem and crash on `BuyButton`

## [3.3.0] - 2018-12-20

### Added

- Support to messages builder.

## [3.2.2] - 2018-12-18

### Changed

- Converts `ShippingTableRow` `price` prop value to decimal based number.

## [3.2.1] - 2018-12-18

### Changed

- Support to CSS modules in `ProductName`.

## [3.2.0] - 2018-12-13

### Changed

- BuyButton using `styleguide` `Toast`.

## [3.1.9] - 2018-12-06

### Fixed

- The root div of `DiscountBadge` is now always rendered.

## [3.1.8] - 2018-12-05

### Fixed

- Fix how icons were displayed in `SearchBar`

## [3.1.7] - 2018-12-05

### Fixed

- Make `Logo` properly receive maxWidth and maxHeight properties.

## [3.1.6] - 2018-12-04

- Add typography token to badge
- Add emphasis color to badge instead of red

## [3.1.5] - 2018-12-04

### Changed

- Left margin of the specifications at the ProductDetails component
- Share.label id to store-components.share.label

## [3.1.4] - 2018-12-04

### Fixed

- Negative padding on `Slider` arrows.

## [3.1.3] - 2018-12-04

### Changed

- ShippingSimulator style

## [3.1.2] - 2018-12-03

### Changed

- ProductImages cursor style

## [3.1.1] - 2018-12-03

### Changed

- SKUSelector style

## [3.1.0] - 2018-12-03

### Changed

- Major refactor of ProductImage component
- ProductImage Zoom with two clicks or gesture
- ProductDescription design
- ProductDescription table

### Added

- Frontend Vimeo video support at ProductImage
- Blurred loader to ProductImages
- Collapse to ProductDescription
- Large prop to BuyButton

## [3.0.0] - 2018-11-29

### Added

- Design tokens in `ShippingSimulator`.

### Changed

- Add several props to style the `ProductPrice` component.
- Add several props to style `ProductName` and remove `large` prop from it.
- Add several props to style `Share` component.
- Make `ProductDescription` use design tokens.
- Make `AvailabilitySubscriber` use design tokens.
- Make `SKUSelector` use design tokens.
- Use style guide table in `ProductDescription` component.

### Fixed

- Fix design problems of `ShippingSimulator`.
- Add `classes` and `installmentsClasses` to ProductPrice component to style the component.
- Use style guide table in `ProductDescription` component.
- Make `Slider` receive custom classes.
- Fix negative padding on arrows.

### Removed

- Remove `Header` component.
- Remove `Footer` component.

### Added

- Share label to `Share` component.

## [2.6.10] - 2018-11-28

### Fixed

- `SelectedImage` not fitting properly its container.

## [2.6.9] - 2018-11-26

### Fixed

- Fix svg warnings of `ProductName` and `ProductPrice`.

## [2.6.8] - 2018-11-26

### Added

- Add onSKUSelected to SKUSelector props and call it when its defined.

## [2.6.7] - 2018-11-26

### Fixed

- Slider crashing in store-componentes master

## [2.6.6] - 2018-11-26

### Fixed

- Fix the number of items shown in slider.

## [2.6.5] - 2018-11-26

### Fixed

- Image Zoom in product details was not working properly

## [2.6.4] - 2018-11-20

### Fixed

- Assign correct size to arrow element.

## [2.6.3] - 2018-11-20

### Fixed

- Add `vtex-page-padding` class to Greeting.

## [2.6.2] - 2018-11-13

### Removed

- `Account` component bundle.
- `@vtex/styleguide` dependency.

## [2.6.1] - 2018-11-11

## [2.6.0] - 2018-11-09

### Added

- `Account` shared components.

## [2.5.6] - 2018-11-08

### Fixed

- Removed call to `Array.from` breaking the `Shelf` on Internet Explorer.

## [2.5.5] - 2018-11-07

### Added

- Make the Product Price's label editable through Storefront.

## [2.5.4] - 2018-11-07

## [2.5.3] - 2018-11-07

### Added

- Add `compactMode` props that change the design of `SearchBar` component to a compact layout.

## [2.5.2] - 2018-11-07

### Changed

- Remove `ContentLoader` of `ProductDescription`.

## [2.5.1] - 2018-11-06

### Fixed

- Remove CSS from ProductName and ProductPrice.

## [2.5.0] - 2018-11-06

### Added

- `Greeting` component that renders a welcome message with the user first name

## [2.4.3] - 2018-10-31

### Fixed

- Replace spinner by content loader in BuyButton.

## [2.4.2] - 2018-10-18

### Changed

- `Animation` component to use only CSS instead of `Transition` from the `spring` module.

## [2.4.1] - 2018-10-02

### Changed

- Updated the product price and name colors.

### Fixed

- Discount badge positioning.

## [2.4.0] - 2018-09-28

### Added

- Hability to handle more than one variation on the same sku in the `SKUSelector`

## [2.3.2] - 2018-09-28

### Added

- Availability prop to `BuyButton` component.

## [2.3.1] - 2018-09-20

### Changed

- Update `ProductDescription` css and move to tachyons classes.

## [2.3.0] - 2018-09-17

### Added

- `Header` default padding to match the page's padding.

## [2.2.2] - 2018-09-17

### Fixed

- Update header padding to match the whole store.

## [2.2.1] - 2018-09-14

### Fixed

- propTypes console errors.

## [2.2.0] - 2018-09-14

## [2.1.1] - 2018-09-13

## [2.1.0] - 2018-09-13

### Added

- `Animation` component.

### Changed

- Update `Price` props documentation.
- `Header` to import the `Logo` and `Header` as extension points.

## [2.0.6] - 2018-09-06

### Changed

- Update css to use tachyons classes

## [2.0.5] - 2018-09-05

### Fixed

- `Footer` component top margin, in order to not collapse with `Login`

## [2.0.4] - 2018-09-05

### Changed

- `TopMenu` to pass classnames to change the icon and label of the `MiniCart` and `Login` instead of pass the hexadecimal color.

## [2.0.3] - 2018-09-05

### Fixed

- `Footer` propTypes error.

## [2.0.2] - 2018-08-31

### Fixed

- Fix design issues.

## [2.0.1] - 2018-08-30

### Changed

- Refact the `ProductPrice` component.

### Fixed

- Update the propTypes of the components: `BuyButton`, `ProductPrice`, `ProductName`.

## [2.0.0] - 2018-08-30

### Removed

- `QuantitySelector` that should not exist because the styleguide has a component with the same purpose, the `NumericStepper`.

## [1.16.3] - 2018-08-29

### Changed

- Refact `SearchBar` component.

## [1.16.2] - 2018-08-27

### Fixed

- `SearchBar` proptype error on SSR
- `Footer` proptype error

## [1.16.1] - 2018-08-24

### Changed

- `SearchBar` debouncing and search only inputs with a minimum of 2 characters

## [1.16.0] - 2018-08-24

### Changed

- `SearchBar` design.
- Update `Header` design to a white style.

### Fix

- Component name into the documentation of `CategoryHighlights`.

## [1.15.0] - 2018-08-23

### Changed

- Footer redesigned.

## [1.14.2] - 2018-08-22

### Added

- `schema` to the `ProductName` component .

## [1.14.1] - 2018-08-21

### Added

- prop `showSku` to the `ProductName` component.

## [1.14.0] - 2018-08-17

### Added

- props `color`, `width`, `height` e `showLabel` to `Logo` component.
- `MobileSearch` component to `SearchBar`.

### Changed

- `Header` design.

## [1.13.2] - 2018-08-16

### Fixed

- Breaking change rename of `CategoriesHighlights`.

## [1.13.1] - 2018-08-16

### Changed

- Undeprecate v1.13.0 version.

## [1.13.0] - 2018-08-15

### Added

- `CategoryCard` shapes.

## [1.12.7] - 2018-08-15

### Fixed

- All content loaders to work on Firefox.

## [1.12.6] - 2018-08-14

### Fixed

- Undefined behavior of the `CategoriesHightlights` schema.

## [1.12.5] - 2018-08-13

### Added

- `ImpersonateCustomer` component to `Header`.

## [1.12.4] - 2018-08-10

### Added

- Link redirect to handleClick of `SKUSelector`.

## [1.12.3] - 2018-08-09

### Fixed

- Correct function from `orderFormContext` to add a new item to the orderForm.
- `ProductPrice` condition now uses `isNil` function from `ramda`.

## [1.12.2] - 2018-08-08

### Added

- `ProductDescription` content loader.
- `ProductName` and `ProductPrice` content loaders default style.

## [1.12.1] - 2018-08-08

### Added

- `MainCategories` component.
- `ProductDescription` content loader.

## [1.12.0] - 2018-08-02

### Added

- `ProductName`, `ProductPrice` and `ProductImages` content loaders.
- `Share` and `ShippingSimulator` content loaders.
- More `BuyButton` loading logic.

## [1.11.0] - 2018-08-02

### Changed

- Removed graphql queries from `BuyButton`
- Added `OrderFormContext` to update the minicart on `BuyButton`

## [1.10.0] - 2018-08-02

### Fixed

- Top menu not being rendered as an overlay on scroll down.

### Changed

- Use tachyons classes in `AvailabilitySubscriber`.

### Added

- Added mutation in `AvailabilitySubscriber` to send the data for Master Data on the entity `AS`.

## [1.9.0] - 2018-07-26

### Added

- SSR to Slider component.

## [1.8.3] - 2018-07-25

### Fixed

- `ProductPrice` propTypes, removed warning from console.
- `Footer` positioned always at the bottom of the page.
- ImageUrl warning in `SKUSelector` and `ProductImages`.

## [1.8.2] - 2018-07-18

### Changed

- Component loader on `ProductImages`

## [1.8.1] - 2018-07-13

### Fixed

- `Slider` adaptToScreen function.
- Documentation of `BuyButton`.

### Changed

- Migrate the `Footer` schema to use the `type: "array"`.
- `MiniCart` position into the `Header`.

## [1.8.0] - 2018-07-10

### Added

- Buy button support to add multiple sku items to the cart at the same time of `BuyButton`.

## [1.7.3] - 2018-07-10

### Changed

- Define `Footer` schema props that are layout type.

### Fixed

- `TopMenu` display on mobile screen.

## [1.7.2] - 2018-7-9

### Changed

- Hide fixed header while in edit mode.

## [1.7.1] - 2018-7-6

### Changed

- Unescape HTML in the product description.
- Logo link to be a `Link` component from `render`.

### Fixed

- Vertical display of `ProductImage`.
- Thumbnail image selection in `ProductImage`.

## [1.7.0] - 2018-7-4

### Added

- Component `Header`.

## [1.6.1] - 2018-6-27

### Changed

- _BuyButton_ don't wait add to cart to proceed to checkout page.
- _BuyButton_ Component added isOneClickBuy attribute.

### Fixed

- _BuyButton_ default props as static attribute.
- _SKU Selector_ item with false value as class name.

## [1.6.0] - 2018-6-20

### Added

- Debounce function to handle the increase and decrease events in the `QuantitySelector`.

### Changed

- Make `onMaxReached` function not required in `QuantitySelector`.
- Use children prop in `ProductImage` to customize selected image render.
- Update design of `CollectionBadges`.

## [1.5.1] - 2018-6-18

### Added

- Internationalization to `SearchBar`.
- Spinner to `SearchBar`.
- `isLayout` to `ProductPrice`'s schema properties.

### Fixed

- `QuantitySelector` input style for do not impact the others inputs.
- `SearchBar` options link.

### Changed

- `QuantitySelector` style
- `QuantitySelector` plus icon to use the StyleGuide one.

## [1.5.0] - 2018-6-11

### Added

- Max height of the logo image.
- Added a title to the _Share_ Component share url.
- Internationalization of the `Footer` schema.
- Internationalization of the `Share` schema.
- README documentation of Logo Component.

### Fixed

- _SKU Selector_ with a different item selected on entering the product page.
- _SKU Selector_ item's discount badge position.
- Put the _ProductPrice_ schema inside it's Component.
- README typos.

## [1.4.0] - 2018-6-6

### Added

- Inner zoom image to the product image.
- Discount badge to sku item.

### Changed

- Slightly changed the layout of `ProductName` and `SkuSelector` to accomplish proposed design.
- Style of the unavailable sku to be different from the others.
- Change _ProductName_, added: showBrandName, showProductReference, productReference attributes.
- Customize Footer uiSchema.

### Fixed

- Vertical centralization of SKU Selector Items.

## [1.3.2] - 2018-5-31

### Changed

- Integration of the `ShippingComponent` with graphql.

## [1.3.1] - 2018-5-30

### Fixed

- Fix _ProductPrice_ Component when no Installments are passed.

## [1.3.0] - 2018-05-29

### Added

- Add _Share_ Component.
- Initial version of the availability subscriber component.

### Changed

- Change _ProductPrice_'s installments logic.
- Merge _TechnicalSpecifications_ Component with _ProductDescription_.

## [1.2.0] - 2018-05-24

### Added

- `TechnicalSpecifications` component.
- Initial version of SKU selector component.

### Fixed

- Fix bug on Slider when has just one element.
- Fix bug in the url when search something in the product page and click enter.
- Footer component padding

## [1.1.0] - 2018-05-21

### Changed

- Delayed queries on _BuyButton_ Component.
- Add error treatment on _BuyButton_ Component.
- Update _ProductImages_ Component.
- Update max visible slide items on thumbnail slider.
- Add arrow icons from Nucleo to the Slider.

### Fixed

- Fix _ShippingSimulator_ Component CSS.

## [1.0.0] - 2018-05-18

### Added

- Add all `product-details` components to Apps.
- Add `Enter key` press to the `search bar`.
- Initial version of the shipping simulator.

### Changed

- Transform `npm-storecomponents` in a app that can be used in a VTEX store.
- Update _Price_ Component.
- **SSR** Added SSR compliancy to the searchbar.

### Fixed

- Fix locales directory to work with linked Apps.
- Fix `search bar` when click on category result.
- **slider** Fix infinite attribute of Slider settings.
- Fix Slider classNames.
- Fix Slider settings (slidesToScroll, slidesToShow).
