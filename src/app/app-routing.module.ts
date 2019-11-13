import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './component/users/users.module#UsersModule'
  },
  {
    path: 'details/:id',
    loadChildren: './component/userdetails/details.module#DetailsModule'
  },
  {
    path: 'posts',
    loadChildren: './component/post/post.module#PostModule'
  }
  ,
  {
    path: 'posts/:id',
    loadChildren: './component/post-details/post-details.module#PostDetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
