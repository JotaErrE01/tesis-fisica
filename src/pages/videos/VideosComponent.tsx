import { ComponentProps } from '../../routes/routes';


export const VideosComponent = ({ title, url }: ComponentProps) => {
  return (
    <div
      className="mx-auto container px-5 flex overflow-hidden gap-5 justify-start items-center flex-col"
    >
      <h1
        className="text-center text-2xl font-bold mt-10"
      >{title}</h1>

      <iframe  
        className="rounded lg:w-4/5 my-5 w-full bg-gray-700 h-[20rem] md:h-auto md:aspect-video" 
        src={url || ''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
      ></iframe>
    </div>
  )
};
