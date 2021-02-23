import { ThrowStmt } from '@angular/compiler';
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

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (
      this.router.url.includes('indexer') &&
      this.activatedRoute.snapshot.queryParams['indexer_address']
    ) {
      this.arrayOfAaddresses = this.activatedRoute.snapshot.queryParams[
        'indexer_address'
      ];
      this.switchTab('tab3');
    } else if (
      this.router.url.includes('delegator') &&
      this.activatedRoute.snapshot.queryParams['delegator_address']
    ) {
      this.arrayOfAaddresses = this.activatedRoute.snapshot.queryParams[
        'delegator_address'
      ];
      this.switchTab('tab4');
    } else {
      this.isTab1Active = true;
      this.isTab2Active = false;
      this.isTab3Active = false;
      this.dashboardUrl = this.constants.IndexerDashboard;
    }
  }
  switchTab(tab: string) {
    switch (tab) {
      case 'tab1': {
        this.dashboardUrl = this.constants.IndexerDashboard;
        this.disableAllTabs();
        this.isTab1Active = true;

        break;
      }
      case 'tab2': {
        this.dashboardUrl = this.constants.DelegratorDashboard;
        this.disableAllTabs();
        this.isTab2Active = true;

        break;
      }
      case 'tab3': {
        // this.createUrlWithAddress('indexer');
        this.dashboardUrl = this.arrayOfAaddresses.length
          ? `${
              this.constants.IndividualIndexerDashboard
            }?${this.createUrlWithAddress('indexer')}`
          : `${this.constants.IndividualIndexerDashboard}`;
        console.log('indexer url::', this.dashboardUrl);
        this.disableAllTabs();
        this.isTab3Active = true;

        break;
      }
      case 'tab4': {
        this.createUrlWithAddress('delegator');
        this.dashboardUrl = this.arrayOfAaddresses.length
          ? `${
              this.constants.IndividualDelegatorDashboard
            }?${this.createUrlWithAddress('delegator')}`
          : this.constants.IndividualDelegatorDashboard;
        console.log('Delegator url::', this.dashboardUrl);
        this.disableAllTabs();
        this.isTab4Active = true;

        break;
      }
    }
  }

  createUrlWithAddress(typeOfAddress: string): string {
    let url = '';
    if (this.arrayOfAaddresses.length) {
      this.arrayOfAaddresses.forEach((address) => {
        url = (typeOfAddress = 'indexer')
          ? url + `indexer_address=${address}&`
          : url + `delegator_address=${address}&`;
      });
      return url;
    }
  }

  disableAllTabs() {
    this.isTab1Active = false;
    this.isTab2Active = false;
    this.isTab3Active = false;
    this.isTab4Active = false;
  }
}
