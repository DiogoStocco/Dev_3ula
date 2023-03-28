import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Sobre from './pages/sobre'
import Planos from './pages/planos'
import Detalhes from './pages/detalhes';
import { PageNotFound } from './components/pageNotFound';

export default function ConfigRoutes() {
    return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/plano' element={<Planos />}/>
        <Route path='/detalhes/:filme' element={<Detalhes />}/>
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
      
    )
}
