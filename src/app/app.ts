import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icons = ['vtb-logo'];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {
  constructor(registry: MatIconRegistry, ds: DomSanitizer) {
    icons.forEach((name) => registry.addSvgIcon(name, ds.bypassSecurityTrustResourceUrl(`../assets/images/${name}.svg`)));
  }
}
