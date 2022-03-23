// (c) Copyright 2022 Micro Focus or one of its affiliates.

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';

import { todoModel } from './app.todo.model';

@Injectable({
    providedIn: 'root'
})
export class AppComponentService {
    constructor (
        private httpClient: HttpClient,
       
    ) {
    }

    public getTodos (): Observable<todoModel[]> {
       const confid = 'https://jsonplaceholder.typicode.com/todos';
        return this.httpClient.get<todoModel[]>(confid);
    }
}
