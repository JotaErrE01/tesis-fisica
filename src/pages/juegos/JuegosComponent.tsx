

interface Props {
  iframe: string | undefined;
}

export const JuegosComponent = ({ iframe }: Props) => {
  return (
    <div
      className="mx-auto container mt-10 px-5 flex overflow-hidden gap-5 justify-center items-center"
    >
      <h1>Aqui va el iframe del game {iframe}</h1>
    </div>
  )
};
