import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import RootGirgitton from './pages/Girgitton/Root.jsx'
import Menu from './pages/Girgitton/Menu.jsx'
import { Provider } from 'react-redux'
import { persiststore, store } from './store/store.js'
import '@ant-design/v5-patch-for-react-19';
import Clients from './pages/Girgitton/Clients.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import Oshpaz from './pages/Dashbord/Oshpaz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<App />}>
          <Route path='/oshpaz' element={<Oshpaz/>} />
          <Route path='/girgitton' element={<RootGirgitton/>} />
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/client/:id' element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
