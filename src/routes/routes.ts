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
import { VideosComponent } from '../pages/videos/VideosComponent';


interface Routes {
    id: string;
    path: string;
    to: string;
    Component: (props: ComponentProps) => JSX.Element;
    name: string;
    mainTopic?: string;
    topics: Topics[];
    url: string | null;
    title?: string;
    gameDescription?: string;
    title2?: string;
    url2?: string;
}

export interface ComponentProps {
    topics: Topics[];
    mainTopic?: string;
    url: string | null;
    title?: string;
    title2?: string;
    url2?: string;
    // gameDescription?: string;
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
        url: null,
        topics: []
    },
    {
        id: 'unidad',
        path: 'unidad/1/*',
        to: "/unidad/1",
        Component: UnidadComponent,
        name: 'Unidad 1',
        mainTopic: 'El Movimiento',
        url: null,
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
        url: null,
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
        url: null,
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
        url: null,
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
        url: null,
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
        url: null,
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
        id: 'videos',
        path: 'videos/1',
        to: "/videos/1",
        Component: VideosComponent,
        topics: [],
        name: 'Unidad 1',
        title: 'Movimiento Perpendicular',
        url: 'https://www.youtube.com/embed/bvS9PddKViA'
    },
    {
        id: 'videos',
        path: 'videos/2',
        to: "/videos/2",
        Component: VideosComponent,
        topics: [],
        name: 'Unidad 2',
        title: 'Tipos de Fuerza',
        url: 'https://www.youtube.com/embed/CDCNIL0Ozcg'
    },
    {
        id: 'videos',
        path: 'videos/3',
        to: "/videos/3",
        Component: VideosComponent,
        topics: [],
        name: 'Unidad 3',
        title: 'Energía Potencial',
        url: 'https://www.youtube.com/embed/KLn7Imldnww'
    },
    {
        id: 'videos',
        path: 'videos/4',
        to: "/videos/4",
        Component: VideosComponent,
        topics: [],
        name: 'Unidad 4',
        title: 'Dilatación Térmica',
        url: 'https://www.youtube.com/embed/CZSQZNyREU8'
    },
    {
        id: 'videos',
        path: 'videos/5',
        to: "/videos/5",
        Component: VideosComponent,
        topics: [],
        name: 'Unidad 5',
        title: 'Energia Eléctrica',
        url: 'https://www.youtube.com/embed/f5_r_qKADRU',
        title2: 'Ley de OHM',
        url2: 'https://www.youtube.com/embed/7VuJgd060jA'
    },
    {
        id: 'videos',
        path: 'videos/6',
        to: "/videos/6",
        Component: VideosComponent,
        topics: [],
        name: 'Unidad 6',
        title: 'Movimiento Periódico',
        url: 'https://www.youtube.com/embed/xCdLxIfPnAc'
    },
    {
        id: 'juegos',
        path: 'juegos/1',
        to: "/juegos/1",
        Component: JuegosComponent,
        name: 'Froggy Saltarín',
        topics: [],
        url: 'https://es.educaplay.com/juego/11600813-fisica_quiz.html',
        title: 'Ayuda a Froggy a cruzar a salvo con lo aprendido en la unidad 1 y 2 🐸',
    },
    {
        id: 'juegos',
        path: 'juegos/2',
        to: "/juegos/2",
        Component: JuegosComponent,
        name: 'Crucigrama',
        topics: [],
        url: 'https://www.educaplay.com/game/11601253-crucigrama.html',
        title: 'Completa el crucigrama con lo aprendido en la unidad 3 y 4 🤔',
    },
    {
        id: 'juegos',
        path: 'juegos/3',
        to: "/juegos/3",
        Component: JuegosComponent,
        name: 'Juego de Memoria',
        topics: [],
        url: 'https://www.educaplay.com/game/11601316-juego_de_memoria.html',
        title: '¿Tienes Buena Memoria? Relaciona las imágenes con su respectiva imagen acerca de la unidad 5 y 6 🧠',
    },
]
