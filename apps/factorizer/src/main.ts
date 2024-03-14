import { bootstrapApplication } from '@angular/platform-browser';
import { CONFIG_APP } from './app/config';
import { BootstrapComponent } from './app/bootstrap.component';
import '@angular/localize/init';

bootstrapApplication(BootstrapComponent, CONFIG_APP)
  .catch((err) => console.error(err));
