import { SigninComponent } from './auth/signin/signin.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipesStartComponent },
            { path: 'new', component: RecipesEditComponent, canActivate: [AuthGuard] },
            { path: ':id/edit', component: RecipesEditComponent,  canActivate: [AuthGuard] },
            { path: ':id', component: RecipesDetailComponent },

        ]
    },
    { path: 'shoppingList', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({

    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})

export class AppRoutingModule {

}


