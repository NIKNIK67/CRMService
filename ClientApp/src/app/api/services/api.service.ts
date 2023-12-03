/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AnnoucementObject } from '../models/annoucement-object';
import { apiCheckJwtGet } from '../fn/api/api-check-jwt-get';
import { ApiCheckJwtGet$Params } from '../fn/api/api-check-jwt-get';
import { apiCreateAnoumentPost } from '../fn/api/api-create-anoument-post';
import { ApiCreateAnoumentPost$Params } from '../fn/api/api-create-anoument-post';
import { apiDeleteAnnoucementDelete } from '../fn/api/api-delete-annoucement-delete';
import { ApiDeleteAnnoucementDelete$Params } from '../fn/api/api-delete-annoucement-delete';
import { apiEditAnnoucementPut } from '../fn/api/api-edit-annoucement-put';
import { ApiEditAnnoucementPut$Params } from '../fn/api/api-edit-annoucement-put';
import { apiGetAnnoucementsSortedGet$Json } from '../fn/api/api-get-annoucements-sorted-get-json';
import { ApiGetAnnoucementsSortedGet$Json$Params } from '../fn/api/api-get-annoucements-sorted-get-json';
import { apiGetAnnoucementsSortedGet$Plain } from '../fn/api/api-get-annoucements-sorted-get-plain';
import { ApiGetAnnoucementsSortedGet$Plain$Params } from '../fn/api/api-get-annoucements-sorted-get-plain';
import { apiGetAnoucementsGet$Json } from '../fn/api/api-get-anoucements-get-json';
import { ApiGetAnoucementsGet$Json$Params } from '../fn/api/api-get-anoucements-get-json';
import { apiGetAnoucementsGet$Plain } from '../fn/api/api-get-anoucements-get-plain';
import { ApiGetAnoucementsGet$Plain$Params } from '../fn/api/api-get-anoucements-get-plain';
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

  /** Path part for operation `apiCreateAnoumentPost()` */
  static readonly ApiCreateAnoumentPostPath = '/Api/CreateAnoument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreateAnoumentPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateAnoumentPost$Response(params?: ApiCreateAnoumentPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCreateAnoumentPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCreateAnoumentPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreateAnoumentPost(params?: ApiCreateAnoumentPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCreateAnoumentPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGetAnoucementsGet()` */
  static readonly ApiGetAnoucementsGetPath = '/Api/GetAnoucements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetAnoucementsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnoucementsGet$Plain$Response(params?: ApiGetAnoucementsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnnoucementObject>>> {
    return apiGetAnoucementsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetAnoucementsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnoucementsGet$Plain(params?: ApiGetAnoucementsGet$Plain$Params, context?: HttpContext): Observable<Array<AnnoucementObject>> {
    return this.apiGetAnoucementsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AnnoucementObject>>): Array<AnnoucementObject> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetAnoucementsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnoucementsGet$Json$Response(params?: ApiGetAnoucementsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnnoucementObject>>> {
    return apiGetAnoucementsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetAnoucementsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnoucementsGet$Json(params?: ApiGetAnoucementsGet$Json$Params, context?: HttpContext): Observable<Array<AnnoucementObject>> {
    return this.apiGetAnoucementsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AnnoucementObject>>): Array<AnnoucementObject> => r.body)
    );
  }

  /** Path part for operation `apiGetAnnoucementsSortedGet()` */
  static readonly ApiGetAnnoucementsSortedGetPath = '/Api/GetAnnoucementsSorted';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetAnnoucementsSortedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnnoucementsSortedGet$Plain$Response(params?: ApiGetAnnoucementsSortedGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnnoucementObject>>> {
    return apiGetAnnoucementsSortedGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetAnnoucementsSortedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnnoucementsSortedGet$Plain(params?: ApiGetAnnoucementsSortedGet$Plain$Params, context?: HttpContext): Observable<Array<AnnoucementObject>> {
    return this.apiGetAnnoucementsSortedGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AnnoucementObject>>): Array<AnnoucementObject> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetAnnoucementsSortedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnnoucementsSortedGet$Json$Response(params?: ApiGetAnnoucementsSortedGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnnoucementObject>>> {
    return apiGetAnnoucementsSortedGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetAnnoucementsSortedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAnnoucementsSortedGet$Json(params?: ApiGetAnnoucementsSortedGet$Json$Params, context?: HttpContext): Observable<Array<AnnoucementObject>> {
    return this.apiGetAnnoucementsSortedGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AnnoucementObject>>): Array<AnnoucementObject> => r.body)
    );
  }

  /** Path part for operation `apiEditAnnoucementPut()` */
  static readonly ApiEditAnnoucementPutPath = '/Api/EditAnnoucement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEditAnnoucementPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEditAnnoucementPut$Response(params?: ApiEditAnnoucementPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEditAnnoucementPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEditAnnoucementPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEditAnnoucementPut(params?: ApiEditAnnoucementPut$Params, context?: HttpContext): Observable<void> {
    return this.apiEditAnnoucementPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDeleteAnnoucementDelete()` */
  static readonly ApiDeleteAnnoucementDeletePath = '/Api/DeleteAnnoucement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDeleteAnnoucementDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDeleteAnnoucementDelete$Response(params?: ApiDeleteAnnoucementDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDeleteAnnoucementDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDeleteAnnoucementDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDeleteAnnoucementDelete(params?: ApiDeleteAnnoucementDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiDeleteAnnoucementDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
