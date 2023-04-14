import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Technology from './Components/Technology';
import Products from './Components/Products';
import Profile from './Components/Profile';
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import Reacts from './Components/Reacts';
import ProductDet from './Components/ProductDet';
import { useContext } from 'react';
import { Auth } from './Components/Contex';
import Login from './Components/Login';
import Addtocard from './Components/Addtocard';

function App() {
  // const {islog} = useContext(Auth)
  // console.log(islog,"saaaa");
  return (
    <div className="App">
      {/* {islog ? <Navbar/>:""} */}
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={islog ? <Home/> : <Login/>} /> */}
        <Route path="/" element={<Home/> } />
        {/* <Route path="/contact" element={islog ? <Contact /> : <Navigate to="/" />} /> */}
        <Route path="/contact" element={ <Contact />} />
        {/* <Route path="/profile" element={islog ? <Profile /> : <Navigate to="/" />} /> */}
        {/* <Route path="/technology" element={islog ? <Technology /> : <Navigate to="/" />} > */}
          {/* <Route path='' element={   <Html/>    }/>
          <Route path='html' element={   <Html/>    }/>
          <Route path='css' element={   <Css/>    }/>
          <Route path='js' element={   <Javascript/>    }/>
          <Route path='react' element={   <Reacts/>    }/>
        </Route> */}
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products" element={islog ? <Products /> : <Navigate to="/" />} /> */}
        <Route path="/productDetail/:id" element={<ProductDet/>} />
        <Route path="/add" element={<Addtocard/>} />
        <Route path="/*" element={<h1 style={{color:"red"}} >No Page Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
