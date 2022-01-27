import dilatacionIMG from '../../../images/dilatacion.png';
import cuadroIMG from '../../../images/dilatacionCuadro.png';
import formulaIMG from '../../../images/formulaDilatacion.png';



export const DilatacionTermica = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Dilatación Térmica</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-5">
          <div>
            <p>
              La dilatación térmica es el proceso por el cual los cuerpos aumentan su volumen debido a su temperatura. Cuando un cuerpo aumenta su temperatura, las partículas se mueven más deprisa, por lo que necesitan más espacio para desplazarse. Es por ello que el cuerpo necesita aumentar su volumen. Los sólidos pueden experimentar distintos tipos de dilataciones terminas: Los líquidos solo tienen dilatación cúbica. Su coeficiente de dilatación se designa por K y es unas cien veces mayor que el de los sólidos.
            </p>

            <div className="lg:w-4/5 mx-auto my-5">
              <img className="rounded mx-auto lg:w-auto" src={dilatacionIMG} alt="Dilatacion" />
            </div>

            <p>
              Los gases solo tienen dilatación cúbica. Al ser muy compresibles, el coeficiente de dilatación depende del tipo de proceso en el que aumenta la temperatura.
              Para un proceso a presión constante, el coeficiente de dilatación cúbica, g, es prácticamente constante para todos los gases.
            </p>

            <div className="lg:w-4/5 mx-auto my-5">
              <img className="rounded mx-auto lg:w-auto" src={formulaIMG} alt="Formula" />
            </div>

            <div className="lg:w-4/5 mx-auto my-5">
              <img className="rounded mx-auto lg:w-auto" src={cuadroIMG} alt="Dilatacion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
