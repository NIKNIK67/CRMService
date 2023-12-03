/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AnnoucementObject } from '../../models/annoucement-object';

export interface ApiGetAnoucementsGet$Json$Params {
}

export function apiGetAnoucementsGet$Json(http: HttpClient, rootUrl: string, params?: ApiGetAnoucementsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnnoucementObject>>> {
  const rb = new RequestBuilder(rootUrl, apiGetAnoucementsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AnnoucementObject>>;
    })
  );
}

apiGetAnoucementsGet$Json.PATH = '/Api/GetAnoucements';
