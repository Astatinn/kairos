import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { CONFIG_APP } from './config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const CONFIG_SERVER = mergeApplicationConfig(CONFIG_APP, serverConfig);
