import { BrowserRouter as Router} from 'react-router-dom';
import ConfigRoutes from './ConfigRoutes';
import Menu from './components/Menu/index';
import Footer from './components/Footer/index';



export default function App() {
  return (
    <Router>
        <Menu />
        <ConfigRoutes />
        <Footer />
    </Router>
  )
}
