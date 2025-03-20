import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import RootGirgitton from './pages/Girgitton/Root.jsx'
import Menu from './pages/Girgitton/Menu.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<App />}>
          <Route path='/oshpaz' element={<h1>Oshpaz</h1>} />
          <Route path='/girgitton' element={<RootGirgitton/>} />
          <Route path='/client/:id' element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
