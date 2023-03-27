import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import Create from './pages/Create'
// import Login from './pages/Login'
// import Navigation from '../src/components/Navigation'
import { indexLoader, showLoader } from './loaders'
import {
  createAction,
  updateAction,
  deleteAction,
} from './actions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" element={<Show />} loader={showLoader} />
        <Route path="create" element={<Create />} action={createAction} />
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
        {/* <Route path="login" element={<Login />} action={loginAction} /> */}
      </Route>
    </>
  )
)

export default router
