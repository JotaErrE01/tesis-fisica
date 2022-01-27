

export const MRUPerpendicular = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Composición de dos MRU Perpendiculares</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-5">
          <div className="flex-[70%] order-1 lg:-order-none">
            <p>
              Consideremos un barco que está en una orilla del río y que se mueve a velocidad constante hacia la orilla opuesta.
            </p>

            <p className="mb-5">
              El agua del río le comunica una velocidad también constante en dirección perpendicular a la suya propia.
              Para estudiar este movimiento consideramos el sistema de referencia S', que se mueve solidario al río, y el sistema de referencia S, que corresponde a un observador en reposo en la orilla. La figura muestra la situación inicial (t0= 0) en que ambos sistemas coinciden, de forma que tomamos como origen de coordenadas el punto de salida del barco desde la orilla.
              El barco tiene un MRU de velocidad v con respecto al río (S'). A su vez, el río tiene un MRU de velocidad v0 con respecto al observador (S). Las ecuaciones de cada movimiento por separado son:
            </p>
          </div>

          <div className="flex-auto">
            <img className="w-full rounded mx-auto md:w-2/5 lg:w-auto" src="https://aulaenred.ibercaja.es/wp-content/uploads/cinematica2_3_1.png" alt="" />
          </div>
        </div>

        <ol className="list-decimal">
          <li>
            <p>Según el observador (S), la posición de S' en un instante de tiempo t es: x = v0t</p>
          </li>
          <li className="my-5 mb-10">
            <p>Según el sistema de referencia del río (S'), la posición del barco en el instante de tiempo t es: y = v' t.</p>
          </li>
        </ol>
      </div>
    </div>
  )
};
