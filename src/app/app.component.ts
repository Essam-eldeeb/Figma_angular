import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexDataLabels,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  stroke: ApexStroke
  markers: ApexMarkers
  dataLabels: ApexDataLabels
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "عصتم الدييب",
        align: 'right'
      },
      subtitle: {
        text: "عصتم الدييب",
        align: 'right'
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      yaxis: {
        show: false
      },

      stroke: {
        curve: 'smooth',
      },
      markers: {
        // size: 0,
        // colors: undefined,
        // strokeColors: '#fff',
        // strokeWidth: 2,
        // strokeOpacity: 0.9,
        // strokeDashArray: 0,
        // fillOpacity: 1,
        // discrete: [],
        shape: "circle",
        radius: 2,
        // offsetX: 0,
        // offsetY: 0,
        // onClick: undefined,
        // onDblClick: undefined,
        // showNullDataPoints: true,
        // hover: {
        //   size: undefined,
        //   sizeOffset: 3
        // }
    },
    dataLabels: {
      enabled: false
    },

    };
  }
}
