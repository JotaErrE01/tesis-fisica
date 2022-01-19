

export const Unidad1 = () => {
  return (
    <div
      className="mx-auto container mt-10 px-5 sm:px-0"
    >
      <h1
        className="text-2xl font-bold text-center mb-5"
      >Medida: Magnitudes y Unidades</h1>

      <div 
        className="flex flex-col lg:flex-row gap-5 items-center"
      >
        <div
          className="w-auto lg:w-[150rem] flex justify-center my-5 lg:order-1"
        >
          <img src="https://lookingforwonders.files.wordpress.com/2013/04/tabla1.gif" alt="" />
        </div>

        <div
          className="leading-relaxed mb-5"
        >
        <p>
          Las magnitudes pueden clasificarse en escalares y vectoriales.
          Una magnitud es escalar si queda perfectamente determinada mediante un número y su correspondiente unidad. Por ejemplo, el tiempo, la temperatura y la masa son magnitudes escalares.
          Una magnitud es vectorial si, para su completa determinación,
          además de una cantidad numérica y su unidad correspondiente,
          son necesarios otros elementos, como su dirección y su sentido. Por
          ejemplo, la velocidad y la fuerza son magnitudes vectoriales.
          En 1960, científicos de todo el mundo se reunieron en Ginebra para
          acordar el llamado Sistema Internacional de Unidades (SI), basado en el Sistema Métrico Decimal.
        </p>
        <p>
          El SI establece siete magnitudes fundamentales, a partir de las cuales se pueden expresar todas las demás, llamadas derivadas, mediante expresiones matemáticas. De
          igual forma, la unidad de una magnitud cualquiera puede expresarse en función de las unidades de las magnitudes fundamentales.
          La relación que se establece entre una magnitud derivada y las magnitudes fundamentales recibe el nombre de ecuación de dimensión.
          La dimensión de cualquier magnitud se representa indicando dicha
          magnitud entre corchetes.
        </p>
        </div>

      </div>

    </div>
  )
}
