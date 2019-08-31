import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from '../../common/api/ApiConfig';
import { TagDto } from '../dataModel/TagDto';

@Injectable()
export class TagResource {
    private readonly URL = ApiConfig.url + '/tags';

    constructor(private httpClient: HttpClient) {
    }

    public findAll(): Observable<TagDto[]> {
        return this.httpClient.get(this.URL) as Observable<TagDto[]>;
    }

}
