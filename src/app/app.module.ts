import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThegraphComponent } from './dashboard/thegraph/thegraph.component';
import { HeaderMenuAreaComponent } from './shared/header-menu-area/header-menu-area.component';
import { LogoutHeaderComponent } from './shared/logout-header/logout-header.component';
import { SvgIconComponent } from './utility/svg-icon/svg-icon.component';
import { SvgIconService } from './utility/svg-icon/svg-icon.service';
import { DomSanitizerPipe } from './utility/pipe/dom-sanitizer.pipe';
import {
  dappQueryLogo,
  discordLogo,
  twitterLogo,
  medium,
  arrowIcon,
  indexerIcon,
  delegatorIcon,
  arrowUp,
  curatorIcon,
} from './utility/svg-icon/svg-icon';
import { SlidingTabsModule } from 'angular-sliding-tabs';

@NgModule({
  declarations: [
    AppComponent,
    ThegraphComponent,
    HeaderMenuAreaComponent,
    LogoutHeaderComponent,
    SvgIconComponent,
    DomSanitizerPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, SlidingTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private svgIconService: SvgIconService) {
    this.svgIconService.registerIcons([
      dappQueryLogo,
      discordLogo,
      twitterLogo,
      medium,
      arrowIcon,
      indexerIcon,
      delegatorIcon,
      arrowUp,
      curatorIcon,
    ]);
  }
}
