import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideLottieOptions } from 'ngx-lottie';

import player from 'lottie-web';

import { ENVIRONMENT as ENV } from '../environments/environment';
import { ROUTES_FACTORIZER } from './router';

export const CONFIG_APP: ApplicationConfig = {
  providers: [
    // Angular Common Providers
    provideAnimations(),
    provideClientHydration(),
    provideRouter(ROUTES_FACTORIZER,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
    })),
    // Data-Access Providers
    provideHttpClient(
      withFetch()
    ),
    // Utility Providers
    provideLottieOptions({
      player: () => player
    }),
    {
      provide: APP_BASE_HREF,
      useValue: ENV.baseHref
    }
  ],
};
