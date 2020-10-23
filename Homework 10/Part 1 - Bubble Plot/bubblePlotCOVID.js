{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 400,
  "title": "COVID-19 Cases Per Country (13 Oct 2020)",
  "data": {
    "url": "https://raw.githubusercontent.com/KaneSec/vega_lite/main/4_interactive_scatter_plot/data/COVID_19_10_Oct_2020.csv"
  },
  "mark":"circle",
  "encoding": {
    "x": {
      "field": "Confirmed",
      "type": "quantitative",
      "title": "Confirmed Cases"
    },
    "y":{
      "field": "Deaths",
      "type": "quantitative"
    },
    "color":{
      "field": "Continent",
      "type": "nominal"
    },
    "size": {
      "field": "Population",
      "type": "quantitative"
    }
  }
}