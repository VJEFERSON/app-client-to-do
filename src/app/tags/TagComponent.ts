import {Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TagDto } from './dataModel/TagDto';
import { TagService } from './services/TagService';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-tags',
    templateUrl: 'tags.html',
    styleUrls: ['tags.scss']
})

export class TagComponent implements OnInit {
    public isLoading = false;
    public displayedColumns: string[] = ['id', 'title', 'description'];
    private tagListSubject: BehaviorSubject<TagDto[]> = new BehaviorSubject(null);
    constructor(private tagService: TagService) {

    }

    ngOnInit() {
        this.isLoading = true;
        this.tagService.getAllTagsItems()
            .pipe (finalize ( () => this.isLoading = false ))
            .subscribe((tagsItems) => this.tagListSubject.next(tagsItems));
    }

    public getTags(): Observable<TagDto[]> {
        return this.tagListSubject.asObservable();
    }
}

