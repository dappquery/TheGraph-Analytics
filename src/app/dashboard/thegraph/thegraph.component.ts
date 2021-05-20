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
  isMoreTabOpen = false;
  arrayOfAaddresses = [];
  labels = this.constants.LABELS.theGraphDashboard;
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeTodashboard();
  }

  routeTodashboard() {
    let route = this.router.url.includes(this.labels.delegator)
      ? this.labels.delegator
      : this.labels.indexer;
    switch (route) {
      case this.labels.indexer:
        {
          this.switchTab('tab1');
          this.arrayOfAaddresses =
            this.activatedRoute.snapshot.queryParams[
              this.labels.indexer_address
            ];
          if (
            this.activatedRoute.snapshot.queryParams[
              this.labels.indexer_address
            ]
          ) {
            this.arrayOfAaddresses =
              this.activatedRoute.snapshot.queryParams[
                this.labels.indexer_address
              ];
            // this.switchTab('tab3');
          }
        }
        break;
      case this.labels.delegator: {
        this.switchTab('tab2');
        if (this.activatedRoute.snapshot.queryParams['id']) {
          this.arrayOfAaddresses =
            this.activatedRoute.snapshot.queryParams['id'];
          // this.switchTab('tab4');
        }
        break;
      }
    }
  }
  switchTab(tab: string) {
    switch (tab) {
      case 'tab1': {
        this.dashboardUrl = this.constants.IndexerDashboard;
        this.disableAllTabs();
        this.isTab1Active = true;
        this.router.navigate([this.labels.indexer]);
        break;
      }
      case 'tab2': {
        this.dashboardUrl = this.constants.DelegratorDashboard;
        this.disableAllTabs();
        this.isTab2Active = true;
        this.router.navigate([this.labels.delegator]);
        break;
      }

      case 'tab3': {
        this.disableAllTabs();
        this.isTab3Active = true;

        break;
      }
      // case 'tab4': {
      //   this.dashboardUrl = this.activatedRoute.snapshot.queryParams['id']
      //     ? `${
      //         this.constants.IndividualDelegatorDashboard
      //       }?${this.createUrlWithAddress(this.labels.delegator)}`
      //     : this.constants.IndividualDelegatorDashboard;
      //   console.log('Delegator url::', this.dashboardUrl);
      //   this.disableAllTabs();
      //   this.isTab4Active = true;

      //   break;
      // }
    }
  }

  createUrlWithAddress(typeOfAddress: string): string {
    let url = '';
    if (Array.isArray(this.arrayOfAaddresses)) {
      if (this.arrayOfAaddresses.length) {
        this.arrayOfAaddresses.forEach((address) => {
          url =
            typeOfAddress === this.labels.indexer
              ? url + `indexer_address=${address}&`
              : url + `id=${address}&`;
        });
      }
    } else {
      url =
        typeOfAddress === this.labels.indexer
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

  // toggleMoreTab() {
  //   this.disableAllTabs();
  //   this.isMoreTabOpen = !this.isMoreTabOpen;
  // }
}
