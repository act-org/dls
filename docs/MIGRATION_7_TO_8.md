# Migrating from DLS7 to DLS8

## Breaking Changes

**None!** Technically, there are no breaking changes in this release. However,
out of an abundance of caution, we are shipping DLS8 as a new major release
since it contains lots of new components (and therefore, new dependencies)!

DLS8 should not increase your bundle size until you import / use the new
components. But if your bundle analyzer is telling you otherwise, please reach
out!

## New Features

* Added a new `ENCOURA` theme, which represents Encoura's primary look and feel
* Added new chart molecules, which are built using
[Recharts](https://recharts.org/):
  * `AreaChart`
  * `BarChart`
  * `LineChart`
  * `PieChart`
  * `OverlappedBarChart`
  * `ScatterPlot`
  * `StackedBarChart`
* Added a new `DEFAULT_CHART_COLORS` constant, which contains fallback chart
colors that are used when a chart component is not provided with sufficient
color information (either through the theme or through props)
* Added new map molecules, which are built using
[Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/guides):
  * `Map`
  * `CountyMap`
  * `GeomarketMap`
  * `HeatMap`
  * `SCFMap`
  * `StateMap`
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
