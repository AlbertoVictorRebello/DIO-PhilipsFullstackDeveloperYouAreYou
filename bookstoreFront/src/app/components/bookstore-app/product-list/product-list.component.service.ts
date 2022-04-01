import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/book';


@Injectable()
export  class BooksService {
    private url = 'https://localhost:44382/api/bookstore';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

      constructor(private httpClient: HttpClient) { }

    getBook() {
        // return this.httpClient.get(this.url);

        return [
            {
                'id': '1',
                'name': 'Book1',
                'price': 100,
                'quantity': 50,
                'category': 'category1',
                'img': 'book1'
            },

            {
                'id': '2',
                'name': 'Book2',
                'price': 100,
                'quantity': 50,
                'category': 'category2',
                'img': 'book2'
            },

            {
                'id': '3',
                'name': 'Book3',
                'price': 100,
                'quantity': 50,
                'category': 'category3',
                'img': 'book3'
            }
        ]
    }
}