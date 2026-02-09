import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component.js';
import { config } from './app/app.config.server.js';

// Angular v21+ SSR requires passing the BootstrapContext to bootstrapApplication
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;
