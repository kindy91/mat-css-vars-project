import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMaterialCssVars } from "angular-material-css-vars";

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideMaterialCssVars({
      isAutoContrast: true,
      primary: "#3f51b5",
    }),
  ]
};
