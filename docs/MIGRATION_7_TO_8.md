# Migrating from DLS7 to DLS8

## Breaking Changes

This release contains a lot of version bumps. Notably, you will need to
make the following updates in your project's `package.json` file:

* Bumped the minimum required `@mui/base` version to `5.0.0-beta.40`
  * Requires `@mui/material` version `5.15.0` or above
* Bumped the minimum required `@mui/lab` version to `5.0.0-alpha.169`

Aside from that, there are technically no breaking changes in this release.
However, out of an abundance of caution, we are shipping DLS8 as a new major
release since it contains a lot of new components (and therefore,
new dependencies)!

DLS8 should not increase your bundle size until you import / use these new
components. But if your bundle analyzer is telling you otherwise, please reach
out!

## New Features

* Added a new `ENCOURA` theme, which represents Encoura's primary look and feel
* Added new chart molecules, which are built using
[Recharts](https://recharts.org/):
  * [AreaChart](/docs/molecules-charts-areachart--documentation)
  * [BarChart](/docs/molecules-charts-barchart--documentation)
  * [LineChart](/docs/molecules-charts-linechart--documentation)
  * [PieChart](/docs/molecules-charts-piechart--documentation)
  * [OverlappedBarChart](/docs/molecules-charts-overlappedbarchart--documentation)
  * [ScatterPlot](/docs/molecules-charts-scatterplot--documentation)
  * [StackedBarChart](/docs/molecules-charts-stackedbarchart--documentation)
* Added a new `DEFAULT_CHART_COLORS` constant, which contains fallback chart
colors that are used when a chart component is not provided with sufficient
color information (either through the theme or through props)
* Added new map molecules, which are built using
[Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/guides):
  * [Map](/docs/molecules-maps-map--documentation)
  * [CountyMap](/docs/molecules-maps-countymap--documentation)
  * [GeomarketMap](/docs/molecules-maps-geomarketmap--documentation)
  * [HeatMap](/docs/molecules-maps-heatmap--documentation)
  * [SCFMap](/docs/molecules-maps-scfmap--documentation)
  * [StateMap](/docs/molecules-maps-statemap--documentation)
* Bumped all dependencies to their latest releases, including MUI to `v5.15.14`
* Bumped the DLS's Node version to `v20`

## Customizing Charts & Maps

If you add a chart or map to your project and find that the default color scheme
is grey, this means that the colors have not been customized (yet)
on your theme.

In order to customize these colors, e.g. for the `BarChart` component, you can
augment your `theme.components` section as follows:

```json
{
  ...
  components: {
    ...
    DlsBarChart: {
      defaultProps: {
        colors: ['red', 'green', '#FF00FF', 'orange', '#00FF00'],
      },
    },
    ...
  },
  ...
}
```

Now, any time `BarChart` is used within your theme, it will have the above
color scheme pre-configured by default.

Like any other Material UI component, you can override the theme defaults in
order to handle one-off scenarios:

```tsx
<BarChart
  ...
  colors={['black', 'orange', 'pink']}
  ...
/>
```
