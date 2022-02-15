import { useEffect } from "react";
import { glosario } from "../data/glosario";

export const Glosario = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="h-screen flex flex-col gap-10 mx-auto container">
      <h1 className="text-4xl font-bold text-center">Glosario 📚</h1>

      <div className="flex flex-col gap-10 w-4/5 md:w-full mx-auto">
        {
          glosario.map(({ palabra, definicion }) => (
            <div key={palabra} className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">{palabra}:</h2>
              <p className="text-xl">{definicion}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};
