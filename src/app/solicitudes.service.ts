import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private httpClient: HttpClient) { }

  getSolicitudes() {
    const accessToken = 'o_HLSVqO8914nJSWY89rUO-ud6hs855qggwl2DVIDFQ';
    return this.httpClient
      .get(`https://cdn.contentful.com/spaces/bdjfvl4aciuh/environments/master/entries?access_token=${accessToken}`)
      .toPromise();

  }
}
