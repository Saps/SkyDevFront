import { provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { App } from '@app/app';
import { routes } from '@app/app.routes';
import { ArcElement, Chart, LineElement, PointElement, RadarController, RadialLinearScale, Tooltip } from 'chart.js';

const providers = [
  provideBrowserGlobalErrorListeners(),
  provideZonelessChangeDetection(),
  provideHttpClient(),
  provideRouter(routes, withComponentInputBinding()),
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
];

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, ArcElement, Tooltip);
bootstrapApplication(App, { providers }).catch((err) => console.error(err));
