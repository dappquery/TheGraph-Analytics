import { Injectable } from '@angular/core';
import { iSvgIcon } from './svg-icon';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {

  private registry = new Map<string, string>();

  public registerIcons(icons: iSvgIcon[]): void {
    icons.forEach((icon: iSvgIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
