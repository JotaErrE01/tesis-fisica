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
import { Home } from '../pages/Home';


interface Routes {
    id: string;
    path: string;
    to: string;
    Component: (props: ComponentProps) => JSX.Element;
    name: string;
    mainTopic?: string;
    topics: Topics[];
    iframe: string | null;
    title?: string;
}

export interface ComponentProps {
    topics: Topics[];
    mainTopic?: string;
    iframe: string | null;
    title?: string;
}

export interface Topics {
    topic: string;
    to: string;
    path: string;
    Component: () => JSX.Element;
}

export const routes: Routes[] = [
    {
        id: 'inicio',
        path: 'inicio',
        to: "/inicio",
        Component: Home,
        name: '',
        iframe: null,
        topics: []
    },
    {
        id: 'unidad',
        path: 'unidad/1/*',
        to: "/unidad/1",
        Component: UnidadComponent,
        name: 'Unidad 1',
        mainTopic: 'El Movimiento',
        iframe: null,
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
        iframe: null,
        mainTopic: 'Fuerzas en la Naturaleza',
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
        iframe: null,
        mainTopic: 'Trabajo y energía',
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
        mainTopic: 'Termodinámica',
        iframe: null,
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
        mainTopic: 'Corriente Eléctrica',
        iframe: null,
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
        mainTopic: 'Movimiento Armónico Simple',
        iframe: null,
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
        name: 'Froggy Saltarín',
        topics: [],
        iframe: 'https://www.educaplay.com/game/11353591-fisica_quiz.html',
        title: 'Ayuda a Froggy a Cruzar a Salvo 🐸'
    },
    {
        id: 'juegos',
        path: 'juegos/2',
        to: "/juegos/2",
        Component: JuegosComponent,
        name: 'Crucigrama',
        topics: [],
        iframe: 'https://www.educaplay.com/game/11373002-crucigrama.html',
        title: 'Completa el Crucigrama 🤔'
    },
    {
        id: 'juegos',
        path: 'juegos/3',
        to: "/juegos/3",
        Component: JuegosComponent,
        name: 'Juego de Memoria',
        topics: [],
        iframe: 'https://www.educaplay.com/game/11377685-juego_de_memoria.html',
        title: '¿Tienes Buena Memoria? 🧠'
    },
]