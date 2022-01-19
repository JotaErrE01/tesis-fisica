import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <div className="container mx-auto mt-2 pr-2">
        <ul className="p-5 text-2xl font-semibold flex justify-evenly flex-wrap gap-5  border-4 border-indigo-600 shadow-sm shadow-indigo-500 rounded-xl">
          <NavLink
            className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600" }`}
            to="/unidades/1"
          >Unidad 1</NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600"}`}
            to="/unidades/2"
          >Unidad 2</NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600"}`}
            to="/unidades/3"
          >Unidad 3</NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600"}`}
            to="/unidades/4"
          >Unidad 4</NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600"}`}
            to="/unidades/5"
          >Unidad 5</NavLink>
          <NavLink
            className={({ isActive }) => `hover:text-purple-600 ${isActive && "text-purple-600"}`}
            to="/unidades/6"
          >Unidad 6</NavLink>
        </ul>
      </div>     
  )
}


{/* <div className="container mx-auto rounded outline outline-offset-0 outline-emerald-500 mt-2 bg-orange-200"> */}
      {/* <div className="container mx-auto rounded mt-2 bg-gradient-to-tr from-blue-600 to-purple-600 via-pink-500 p-1">
        <ul className="text-2xl rounded font-bold flex justify-evenly p-5 bg-white">
          <NavLink 
          className="bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500" to="/"
          >Home</NavLink>
          <NavLink className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500" to="/">Home</NavLink>
          <NavLink className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500" to="/">Home</NavLink>
          <NavLink className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500" to="/">Home</NavLink>
        </ul>
      </div> */}