import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, LineController } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild("StatisticData") chartCanvas: any
  @ViewChild("StatisticPie") pieCanvas: any
  ngAfterViewInit(): void {
    var ctx = this.chartCanvas.nativeElement.getContext('2d');
    const chart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: [
          '01.01.1900',
          '02.01.1900',
          '03.01.1900',
          '04.01.1900',
          '06.01.1900',
          '07.01.1900',
        ],
        datasets: [{
          label: 'Activity statistics for last week',
          backgroundColor: 'rgb(255,255,255)',
          borderColor: 'rgb(255,255,255)',
          data: [10, 20, 5, 2, 10, 45]
        }]
      },
      options: {}
    });

    var ctxPie = this.pieCanvas.nativeElement.getContext('2d');
    const chartPie = new Chart(ctxPie!, {
      type: 'pie',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        }]
      },
      options: {}
    });
  }
}
