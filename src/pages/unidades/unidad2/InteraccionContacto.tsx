

export const InteraccionContacto = () => {
  return (
    <div>
      <img className="mx-auto rounded shadow-gray-500 shadow-md" src="https://2.bp.blogspot.com/-TNgOC8h1LdQ/VxtswCUFYtI/AAAAAAAAAtY/Tq0Fp6hsbe8e_9ovxJ6yKWPPm7fftm8vgCLcB/s400/Efecto%2Bdin%25C3%25A1mico%2Bde%2Bla%2Bfuerza.jpg" alt="Movimiento Perpendicular" />
      <p className="text-center mb-10">Autor: GIPHY</p>

      <h1 className="font-bold text-2xl text-center mb-10">Interacciones de Contacto</h1>

      <div className="leading-loose">
        <div className="flex gap-5 md:flex-row flex-col">
          <p className="flex-[70%]">
            La fuerza normal, tiene un origen microscópico, concretamente en una interacción electro-magnética entre las superficies de contacto entre dos cuerpos. Estas superficies sufren una interacción entre sus electrones, los cuales se rechazan entre sí, por acción de las fuerzas de Coulomb. De esta forma cuando ponemos un libro sobre una mesa horizontal, cerca de la superficie terrestre, las dos superficies se rechazan, pero el libro estará sometido también a una interacción gravitacional, por lo cual quedará en equilibrio.
            Si este escenario tuviese lugar en el espacio exterior, es decir en micro gravedad, tanto la mesa como el libro puestos en contacto, se separarían.
            Fuerza normal (plano inclinado) La fuerza normal tiene el mismo valor y sentido contrario que la componente del peso perpendicular a la superficie.
          </p>

          <div className="flex-[30%] mb-5">
            <img className="md:h-[15rem] h-auto mx-auto" src='/interaccionContacto.png' alt="Interacciones de Contacto" />
            <p className="text-center mb-10">Autor: Libro de 2do Bachillerato Física</p>
          </div>

        </div>

        <ul className="list-disc mb-5">
          <li>
            <p>
              La mesa es quien actúa sobre el libro por medio de la fuerza normal, como reacción a la acción del libro sobre ella. Debemos tener en cuenta que el peso y la normal no son par de acción y reacción; pero si lo son la fuerza que hace la superficie de la mesa sobre cuerpo, y la fuerza que hace el cuerpo sobre la mesa.
            </p>
          </li>

          <li>
            <p>
              Cuando la superficie de apoyo es horizontal y sobre el cuerpo no actúa ninguna fuerza vertical más que su peso y la fuerza normal, el valor de ambas fuerzas coincide. Si el cuerpo se encuentra sobre un plano inclinado, el valor de la fuerza normal no es igual a su peso.
            </p>
          </li>

          <li>
            <p>
              Si no existiese la fuerza normal, el cuerpo atravesaría la superficie sobre la que se apoya, debido a la acción de la gravedad.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
};
