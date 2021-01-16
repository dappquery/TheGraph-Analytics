import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, ViewEncapsulation, OnInit } from '@angular/core';
import { SvgIconService } from './svg-icon.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-svg-icon',
  template: `
  <ng-content></ng-content>
`,
  // styles: [':host::ng-deep'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  private svgIcon: SVGElement;
  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.svgIconService.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(private element: ElementRef, private svgIconService: SvgIconService,
              @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;


    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }

}
