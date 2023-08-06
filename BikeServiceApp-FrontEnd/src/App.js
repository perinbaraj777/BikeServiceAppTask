import logo from './logo.svg';
import './App.css';
//importing bootstrap to use bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//imported react router dom to also users to toggle between pages
import {BrowserRouter,Routes,Route} from 'react-router-dom';   
import {Menu} from './components/menu';
import {Owner} from './components/owner';
import { Customer } from './components/customer';
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={[<Menu/>,<Owner/>]}/>
  <Route path='user' element={[<Menu/>,<Customer/>]}/>
</Routes>
</BrowserRouter>
    
    
    </>
  );
}

export default App;
