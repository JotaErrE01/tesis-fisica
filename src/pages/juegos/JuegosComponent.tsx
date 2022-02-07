import { ComponentProps } from '../../routes/routes';

export const JuegosComponent = ({ iframe, title }: ComponentProps) => {
  return (
    <div
      className="mx-auto container mt-10 px-5 flex overflow-hidden gap-5 justify-center items-center flex-col h-screen"
    >
      <h1
        className="text-center text-2xl font-bold"
      >{ title }</h1>

      <iframe 
        className="rounded lg:w-4/5 my-5 w-full h-full bg-gray-700" 
        frameBorder="0" 
        src={iframe || ''}
        ></iframe>
    </div>
  )
};
