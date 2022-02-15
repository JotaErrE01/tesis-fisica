import { useState } from 'react';
import { Aside } from './Aside';
import { NavBar } from './Navbar';
import { useLocation } from 'react-router-dom';

export const NavigationLayout = () => {

  const [visible, setVisible] = useState(false);
  const [animationRuning, setAnimationRuning] = useState(true);
  const { pathname } = useLocation();
  const currentPath = pathname.split('/')[1];

  return (
    <div
      className="flex gap-5 md:flex-col md:gap-0"
    >

      <Aside
        setVisible={setVisible}
        visible={visible}
        animationRuning={animationRuning}
        setAnimationRuning={setAnimationRuning}
      />
      {/* {
        visible &&
      } */}

      <div
        id="ico"
        className="rounded-full ml-5 mt-5 animate__animated animate__shakeX animate__slow"
      >
        <img
          className="hover:cursor-pointer w-10 rotate-180"
          src={'https://www.svgrepo.com/show/45548/magnet.svg'}
          onClick={() => {
            setVisible(true);
            setAnimationRuning(false);
          }}
          alt="Atomo"
        />
      </div>

      <div className={`flex-1 ${ currentPath === 'inicio' || currentPath === 'glosario' ? 'hidden' : '' }`}>
        <NavBar />
      </div>
    </div>
  )
}
