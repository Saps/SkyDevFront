import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from '@app/app';
import { routes } from '@app/app.routes';
import { jwtInterceptor } from '@app/jwt.interceptor';

const providers = [
  provideBrowserGlobalErrorListeners(),
  provideZonelessChangeDetection(),
  provideHttpClient(withInterceptors([jwtInterceptor])),
  provideRouter(routes),
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
];

bootstrapApplication(App, { providers }).catch((err) => console.error(err));
