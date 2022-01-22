import { UnidadComponent } from '../pages/unidades/UnidadComponent';
import { 
    MovimientoPerpendiculares, 
    MRUPerpendicular, 
    MovimientoCircular 
} from '../pages/unidades/unidad1';
import { 
    TiposFuerza,
} from '../pages/unidades/unidad2';


interface Routes {
    path: string;
    to: string;
    Component: (props: { topics: Topics[] }) => JSX.Element;
    name: string;
    topics: Topics[];
}

export interface Topics {
    topic: string;
    to: string;
    path: string;
    Component: () => JSX.Element;
}

// export const rot = {
//     1: {
//         path: 'unidad/1',
//         to: "/unidad/1",
//         Component: Unidad1,
//         name: 'Unidad 1'
//     },
// }

export const routes: Routes[] = [
    {
        path: 'unidad/1/*',
        to: "/unidad/1",
        Component: UnidadComponent,
        name: 'Unidad 1',
        topics: [
            {
                topic: 'Composicion de Movimiento Perpendiculares',
                path: 'movimiento-perpendicular',
                to: "/unidad/1/movimiento-perpendicular",
                Component: MovimientoPerpendiculares,
            },
            {
                topic: 'Composición de dos MRU Perpendiculares',
                path: 'mru-perpendicular',
                to: "/unidad/1/mru-perpendicular",
                Component: MRUPerpendicular,
            },
            {
                topic: 'Movimiento Circular Uniforme',
                path: 'movimiento-circular-uniforme',
                to: "/unidad/1/movimiento-circular-uniforme",
                Component: MovimientoCircular,
            }
        ]
    },
    {
        path: 'unidad/2/*',
        to: "/unidad/2",
        Component: UnidadComponent,
        name: 'Unidad 2',
        topics: [
            {
                topic: 'Tipos de Fuerza',
                path: 'tipos-de-fuerza',
                to: "/unidad/2/tipos-de-fuerza",
                Component: TiposFuerza,
            },
            {
                topic: 'Interacciones de contacto',
                path: 'interacciones-de-contacto',
                to: "/unidad/2/interacciones-de-contacto",
                Component: MovimientoPerpendiculares
            }
        ]
    },
    {
        path: 'unidad/3/*',
        to: "/unidad/3",
        Component: UnidadComponent,
        name: 'Unidad 3',
        topics: [
            {
                topic: 'Composición de dos MRU Perpendiculares',
                path: 'mru-perpendicular',
                to: "/unidad/3/mru-perpendicular",
                Component: MovimientoPerpendiculares,
            },
        ]
    },
    {
        path: 'unidad/4/*',
        to: "/unidad/4",
        Component: MovimientoPerpendiculares,
        name: 'Unidad 4',
        topics: []
    },
    {
        path: 'unidad/5/*',
        to: "/unidad/5",
        Component: MovimientoPerpendiculares,
        name: 'Unidad 5',
        topics: []
    },
    {
        path: 'unidad/6/*',
        to: "/unidad/6",
        Component: MovimientoPerpendiculares,
        name: 'Unidad 6',
        topics: []
    },
]