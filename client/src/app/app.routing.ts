import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'about', component: AboutComponent },
    { path: 'books/:bookId', component: BookComponent },
    { path: 'add_book', component: AddBookComponent },
    { path: 'edit_book', component: EditBookComponent },
    { path: 'delete_book', component: DeleteBookComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);