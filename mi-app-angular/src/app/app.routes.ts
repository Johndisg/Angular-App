import { Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

export const routes: Routes = [
    {
        path: '',
        component: NavegacionComponent,
        children: [
            {
                path:'listado',
                component: ListadoProductosComponent
            },
            {
                path: 'crear',
                component: CrearProductoComponent
            }
        ]
    }
];
