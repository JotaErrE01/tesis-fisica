import { NavBar } from "./components/Navbar"
import { Aside } from './components/Aside';
import { useState } from "react";
import atomSvg from './svgs/atom-svgrepo-com.svg';

function App() {

  const [visible, setVisible] = useState(false);

  return (
    <div
      className="flex gap-5"
    >
      {
        visible &&
        <Aside
          setVisible={setVisible}
          visible={visible}
        />
      }

      <div
        className="rounded-full"
      >
        <img
          className="hover:cursor-pointer rounded-full border-2 border-orange-500 w-12 ml-5 mt-5"
          src={atomSvg}
          onClick={() => {
            setVisible(true);
          }}
          alt="Atom" 
        />
      </div>

      {/* <h1>Hello World</h1> */}

      <div className="flex-1">
        <NavBar />
      </div>
    </div>
  )
}

export default App
