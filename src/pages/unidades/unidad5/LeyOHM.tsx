import ohmIMG from '../../../images/ohm.png';
import resistenciaIMG from '../../../images/resistencia.gif';
import voltajeIMG from '../../../images/voltaje.gif';
import formulaIMG from '../../../images/formula.jpg';
import circuitoIMG from '/src/images/cicuito.jpg';

export const LeyOHM = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Ley de OHM</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-5">
          <div>
            <p>
              La Ley de Ohm relaciona las magnitudes de voltaje, resistencia e intensidad de la siguiente manera. Su enunciado es el siguiente:
            </p>

            <img className="w-4/5 mx-auto my-5 rounded" src={ohmIMG} alt="Corriente" />

            <p>
              Con esta expresión vas a ser capaz de calcular en un circuito una magnitud a partir de las otras dos. Para calcular la intensidad calculamos directamente la fracción anterior.
              Para calcular el voltaje, vamos a deshacer la fracción, pasando R que está dividiendo al otro lado de la igualdad multiplicando. Nos queda:
            </p>

            <img className="mx-auto my-5" src={voltajeIMG} alt="voltaje" />

            <p>
              Ahora, si queremos calcular R, en la expresión anterior pasamos la I que está multiplicando al otro lado de la igualdad dividiendo, aislando así R. Nos queda:
            </p>

            <img className="mx-auto my-5" src={resistenciaIMG} alt="resistencia" />

            <p>
              Si se conocen dos de estos valores, los técnicos pueden reconfigurar la ley de Ohm para calcular el tercero. Simplemente, se debe modificar la pirámide de la siguiente manera:
            </p>

            <img className="mx-auto my-5" src={formulaIMG} alt="formula general" />


            <p>
              <span className="font-bold">Ejemplo:</span> se conocen la tensión (E) y la resistencia (R).
              ¿Cuál es la corriente en el circuito?
            </p>

            <img className="mx-auto" src={circuitoIMG} alt="circuito" />

            <p>
              I = E/R = 12 V/6 Ω = 2 A
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
