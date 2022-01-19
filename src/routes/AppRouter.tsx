import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import { Unidad1 } from '../pages/unidades/Unidad1';


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DashboardRoutes />} />

        <Route path="videos" element={<Unidad1 />} >
          <Route path=":id" element={<Unidad1 />} />
        </Route>
      </Routes>
    </Router >
  )
}
