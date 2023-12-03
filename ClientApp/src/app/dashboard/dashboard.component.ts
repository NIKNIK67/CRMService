import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Chart, LineController } from 'chart.js/auto';
import { ApiService } from '../api/services';
import { AnnoucementObject } from '../api/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit,OnInit {
  @ViewChild("StatisticData") chartCanvas: any
  @ViewChild("StatisticPie") pieCanvas: any
  news: AnnoucementObject[] =[]
  constructor(private api: ApiService) {
  }
  ngOnInit() {
    this.api.apiGetAnoucementsGet$Json().subscribe(x => {
      this.news = x;
      console.log(x);
    })
  }
  ngAfterViewInit(): void {
    let style = window.getComputedStyle(document.documentElement);
    let bsDanger = style.getPropertyValue('--bs-danger').trim();
    let bsSuccess = style.getPropertyValue('--bs-success').trim();
    let bsWarning = style.getPropertyValue('--bs-warning').trim();
    let bsDarkEmphasis = style.getPropertyValue('--bs-dark-text-emphasis').trim();
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
          label: 'Actions',
          backgroundColor: bsDarkEmphasis,
          borderColor: bsDarkEmphasis,
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
          'Deleted',
          'Uploaded',
          'Edited'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            bsDanger,
            bsSuccess,
            bsWarning
          ],
        }]
      },
      options: {}
    });
  }
}
