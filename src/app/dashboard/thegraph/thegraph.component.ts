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
    //localhost:4200/indexer?indexer_address=0x7697a886fc3b71a8a88487019337a6bbe5838f1a

    // http: //localhost:4200/delegator?id=0xebc391ba182f6d8654a516a44e382cf9c9196831
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
      this.activatedRoute.snapshot.queryParams['id']
    ) {
      this.arrayOfAaddresses = this.activatedRoute.snapshot.queryParams['id'];
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
    if (Array.isArray(this.arrayOfAaddresses)) {
      if (this.arrayOfAaddresses.length) {
        this.arrayOfAaddresses.forEach((address) => {
          url = (typeOfAddress = 'indexer')
            ? url + `indexer_address=${address}&`
            : url + `delegator_address=${address}&`;
        });
      }
    } else {
      url = (typeOfAddress = 'indexer')
        ? url + `indexer_address=${this.arrayOfAaddresses}`
        : url + `delegator_address=${this.arrayOfAaddresses}`;
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
