import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { TagResource } from './TagResource';
import { TagDto } from '../dataModel/TagDto';

@Injectable()
export class TagService {
    constructor(private tagResource: TagResource) {
    }

    public getAllTagsItems(): Observable<TagDto[]> {
        return this.tagResource.findAll();
    }

}
