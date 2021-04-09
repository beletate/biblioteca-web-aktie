import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { RegisterBooksComponent } from './books/register-books/register-books.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,

    },
    {
        path: 'cadastro/livro',
        component: RegisterBooksComponent
    },
    {
        path: 'cadastro/livro/:id',
        component: RegisterBooksComponent
    },
    {
        path: 'lista/livro',
        component: ListBooksComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}