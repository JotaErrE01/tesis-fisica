


export const TiposFuerza = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Tipos Fuerza</h1>

      <div className="leading-loose">
        <p className="mb-5">
          Dependiendo de si las fuerzas requieren contacto directo o no para manifestarse, podemos clasificarlas en dos grandes tipos:
        </p>

        <ol className="list-disc">
          <li>
            <p><span className="font-bold">Fuerzas de contacto:</span> Aquellas que requieren del contacto directo entre ambos objetos para producirse.</p>
          </li>

          <li>
            <p className="mb-5"><span className="font-bold">Fuerzas a distancia:</span> Aquellas que no necesitan del contacto entre los cuerpos para manifestarse.</p>
          </li>
        </ol>

        <p>
          Esta clasificación debe ser matizada, ya que los objetos están formados por partículas (átomos, moléculas o iones) separadas entre sí. Así, todas las fuerzas entre cuerpos se ejercen, en realidad, entre las partículas que los forman (fuerzas microscópicas), de modo que dos objetos estrictamente nunca estarán en contacto: estas fuerzas ejercen sus efectos a lo largo del espacio.
        </p>

        <p>Todas las fuerzas de la naturaleza se agrupan en las siguientes interacciones fundamentales o son una combinación de ellas:</p>

        <ul className="list-disc mb-5">
          <li>
            <p>
              <span className="font-bold">Interacción nuclear fuerte.</span> Es la más intensa de las cuatro. Es atractiva y de alcance muy pequeño. Mantiene a los protones unidos en el núcleo a pesar de la repulsión electrostática.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Interacción electromagnética.</span> Es cien veces menor que la nuclear fuerte. Es atractiva o repulsiva, y de largo alcance. Es responsable de la impenetrabilidad de los objetos y de la estructura de átomos y moléculas, así como de todas las reacciones químicas y procesos biológicos.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Interacción nuclear débil.</span> Es 105 veces menor que la nuclear fuerte. Es responsable de la desintegración de algunos núcleos y de la producción de radiación calorífica de las estrellas.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Interacción gravitatoria.</span> Es 1039 veces menor que la nuclear fuerte. Se considera la más débil de todas. Es atractiva y de largo alcance, y responsable de la estructura del universo, de las mareas, del movimiento de los satélites artificiales.
            </p>
          </li>
        </ul>
      </div>

      <img src="https://www.enterarse.com/img-grficos_enterarse_-_2020-01-30t094657.416-20200130095005.png" alt="" className="mb-5 rounded lg:w-4/5 mx-auto" />
    </div>
  )
};
