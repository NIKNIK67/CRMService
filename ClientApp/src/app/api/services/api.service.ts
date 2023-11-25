/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCheckJwtGet } from '../fn/api/api-check-jwt-get';
import { ApiCheckJwtGet$Params } from '../fn/api/api-check-jwt-get';
import { apiLoginGet } from '../fn/api/api-login-get';
import { ApiLoginGet$Params } from '../fn/api/api-login-get';
import { apitestGet } from '../fn/api/apitest-get';
import { ApitestGet$Params } from '../fn/api/apitest-get';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apitestGet()` */
  static readonly ApitestGetPath = '/apitest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apitestGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apitestGet$Response(params?: ApitestGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apitestGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apitestGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apitestGet(params?: ApitestGet$Params, context?: HttpContext): Observable<void> {
    return this.apitestGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCheckJwtGet()` */
  static readonly ApiCheckJwtGetPath = '/Api/CheckJWT';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckJwtGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckJwtGet$Response(params?: ApiCheckJwtGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCheckJwtGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCheckJwtGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckJwtGet(params?: ApiCheckJwtGet$Params, context?: HttpContext): Observable<void> {
    return this.apiCheckJwtGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLoginGet()` */
  static readonly ApiLoginGetPath = '/Api/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Response(params?: ApiLoginGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLoginGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLoginGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet(params?: ApiLoginGet$Params, context?: HttpContext): Observable<void> {
    return this.apiLoginGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
