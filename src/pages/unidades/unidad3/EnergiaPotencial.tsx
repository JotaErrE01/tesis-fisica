

export const EnergiaPotencial = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Energía Potencial</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-5">
          <div>
            <p>
              Hemos visto cómo a los cuerpos en movimiento les podemos asociar una energía, la energía cinética. Pero, si un cuerpo está en reposo, ¿tiene energía? Como sabemos, la respuesta es que, si el cuerpo en reposo es capaz de producir una transformación en sí mismo o en otro cuerpo, entonces posee energía.
            </p>

            <div className="w-5/4 lg:w-2/5 mx-auto my-5">
              <img className="w-full rounded mx-auto md:w-2/5 lg:w-auto" src="https://i0.wp.com/www.elgencurioso.com/wp-content/uploads/2021/10/ejemplos-energia-potencial.png?fit=1500%2C1000&ssl=1" alt="Energia Potencial" />
            </div>

            <p>
              Esta energía puede deberse al estado o constitución del cuerpo y se denomina energía interna.
              Por ejemplo, un fajo de leña al arder permite cocinar alimentos. O bien, esta energía puede deberse a la posición que ocupa el cuerpo en ese instante y recibe el nombre de energía potencial. Por ejemplo, una maceta colgada del balcón quedará destrozada contra el suelo si la dejamos caer.
              Sin embargo, para que tenga sentido definir una energía potencial Ep asociada a un cuerpo, es necesario que esté en una región del espacio en la que actúe una fuerza conservativa. Vamos a ver qué significa esto:
              Una fuerza es conservativa si el trabajo que ejerce sobre un cuerpo solo depende de las posiciones inicial y final del cuerpo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
