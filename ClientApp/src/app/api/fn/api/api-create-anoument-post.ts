/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiCreateAnoumentPost$Params {
  header?: string;
  content?: string;
}

export function apiCreateAnoumentPost(http: HttpClient, rootUrl: string, params?: ApiCreateAnoumentPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiCreateAnoumentPost.PATH, 'post');
  if (params) {
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

apiCreateAnoumentPost.PATH = '/Api/CreateAnoument';
