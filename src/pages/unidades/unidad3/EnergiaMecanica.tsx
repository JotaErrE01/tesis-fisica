


export const EnergiaMecanica = () => {
  return (
    <div>
      <img className="mx-auto rounded shadow-gray-500 h-[20rem] shadow-md" src="https://museovirtual.csic.es/salas/vida/swf/E_potencial_en_E_cinetica.gif" alt="Movimiento Perpendicular" />
      <p className="text-center mb-10">Autor: Museo Virtual</p>

      <h1 className="font-bold text-2xl text-center mb-10">Energía Mecánica</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-5">
          <div>
            <p>
              Sabemos que una maceta que es elevada desde el nivel de la calle hasta la repisa de una ventana almacena energía potencial gravitatoria en su nueva posición. Imaginemos ahora que acercamos la maceta al borde y la repisa ya no la puede sostener.
              La maceta caerá hasta el suelo y puede comprobarse, mediante las ecuaciones del MRUA, que toda su energía potencial gravitatoria se transformará en energía cinética justo en el instante anterior a su impacto contra él.
              Supongamos ahora que unimos una canica a un muelle y, a continuación, comprimimos este. Al soltarlo, toda su energía potencial elástica se transforma en energía cinética de la canica.
            </p>

            <div className="w-5/4 lg:w-2/5 mx-auto my-5">
              <img className="w-full rounded mx-auto md:w-2/5 lg:w-auto" src="https://www.electrontools.com/Home/WP/wp-content/uploads/2018/11/asd-1024x654.jpg" alt="Energia Mecanica" />
              <p className="text-center mb-10">Autor: Electroontools</p>
            </div>

            <p>
              Estos dos ejemplos nos permiten ver cómo la energía cinética y los distintos tipos de energía potencial están íntimamente relacionados. Por ello, se agrupan bajo el concepto de energía mecánica (Em).
              La energía mecánica de un cuerpo es la suma de su energía cinética y de todas sus energías potenciales (gravitatoria, elástica, eléctrica, etc.).
              La energía total de un cuerpo es la suma de la energía mecánica que tiene a nivel macroscópico y de la energía mecánica de sus partículas recibe el nombre de energía interna.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
