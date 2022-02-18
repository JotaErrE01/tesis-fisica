import formulaIMG from '/src/images/formulaPeriodico.gif';


export const MovimientoVibratorio = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Movimiento Periódico</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-2">
          <div className="basis-3/5">
            <p>
              Un movimiento periódico es aquel que se repite a intervalos iguales de tiempo; es decir, todas las magnitudes del movimiento toman el mismo valor cada cierto tiempo. Se denomina período al tiempo que tarda en producirse una oscilación completa, al tiempo que tarda en repetirse el movimiento. Se representa por la letra T y se mide en segundos.
              Se llama frecuencia al número de oscilaciones completas (ciclos) que se realizan en un segundo. Se representa por la letra f y se mide en ciclos por segundo (s-1) o herzio (Hz).
              <img className="inline-block ml-5" src={formulaIMG} alt="formula movimiento periodico" />
            </p>
          </div>

          <div className="basis-2/5">
            <img className="rounded my-5 lg:my-0 h-full" src="/mvPerpendicular.png" alt="Corriente" />
          </div>
        </div>

        <h3 className="font-bold text-2xl text-center mb-5">Movimiento Oscilatorio Vibratorio</h3>
        <div className="mb-5">
          <div>
            <p>
              Movimiento vibratorio es el movimiento periódico en el que el móvil oscila en torno a una posición de equilibrio estable moviéndose entre dos posiciones extremas.
              Se denomina amplitud de la vibración al desplazamiento entre el punto de equilibrio y las posiciones extremas. Se representa por la letra A
              Ejemplos: resorte elástico, lamina de acero y péndulo
              En toda oscilación mecánica intervienen dos factores:
            </p>

            <ol className="list-decimal my-2">
              <li>
                <p>
                  Una fuerza que está dirigida siempre hacia la posición de equilibrio.
                </p>
              </li>

              <li>
                <p>
                  La inercia del cuerpo sobre el que actúa la fuerza.
                </p>
              </li>
            </ol>

            <p>La fuerza empuja al cuerpo hacia la posición de equilibrio estable y su inercia le obliga a “sobrepasar” dicha posición.</p>
          </div>
        </div>
      </div>
    </div>
  )
};
