import { bootstrapApplication } from '@angular/platform-browser';
import { BootstrapComponent } from './app/bootstrap.component';
import { CONFIG_SERVER } from './app/config.server';

const bootstrap = () => bootstrapApplication(BootstrapComponent, CONFIG_SERVER);

export default bootstrap;
