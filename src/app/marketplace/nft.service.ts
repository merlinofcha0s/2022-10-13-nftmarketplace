import {Injectable} from '@angular/core';
import {Nft, Nfts, SingleNft} from "./model/nfts.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HttpResponse<Nfts>> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', environment.apiKey);
    const params = new HttpParams()
      .set('chain', 'ethereum')
      .set('include', 'all')
      .set('page_size', '20');
    const contractId = '0x248a74f64bbf422dae243ed5d58ef0dd7298b972'
    return this.http.get<Nfts>(`${environment.baseApiUrl}/nfts/${contractId}`,
      {headers, params, observe: 'response'});
  }

  getOne(blockchain: string, contractId: string, token: string): Observable<HttpResponse<SingleNft>> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', environment.apiKey);
    const params = new HttpParams()
      .set('chain', blockchain)
    return this.http.get<SingleNft>(`${environment.baseApiUrl}/nfts/${contractId}/${token}`,
      {headers, params, observe: 'response'});
  }
}
