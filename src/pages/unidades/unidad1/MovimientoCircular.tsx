import mvCirular from '../../../images/movimientoCircular.png';


export const MovimientoCircular = () => {
  return (
    <div>
      <img className="mx-auto w-1/2 rounded shadow-gray-500 shadow-md" src="https://storage.googleapis.com/portaleducativo-net-class-g3p6/biblioteca/contenidos/200624201675.gif" alt="Movimiento Perpendicular" />
      <p className='mb-10 text-center'>Autor: Google Apis</p>


      <h1 className="font-bold text-2xl text-center mb-10">Movimiento Circular</h1>

      <div className="leading-loose mb-5">
        <p>El movimiento circular uniforme es el movimiento cuya trayectoria es circular y su velocidad angular es constante.
        </p>

        <p>
          Un movimiento circular uniforme (m.c.u.)  representa en el eje horizontal (eje x) el tiempo y en el eje vertical la posición angular.
          La posición angular, φ, medida en radianes según unidades del Sistema Internacional (S.I.) aumenta (o disminuye) de manera uniforme con el paso del tiempo. Podemos distinguir dos casos, según la velocidad angular es positiva o negativa:
        </p>

        <img src={mvCirular} alt="movimiento-circular-graph" />
        <p className="center mb-10">Autor: Libro de 2do Bachillerato Física</p>

        <p>
          Como consecuencia de su trayectoria circular y velocidad angular constante, el MCU tiene carácter periódico: se repite con regularidad en el tiempo. Por ello, podemos definir las magnitudes período y frecuencia:
        </p>

        <p>
          El período (T) es el tiempo que tarda un punto de un MCU en describir la circunferencia completa.
          La frecuencia (f) de un MCU es el número de vueltas descritas por unidad de tiempo.
          La unidad del período en el SI es el segundo (s). Y la unidad de la
          frecuencia en el SI es el hercio o hertz (Hz); 1 Hz = 1 s-1
          En el MCU, para R constante, el módulo de la velocidad lineal es constante, pero su dirección varía. Por tanto, no hay aceleración tangencial pero sí aceleración normal (an) o centrípeta dirigida hacia el centro de la circunferencia, que es la responsable del cambio en la dirección de la velocidad.
        </p>
      </div>
    </div>
  )
};
