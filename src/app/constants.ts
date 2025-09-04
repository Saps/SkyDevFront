import { isDevMode } from '@angular/core';

export const API = isDevMode() ? 'http://localhost:4200/api' : 'http://ussr-lab.ru:8020';
