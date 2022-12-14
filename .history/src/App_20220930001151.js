// import logo from './logo.svg';
import './App.css';
import AuthProvider from './Pages/Login/context/AuthProvider';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ForgotPassword from './Pages/Login/ForgotPassword/ForgotPassword';
import CompleteProfile from './Pages/Login/CompleteProfile/CompleteProfile';
import ChangePassword from './Pages/Login/ChangePassword/ChangePassword';
import UpdateName from './Pages/Login/UpdateName/UpdateName';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            {/* <Route exact path = '/' element = {<Home></Home>}> </Route> */}
            {/* <Route exact path = '/home' element = {<Home></Home>}> </Route> */}
            {/* <Route exact path = '/about' element = {<About></About>}> </Route> */}
            {/* <Route exact path = '/addService' element = {<AddService></AddService>}> </Route> */}
            {/* <Route exact path = '/manageServices' element = {<ManageServices></ManageServices>}> </Route> */}
            {/* <Route exact path = '/contact' element = {<Contact></Contact>}> </Route> */}
            <Route exact path = '/login' element = {<Login></Login>}> </Route>
            <Route exact path = '/register' element = {<Register></Register>}> </Route>
            <Route exact path = '/forgotpassword' element = {<ForgotPassword></ForgotPassword>}> </Route>

            {/* <Route exact path = '/booking/:serviceId' element = {
              <PrivateRoute>
                <Booking></Booking>
              </PrivateRoute>
            }> </Route> */}

            <Route exact path = '/completeprofile' element = {
              <PrivateRoute>
                <CompleteProfile></CompleteProfile>
              </PrivateRoute>
            }> </Route>

            <Route exact path = '/changepassword' element = {
              <PrivateRoute>
                <ChangePassword></ChangePassword>
              </PrivateRoute>
            }> </Route>

            <Route exact path = '/updatename' element = {
              <PrivateRoute>
                <UpdateName></UpdateName>
              </PrivateRoute>
            }> </Route>

            {/* <Route exact path = '*' element = {<NotFound></NotFound>}> </Route> */}
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;