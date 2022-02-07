import { useState } from 'react';
import { Aside } from './Aside';
import { NavBar } from './Navbar';
import atomSvg from '../svgs/atom-svgrepo-com.svg';

export const NavigationLayout = () => {

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
        id="ico"
        className="rounded-full ml-5 mt-5 animate__animated animate__shakeX animate__slow"
      >
        <img
          className="hover:cursor-pointer w-10 rotate-180"
          src={'https://www.svgrepo.com/show/45548/magnet.svg'}
          onClick={() => {
            setVisible(true);
          }}
          alt="Atomo"
        />
      </div>

      <div className="flex-1">
        <NavBar />
      </div>
    </div>
  )
}
