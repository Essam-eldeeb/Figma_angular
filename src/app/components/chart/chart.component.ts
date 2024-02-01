import { Component, ViewChild } from "@angular/core";

import {
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
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "استخدام",
          data: [10, 41, 35, 51,100, 62, 69, 91, 10],
        }
      ],
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "إحصائيات إستخدام القسيه",
        align: 'right'
      },
      subtitle: {
        text:"05 يوليو , 2023 - 05 أغسطس , 2023"
        ,
        align: 'right'
      },
      xaxis: {
        categories: ["ديسمبر","نوفمبر ",'اكتوبر',"سبتمبر", "اغسطس",  "يوليو ",  "يونيو",  "مايو",  "ابريل",  "مارس",  "فيراير", "يناير "]
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
