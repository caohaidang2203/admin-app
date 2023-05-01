import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Productlist from './pages/Productlist';
import Brandlist from './pages/Brandlist';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcategory from './pages/Addcategory';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/reset-password' element={<Resetpassword />}></Route>
        <Route path='/forgot-password' element={<Forgotpassword />}></Route>
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog' element={<Addblog />} />
          <Route path='blog-category-list' element={<Blogcatlist />} />
          <Route path='blog-category' element={<Addblogcat />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='list-product' element={<Productlist />} />
          <Route path='product' element={<Addproduct />} />
          <Route path='list-brand' element={<Brandlist />} />
          <Route path='brand' element={<Addbrand />} />
          <Route path='list-color' element={<Colorlist />} />
          <Route path='color' element={<Addcolor />} />
          <Route path='list-category' element={<Categorylist />} />
          <Route path='category' element={<Addcategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
