import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/home/Home'
import {Products} from './pages/products/Products'
import {User} from './pages/user/User'
import {NotRegisteredUser} from './pages/notregistered/NotRegisteredUser'

const UserLogged = ({children}) => {
  return children({isAuth:false})
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Products/>}/>
      </Routes>
      <UserLogged>
        {
          ({isAuth}) => isAuth
          ? 
          <Routes>
            <Route path='/user' element={<User/>}/>
          </Routes>
          :
          <Routes>
            <Route path='/user' element={<NotRegisteredUser/>}/>
          </Routes>
        }
      </UserLogged>
    </BrowserRouter>
  );
}

export default App;
