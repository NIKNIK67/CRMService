/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiDeleteAnnoucementDelete$Params {
  annoucementid?: number;
}

export function apiDeleteAnnoucementDelete(http: HttpClient, rootUrl: string, params?: ApiDeleteAnnoucementDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiDeleteAnnoucementDelete.PATH, 'delete');
  if (params) {
    rb.query('annoucementid', params.annoucementid, {});
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

apiDeleteAnnoucementDelete.PATH = '/Api/DeleteAnnoucement';
