import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.isTab1Active = true;
    this.isTab2Active = false;
    this.isTab3Active = false;
    this.dashboardUrl = this.constants.IndexerDashboard;
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
        this.dashboardUrl = this.constants.IndividualIndexerDashboard;
        this.disableAllTabs();
        this.isTab3Active = true;
        break;
      }
    }
  }

  disableAllTabs() {
    this.isTab1Active = false;
    this.isTab2Active = false;
    this.isTab3Active = false;
  }
}
