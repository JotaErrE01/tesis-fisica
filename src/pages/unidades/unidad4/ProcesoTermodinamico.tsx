import entropiaIMG from '../../../images/entropia.jpg';


export const ProcesoTermodinamico = () => {

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Espontaneidad Proceso Termodinamico</h1>

      <div className="leading-loose">
        <div className="flex flex-col mb-5 gap-5">
          <div>
            <div
              className="flex lg:flex-row flex-col gap-5"
            >
              <p className="flex-[60%]">
                El flujo de calor del cuerpo de menor temperatura hacia el de mayor temperatura (como en el supuesto de la sopa) y la conversión total de calor en trabajo (como en el supuesto de la piedra) cumplirían el primer principio de la termodinámica. Sin embargo, estos fenómenos nunca ocurren en la realidad.
                Los procesos reales o naturales ocurren espontáneamente en un sentido, mientras que el sentido opuesto requiere alguna acción adicional o es imposible.
                Ademas, todos los procesos reales son irreversibles.
              </p>

              <div className="mb-5 lg:flex-[40%] lg:my-0">
                <img className="w-full rounded mx-auto md:w-2/5 lg:w-auto" src="https://enfisica.com/wp-content/uploads/Temodin%C3%A1mica-leyes-y-procesos-e1595356305479.jpg" alt="Energia Mecanica" />
              </div>
            </div>

            <p>
              Los procesos irreversibles se caracterizan porque los estados intermedios por los que pasa el sistema no son de equilibrio. Los procesos que tienen lugar de forma rápida son irreversibles; por ejemplo, una explosión, un globo que se deshincha cuando lo soltamos sin haberlo anudado, etc.
            </p>
          </div>

          <div>
            <h2
              className="font-bold text-2xl my-5"
            >Entropia</h2>

            <div className="lg:grid lg:grid-cols-2 gap-5">
              <p className="">
                Los procesos espontáneos se caracterizan porque en el estado final el sistema tiene menor capacidad de producir trabajo útil que en el estado inicial. Se dice que la energía se ha conservado, pero que ha perdido calidad.
                Para cuantificar la pérdida de la calidad asociada a las transformaciones energéticas, se define una magnitud extensiva denominada entropía, S: Cuanto más ordenadas están la materia y la energía de un sistema, menor es su entropía. Así pues, en general, un sólido tiene menos entropía que un líquido y este tiene menos entropía que un gas.
              </p>

              <div className="my-5 lg:my-0">
                <img className="mx-auto" src={entropiaIMG} alt="Entropia" />
              </div>


              <p
                className="col-span-2"
              >
                La entropía de un sistema no depende solo de la temperatura, sino también de otras variables termodinámicas como, por ejemplo, el volumen.
                El cálculo de la entropía de un sistema es muy complicado. En cambio, la variación de entropía de un proceso se puede calcular con esta expresión: S = Qrev/T
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
