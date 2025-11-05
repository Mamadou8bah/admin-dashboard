import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Invoice } from '../app/invoice/invoice';
import { Inbox } from '../app/inbox/inbox';
import { Contacts } from './contacts/contacts';
import { Kanban } from './kanban/kanban';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'invoice', component: Invoice },
    { path: 'inbox', component: Inbox },
    { path: 'contacts', component: Contacts },
    { path: 'kanban', component: Kanban }
];
