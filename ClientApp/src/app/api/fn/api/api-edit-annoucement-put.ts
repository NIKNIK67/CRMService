/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiEditAnnoucementPut$Params {
  annoucementid?: number;
  header?: string;
  content?: string;
}

export function apiEditAnnoucementPut(http: HttpClient, rootUrl: string, params?: ApiEditAnnoucementPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiEditAnnoucementPut.PATH, 'put');
  if (params) {
    rb.query('annoucementid', params.annoucementid, {});
    rb.query('header', params.header, {});
    rb.query('content', params.content, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiEditAnnoucementPut.PATH = '/Api/EditAnnoucement';
