import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {BlogComponent} from "./pages/blog/blog.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
