import React from 'react'
import {BrowserRouter, Route, Routes as Rotas} from 'react-router-dom'
import Home from '../pages/Home'
import Projetos from '../pages/Projetos'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Habilidades from '../pages/Habilidades'
import Header from '../Header'
import Certificados from '../pages/Certificados'
const Routes = () => {
  return (
   <BrowserRouter>
    <Header/>
   <Rotas>
    <Route path='/' element={<Home/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/habilidades' element={<Habilidades/>}/>
    <Route path='/projetos' element={<Projetos/>}/>
    <Route path='/contato' element={<Contato/>}/>
    <Route path='/certificados' element={<Certificados/>}/>
   </Rotas>
   </BrowserRouter>
  )
}

export default Routes