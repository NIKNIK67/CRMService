/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AnnoucementObject } from '../../models/annoucement-object';

export interface ApiGetAnnoucementsSortedGet$Plain$Params {
}

export function apiGetAnnoucementsSortedGet$Plain(http: HttpClient, rootUrl: string, params?: ApiGetAnnoucementsSortedGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AnnoucementObject>>> {
  const rb = new RequestBuilder(rootUrl, apiGetAnnoucementsSortedGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AnnoucementObject>>;
    })
  );
}

apiGetAnnoucementsSortedGet$Plain.PATH = '/Api/GetAnnoucementsSorted';
