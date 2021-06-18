import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from 'src/core/utils/constant';

@Component({
  selector: 'app-thegraph',
  templateUrl: './thegraph.component.html',
  styleUrls: ['./thegraph.component.scss'],
})
export class ThegraphComponent implements OnInit {
  isTab1Active: boolean;
  isTab2Active: boolean;
  isTab3Active: boolean;
  dashboardUrl: string;
  constants = Constants;
  isTab4Active: boolean;
  arrayOfAaddresses = [];
  labels = Constants.LABELS.theGraphDashboard;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //localhost:4200/indexer?indexer_address=0x7697a886fc3b71a8a88487019337a6bbe5838f1a
    // http: //localhost:4200/delegator?id=0xebc391ba182f6d8654a516a44e382cf9c9196831

    this.routeTodashboard();
  }

  routeTodashboard() {
    let route;
    if (this.router.url.includes('delegator')) {
      route = 'delegator';
    } else if (this.router.url.includes('indexer')) {
      route = 'indexer';
    } else if (this.router.url.includes('curator')) {
      route = 'curator';
    }
    // route = this.router.url.includes('delegator') ? 'delegator' : 'indexer';
    switch (route) {
      case 'indexer':
        {
          this.switchTab('tab1');
          this.arrayOfAaddresses =
            this.activatedRoute.snapshot.queryParams['indexer_address'];
          if (this.activatedRoute.snapshot.queryParams['indexer_address']) {
            this.arrayOfAaddresses =
              this.activatedRoute.snapshot.queryParams['indexer_address'];
            this.switchTab('tab1');
          }
        }
        break;
      case 'delegator': {
        this.switchTab('tab2');
        if (this.activatedRoute.snapshot.queryParams['id']) {
          this.arrayOfAaddresses =
            this.activatedRoute.snapshot.queryParams['id'];
          this.switchTab('tab2');
        }
        break;
      }
      case 'curator': {
        this.switchTab('tab3');
        break;
      }
    }
  }
  switchTab(tab: string) {
    switch (tab) {
      case 'tab1': {
        if (this.router.url.includes('indexer')) {
          if (this.activatedRoute.snapshot.queryParams['indexer_address']) {
            this.dashboardUrl = this.activatedRoute.snapshot.queryParams[
              'indexer_address'
            ]
              ? `${
                  this.constants.IndividualIndexerDashboard
                }?${this.createUrlWithAddress('indexer')}`
              : `${this.constants.IndividualIndexerDashboard}`;
            console.log('indexer url::', this.dashboardUrl);
            this.disableAllTabs();
            this.isTab1Active = true;
          } else {
            this.dashboardUrl = this.constants.IndexerDashboard;
            this.disableAllTabs();
            this.isTab1Active = true;
          }
        } else {
          this.router.navigate(['/indexer']);
        }
        break;
      }
      case 'tab2': {
        if (this.router.url.includes('delegator')) {
          if (this.activatedRoute.snapshot.queryParams['id']) {
            this.dashboardUrl = this.activatedRoute.snapshot.queryParams['id']
              ? `${
                  this.constants.IndividualDelegatorDashboard
                }?${this.createUrlWithAddress('delegator')}`
              : this.constants.IndividualDelegatorDashboard;
            console.log('Delegator url::', this.dashboardUrl);
            this.disableAllTabs();
            this.isTab4Active = true;
          } else {
            this.dashboardUrl = this.constants.DelegratorDashboard;
            this.disableAllTabs();
            this.isTab2Active = true;
          }
        } else {
          this.router.navigate(['/delegator']);
        }
        break;
      }
      case 'tab3': {
        this.dashboardUrl = this.constants.curatorDashboard;
        this.disableAllTabs();
        this.isTab3Active = true;
        this.router.navigate([this.labels.curator]);
        break;
      }
      default: {
        this.switchTab('tab1');
        break;
      }
    }
  }

  createUrlWithAddress(typeOfAddress: string): string {
    let url = '';
    if (Array.isArray(this.arrayOfAaddresses)) {
      if (this.arrayOfAaddresses.length) {
        this.arrayOfAaddresses.forEach((address) => {
          url =
            typeOfAddress === 'indexer'
              ? url + `indexer_address=${address}&`
              : url + `id=${address}&`;
        });
      }
    } else {
      url =
        typeOfAddress === 'indexer'
          ? url + `indexer_address=${this.arrayOfAaddresses}`
          : url + `id=${this.arrayOfAaddresses}`;
    }
    return url;
  }

  disableAllTabs() {
    this.isTab1Active = false;
    this.isTab2Active = false;
    this.isTab3Active = false;
    this.isTab4Active = false;
  }
}
