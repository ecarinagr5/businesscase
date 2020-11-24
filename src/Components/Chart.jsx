import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        ...props,
    };
  }

    componentDidMount() { 
      this.renderChart()
    }

    componentDidUpdate(){
      this.renderChart()
    }

    renderChart() {
      let { metrics, setVisualization } = this.props;

      let dataToGraph = {};
          dataToGraph = new Array();

      Object.values(metrics).map( y => {
          dataToGraph.push({
              "date":moment(y.date).format('LTS'),
              "price":y.price,
            }) 
      });

      let chart = am4core.create("chartdiv", am4charts.XYChart);
      this.chart = chart;
      chart.data = dataToGraph;
      chart.dateFormatter.dateFormat = "yyyy-MM-dd";


      // Create axes
      let dateAxis =  chart.xAxes.push(new am4charts.CategoryAxis());
          dateAxis.dataFields.category = "date";
          dateAxis.renderer.minGridDistance = 100;
          dateAxis.renderer.grid.template.location = 0.5;
          dateAxis.startLocation = 0.5;
          dateAxis.endLocation = 0.5;
          dateAxis.skipEmptyPeriods = true;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.baseValue = 0;

      // Create series
      let series = setVisualization === 'Bar' ? chart.series.push(new am4charts.ColumnSeries()) : chart.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = "price";
          series.dataFields.categoryX = "date";
          series.strokeWidth = 2;
          series.tensionX = 0.77;

      // bullet is added because we add tooltip to a bullet for it to change color
      let bullet = series.bullets.push(new am4charts.Bullet());
      bullet.tooltipText = "{valueY}";

      bullet.adapter.add("fill", function(fill, target){
          if(target.dataItem.valueY < 0){
              return am4core.color("#FF0000");
          }
          return fill;
      })
      let range = valueAxis.createSeriesRange(series);
      range.value = 0;
      range.endValue = -1000;
      range.contents.stroke = am4core.color("#FF0000");
      range.contents.fill = range.contents.stroke;

      // Add scrollbar
      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      chart.cursor = new am4charts.XYCursor();
            
        }

    render() {
        return (  
              <div id="chartdiv" style={{ width: "100%", height: "500px" }} className="mt-5"></div>
        );
    }
}

/*Chart.propTypes = propTypes;*/

export default Chart;
