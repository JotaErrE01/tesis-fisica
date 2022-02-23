import { ComponentProps } from '../../routes/routes';


export const VideosComponent = ({ title, url }: ComponentProps) => {
  return (
    <div
      className="mx-auto container px-5 flex overflow-hidden gap-5 justify-center items-center flex-col h-screen"
    >
      <h1
        className="text-center text-2xl font-bold"
      >{title}</h1>

      <iframe  
        className="rounded lg:w-4/5 my-5 w-full bg-gray-700 aspect-video" 
        src={url || ''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      ></iframe>
    </div>
  )
};
