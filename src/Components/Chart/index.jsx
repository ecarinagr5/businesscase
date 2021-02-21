import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//Style
import './style.css';

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

      Object.values(metrics).map( ( y, i )=> {
            dataToGraph.push({
                "name":y.name,
                "size":y.size,
            }) 
      });

      let chart = am4core.create("chartdiv", am4charts.XYChart);
      this.chart = chart;
      chart.data = dataToGraph;

      // Create axes
      let dateAxis =  chart.xAxes.push(new am4charts.CategoryAxis());
          dateAxis.dataFields.category = "name";
          dateAxis.skipEmptyPeriods = true;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.baseValue = 0;

      // Create series
      let series = setVisualization === 'Bar' ? chart.series.push(new am4charts.ColumnSeries()) : chart.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = "size";
          series.dataFields.categoryX = "name";
          series.strokeWidth = 2;
          series.tensionX = 0.77;

      // bullet is added because we add tooltip to a bullet for it to change color
      let bullet = series.bullets.push(new am4charts.Bullet());
      bullet.tooltipText = "{valueY}";

      bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 0){
            return am4core.color("#4e73df");
        }
        return fill;
      })
      let range = valueAxis.createSeriesRange(series);
      range.value = 0;
      range.endValue = -1000;
      range.contents.stroke = am4core.color("#4e73df");
      range.contents.fill = range.contents.stroke;

      // Add scrollbar
      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      chart.cursor = new am4charts.XYCursor();
            
        }

    render() {
        return (  
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Size Projects </h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chart-area">
                        <div id="chartdiv" style={{ width: "100%", height: "500px" }} className="mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

/*Chart.propTypes = propTypes;*/

export default Chart;
