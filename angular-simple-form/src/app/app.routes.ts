import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { ConfiguracoesComponent } from './main/configuracoes/configuracoes.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'configuracoes',
                component: ConfiguracoesComponent
                
            }
        ]
    }
];
