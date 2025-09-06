import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

function addIcons(icons: string[], registry: MatIconRegistry, ds: DomSanitizer): undefined {
  icons.forEach((name) => registry.addSvgIcon(name, ds.bypassSecurityTrustResourceUrl(`../assets/images/${name}.svg`)));
  return undefined;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  private readonly $ = addIcons(['vtb-logo'], inject(MatIconRegistry), inject(DomSanitizer));
}
