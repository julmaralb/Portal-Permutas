import {Injectable} from '@angular/core';
import {Person} from './domain'
import {PaginationPage, PaginationPropertySort} from './pagination';
import {webServiceEndpoint} from './commons';
import {Http, Response, URLSearchParams, RequestOptions} from '@angular/http';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publish';

@Injectable()
export class PlazaService {

	constructor(private http: Http) {}
	
	
	getPlazas(): Rx.Observable<PlazaPropia[]> {
        return this.http.get('/Portal-Permutas/api/plazaPropia/all').map(this.extractData).publish().refCount();
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }