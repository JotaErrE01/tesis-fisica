import { UnidadComponent } from '../pages/unidades/UnidadComponent';
import { JuegosComponent } from '../pages/juegos/JuegosComponent';

import {
    MovimientoPerpendiculares, 
    MRUPerpendicular, 
    MovimientoCircular,
    TiposFuerza,
    InteraccionContacto,
    EnergiaPotencial,
    EnergiaMecanica,
    DilatacionTermica,
    ProcesoTermodinamico,
    CorrienteElectrica,
    LeyOHM,
    MovimientoVibratorio,
    EnergiaCinetica,
} from '../pages/unidades';


interface Routes {
    id: string;
    path: string;
    to: string;
    Component: (props: ComponentProps) => JSX.Element;
    name: string;
    topics: Topics[];
    iframe?: string;
}

interface ComponentProps {
    topics: Topics[];
    iframe: string | undefined;
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
        id: 'unidad',
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
        id: 'unidad',
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
                Component: InteraccionContacto,
            }
        ]
    },
    {
        id: 'unidad',
        path: 'unidad/3/*',
        to: "/unidad/3",
        Component: UnidadComponent,
        name: 'Unidad 3',
        topics: [
            {
                topic: 'Energía Potencial',
                path: 'mru-energiaPotencial',
                to: "/unidad/3/mru-energiaPotencial",
                Component: EnergiaPotencial,
            },
            {
                topic: 'Energía Mecánica',
                path: 'mru-energiaMecanica',
                to: "/unidad/3/mru-energiaMecanica",
                Component: EnergiaMecanica,
            },
        ]
    },
    {
        id: 'unidad',
        path: 'unidad/4/*',
        to: "/unidad/4",
        Component: UnidadComponent,
        name: 'Unidad 4',
        topics: [
            {
                topic: 'Dilatación Térmica',
                path: 'mru-dilatacionTermica',
                to: "/unidad/4/mru-dilatacionTermica",
                Component: DilatacionTermica,
            },
            {
                topic: 'Espontaneidad y Procesos Termodinámicos',
                path: 'mru-procesosTermodinamicos',
                to: "/unidad/4/mru-procesosTermodinamicos",
                Component: ProcesoTermodinamico,
            },
        ]
    },
    {
        id: 'unidad',
        path: 'unidad/5/*',
        to: "/unidad/5",
        Component: UnidadComponent,
        name: 'Unidad 5',
        topics: [
            {
                topic: 'Corriente Eléctrica',
                path: 'mru-corrienteElectrica',
                to: "/unidad/5/mru-corrienteElectrica",
                Component: CorrienteElectrica,
            },
            {
                topic: 'Ley de OHM',
                path: 'mru-leyOHM',
                to: "/unidad/5/mru-leyOHM",
                Component: LeyOHM,
            },
        ]
    },
    {
        id: 'unidad',
        path: 'unidad/6/*',
        to: "/unidad/6",
        Component: UnidadComponent,
        name: 'Unidad 6',
        topics: [
            {
                topic: 'Movimiento Vibratorio Armónico Simple',
                path: 'mru-movimientoVibratorio',
                to: "/unidad/6/mru-movimientoVibratorio",
                Component: MovimientoVibratorio,
            },
            {
                topic: 'Energía Cinética',
                path: 'mru-energiaCinetica',
                to: "/unidad/6/mru-energiaCinetica",
                Component: EnergiaCinetica,
            },
        ]
    },
    {
        id: 'juegos',
        path: 'juegos/1',
        to: "/juegos/1",
        Component: JuegosComponent,
        name: 'Juego 1',
        topics: [],
        iframe: '1'
    },
    {
        id: 'juegos',
        path: 'juegos/2',
        to: "/juegos/2",
        Component: JuegosComponent,
        name: 'Juego 2',
        topics: [],
        iframe: '2'
    },
    {
        id: 'juegos',
        path: 'juegos/3',
        to: "/juegos/3",
        Component: JuegosComponent,
        name: 'Juego 3',
        topics: [],
        iframe: '3'
    },
]