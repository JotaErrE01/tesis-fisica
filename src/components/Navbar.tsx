import { NavLink, useLocation } from "react-router-dom"
import { routes } from '../routes/routes';


export const NavBar = () => {

  const location = useLocation();  

  return (
    <div className="container mx-auto mt-2 pr-2 md:pr-0 md:mt-0 md:mb-5">
        <ul className="p-5 text-xl md:text-2xl font-semibold flex justify-evenly flex-wrap gap-5  border-4 border-indigo-600 shadow-sm shadow-indigo-500 rounded-xl">
          {
            routes.map( ({ id, name, to }) => (
              id === location.pathname.split('/')[1] &&
              <li
                key={to}
              >
                <NavLink 
                  to={to} 
                  className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600" }`}
                >{name}</NavLink>
              </li>
            ) )
          }
        </ul>
      </div>     
  )
}
