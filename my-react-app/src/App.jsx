// import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { FaDatabase, FaReact, FaJs, FaHtml5,FaNodeJs } from 'react-icons/fa';
// import { SiPython, SiDjango, SiFlask, SiCss3, SiPostgresql, SiMongodb, SiNumpy, SiFastapi,SiThealgorithms,SiJson,SiGit,SiGithub } from 'react-icons/si';

import Nav1 from './Nav1';
// import Nav from './Nav';// لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف 
// import Sidebar from './Sidebar';
import Footer from './Footer';

// import Python from './Python/Python';
// import Js from './Js/Js';

// import Java from './Java';
// import JavaScript from './JS';
// import Php from './Php';
// import Html from './Html';
// import Compiler from './Compiler';
// import Login from './Login';
// import Register from './Register';
// import Profile from './Profile';
import './App.css';
import './dark_mode.css';
// import {Lessons} from './Lessons.js';
///////////////////////////////////////////////////new
import Home from './components/Home'
// import Register_000 from './components/Register'
// import Login_000 from './components/Login'
// import About_000 from './components/About'
// import Profile_000 from './components/profile'
import MyProfile from './components/MyProfile'
import CertificatePage from './components/CertificatePage';
// import Navbar_000 from './components/Navbar'
// import ProtectedRoute from './components/ProtectedRoutes'
// import PasswordResetRequest from './components/PasswordResetRequest'
// import PasswordReset from './components/PasswordReset'
////////////////////////////////////////////////////
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import AxiosInstance from './components/AxiosInstance';


// function App() {
  // return (
    // <ThemeProvider theme={theme}>
    //   <Register />
    // </ThemeProvider>
  // );
// }

// export default App;




const App = () => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/items/')
  //     .then(response => {
  //       setItems(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the items!', error);
  //     });
  // }, []);

  
  return (
    <Router>
      <div>
        <Nav1 />
        <NavContent items={items} />
      </div>
    </Router>
  );
};

const NavContent = ({ items }) => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // حالة تسجيل الدخول
  // useEffect(() => {
  //   AxiosInstance.get('users/me/')
  //     .then((res) => {
  //       setUser(res.data);
  //       setLoading(false);
  //       setIsLoggedIn(true); // تعيين حالة تسجيل الدخول إلى true إذا تم استرجاع بيانات المستخدم بنجاح
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //       setLoading(false);
  //       setUser(null);
  //       setIsLoggedIn(false); // تعيين حالة تسجيل الدخول إلى false إذا فشل استرجاع البيانات
  //     });
  // }, []);



  // const [language, setLanguage] = useState(null);
  // const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // const location = useLocation();
  // const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
// 


  // useEffect(() => {
  //   const path = location.pathname;
  //   if (path.includes('python') || path.includes('js') || path.includes('java') || path.includes('php') || path.includes('html')) {
  //     setLanguage(path.split('/')[1]);
  //     setIsSidebarVisible(true);
  //   } else {
  //     setLanguage(null);
  //     setIsSidebarVisible(false); // Hide sidebar on homepage
  //   }
  // }, [location]);

  // const handleLanguageChange = (lang) => { //لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف لا تحذف 
  //   setLanguage(lang);
  //   setIsSidebarVisible(true);
  // };

  // const toggleSidebar = () => {
  //   setIsSidebarVisible(!isSidebarVisible);
  // };
  

  // useEffect(() => {
  //   AxiosInstance.get('users/me/')
  //     .then((res) => {
  //       setUser(res.data);
  //       setLoading(false);
  //       setIsLoggedIn(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //       setLoading(false);
  //       setUser(null);
  //       setIsLoggedIn(false);
  //     }); 
  // }, []);

  // if (loading) return null; // انتظر حتى تنتهي عملية التحقق من التحميل
  return (
    <div>
      {/* {!isAuthenticated && <Link to="/login">Login_000</Link>} */}
      {/*<Nav setLanguage={handleLanguageChange} />*/}
      <div className="content-container">
        {/* {language && (
          <>
            {isSidebarVisible && (
              <div className="sidebar-container">
                <button className="sidebar-toggle-inside" onClick={toggleSidebar}>
                  <strong>⨯</strong>
                </button>
                <h1>{language} tutorial</h1> */}
                {/* <h2>{Lessons[language]?.find(lesson => lesson.subLessons.length > 0)?.unite}</h2> */}
                {/* <Sidebar
                  Lessons={Lessons[language] || []}
                  language={language}
                />
              </div>
            )} */}
            {/* {!isSidebarVisible && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                  ☰
                </button>
              </div>
            )} */}
          {/* </>
        )} */}

        <div className="main-content-container">
          <main className="main-content">
            <Routes>
              {/* <Route path="/" element={<HomePage items={items} />} />
              <Route path="/home" element={<HomePage items={items} />} />
              <Route path="/python/*" element={<Python />} />
              <Route path="/js/*" element={<Js />} />

              <Route path="/java/*" element={<Java />} />
              <Route path="/php/*" element={<Php />} />
              <Route path="/html/*" element={<Html />} />
              <Route path="/compiler" element={<Compiler />} /> */}
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/register" element={<Register />} /> */}
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* <Route path="/Home" element={<Home />} /> */}
              {/* <Route path="/register" element={<Register_000 />} />
              <Route path="/login" element={<Login_000 />} /> */}
              
              {/* <Route path="*" element={<HomePage items={items} />} /> */}
                  <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
              {/* <Route path="/About_000" element={<About_000 />} /> */}
              {/* <Route path="/request/password_reset" element={<PasswordResetRequest />} /> */}
              {/* <Route path="/password-reset/:token" element={<PasswordReset />} />  */}
                  {/* <Route path="/profile" element={<MyProfile />} /> */}
                  <Route path="/:profile_link" element={<MyProfile />} />  {/* الميزة التانية*/}
                  <Route path="/:profile_link/:certId" element={<CertificatePage />} />
              {/* <Route path="/profile" element={<MyProfile />} />
                  <Route path="/profile/:profile_link" element={<MyProfile />} />  الميزة التانية */}
              {/* <Route element={<ProtectedRoute/>}> 
                  <Route path="/Profile_000" element={<Profile_000 />} />
              </Route> */}

{/* <>
  {isLoggedIn ? (
    <>
      <Route path="/login" element={<Login_000 />} />
      <Route path="/register" element={<Register_000 />} />
    </>
  ) : (
    <>
      <Route path="/login" element={<HomePage items={items} />} />
      <Route path="/register" element={<HomePage items={items} />} />
    </>
  )}
</> */}


{/* {!isLoggedIn ? (
                <>
                  <Route path="/login" element={<Login_000 />} />
                  <Route path="/register" element={<Register_000 />} />
                </>
              ) : (
                // <Route path="*" element={<Navigate to="/" replace />} /> // إعادة توجيه فوري بدون تأخير
                <Route path="*" element={<Navigate to="/home" replace />} />
              )} */}

    

              
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

// const HomePage = ({ items }) => {
//   return (
//     <></>
//   );
// };

export default App ;