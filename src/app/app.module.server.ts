import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './AppModule';
import { AppComponent } from './app.component';
import { CommonModule, NgFor } from '@angular/common';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CommonModule,
    NgFor,
//

  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
