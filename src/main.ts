import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
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
];

bootstrapApplication(App, { providers }).catch((err) => console.error(err));
