import { ComponentProps } from '../../routes/routes';

export const JuegosComponent = ({ url, title, gameDescription }: ComponentProps) => {
  return (
    <div
      className="mx-auto container px-5 flex overflow-hidden gap-5 justify-start items-center flex-col h-screen pb-10"
    >
      <h1
        className="text-center text-2xl font-bold mt-5"
      >{ title }</h1>

      <iframe 
        className="rounded lg:w-4/5 my-5 w-full h-full bg-gray-700" 
        frameBorder="0" 
        src={url || ''}
        ></iframe>

        <p
          className="text-start text-xl w-full lg:w-4/5"
        >
          {
            gameDescription
          }
        </p>
    </div>
  )
};
