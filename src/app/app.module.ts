import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorInterceptor } from './interceptors/header-interceptor.interceptor';
import { RetryInterceptorInterceptor } from './interceptors/retry-interceptor.interceptor';
import { ProfilerInterceptorInterceptor } from './interceptors/profiler-interceptor.interceptor';
import { InterceptorExampleComponent } from './interceptor-example/interceptor-example.component';

@NgModule({
  declarations: [AppComponent, InterceptorExampleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProfilerInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
