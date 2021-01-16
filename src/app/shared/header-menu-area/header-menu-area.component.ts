
import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AppService } from 'src/app/app.service';
import { Constants } from 'src/core/utils/constant';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-menu-area',
  templateUrl: './header-menu-area.component.html',
  styleUrls: ['./header-menu-area.component.scss']
})
export class HeaderMenuAreaComponent implements OnInit, AfterViewInit {
  constantsURLs = Constants.URLs;
  labels = Constants.LABELS.headerArea;
  commonLables = Constants.LABELS.commonLables;
  screenWidth: number;
  isUserLoggedIn = false;

  currentPage: string = '';
  analyzerUrl: string;
  constructor(
    private readonly _router: Router) { }

  ngOnInit(): void {
    // this.analyzerUrl = `${environment.ANALYZER}?ref=analyzer`;
    this.isUserLoggedIn = this.getCookie('_dqco') ? true : false;
    // this.isUserLoggedIn = true;
    this.getScreenSize();
  }

  ngAfterViewInit() {

    this.setSVGProperty('discord-logo', { height: '45px', width: '45px' });
    this.setSVGProperty('twitter-logo', { height: '50px', width: '50px' });

  }


  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  setSVGProperty(svgId: string, styleProperties: any) {
    const ele = document.getElementById(svgId);
    ele.style.height = styleProperties.height;
    ele.style.width = styleProperties.width;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 450) {
      this.setSVGProperty('dappquery-logo', { height: '70px', width: '200px' });
    }
    if (this.screenWidth > 450) {
      this.setSVGProperty('dappquery-logo', { height: '70px', width: '310px' });
    }
  }

  

}
