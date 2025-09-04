import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Cookies {
  private readonly doc = inject(DOCUMENT);

  get(key: string): string {
    return this.getAll()[key] || '';
  }

  getAll(): Record<string, string> {
    return Object.fromEntries(this.getArray());
  }

  getArray(): [string, string][] {
    const array = this.doc.cookie.split('; ');
    return array.map((st: string) => [st.slice(0, st.indexOf('=')), st.slice(st.indexOf('=') + 1)]);
  }

  set(str: string): void {
    this.doc.cookie = str;
  }
}
