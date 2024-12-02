// import React from 'react';
// import AxiosInstance from './AxiosInstance'
// import {useEffect, useMemo, useState} from 'react'
// import {Box} from '@mui/material'
// import { Link } from 'react-router-dom';
// import '../dark_mode.css';

// const Home = () =>{

//     const [myData, setMyData] = useState()
//     const [loading,setLoading] = useState(true)

//     const GetData = () => {
//         AxiosInstance.get(`users/`).then((res) =>{
//             setMyData(res.data)
//             console.log(res.data)
//             setLoading(false)
//         })
//     }
//     useEffect(() =>{
//         GetData();
//     },[])
//     return(
//         <div> 
           
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         backgroundColor: '#f0f8ff',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         maxWidth: '800px',
//         margin: '20px auto',
//         fontFamily: 'Arial, sans-serif',
//         lineHeight: '1.6',
//       }}
//     >
//       <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>
//         Welcome to Our Website!
//       </h1>
//       <p style={{ fontSize: '1.2rem', color: '#555' }}>
//         Your ultimate destination for <strong>news</strong>, <strong>articles</strong>, and{' '}
//         <strong>job opportunities</strong> from around the globe. We deliver engaging content
//         covering the latest updates, educational and inspiring articles, as well as diverse job
//         listings tailored to various fields.
//       </p>
//       <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px' }}>
//         Our mission is to be your go-to source for valuable information and inspiration to meet your
//         everyday needs. Stay connected with us to stay informed and inspired! 🌍
//       </p>
//     </div>
    
//             { loading ? <p>Loading data...</p> :

//             <div style={{ display: 'flex', flexWrap: 'wrap' ,
//               // display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh', // اجعل ارتفاع الحاوية يغطي الشاشة بالكامل
//     textAlign: 'center', // تنسيق النص داخل العنصر
//             }}>
//   {myData.filter(item => !['ya801393@gmail.com', 'ya798317@gmail.com', 'joe@gmail.com'].includes(item.email)).map((item, index) => (
//     <div
//       key={index}
//       style={{
//         padding: '5px',
//         margin: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         borderRadius: '8px',
//         backgroundColor: '#f9f9f9',
//         border: '1px solid #ddd',
//         display: 'flex',
//         flexDirection: 'column', // ترتيب المحتوى عموديًا
//         justifyContent: 'space-between',
//          // توزيع المساحة بين العناصر
//         alignItems: 'center', // توسيط المحتوى أفقيًا
//         width: '200px',
//         height: 'auto', // تلقائي لتحديد الارتفاع حسب المحتوى
//         boxSizing: 'border-box',
//         textAlign: 'center',  // لتوسيط النص

//     }}
//     >
//     <Link to={`/${item.profile_link}`} style={{ textDecoration: 'none', flexGrow: 1 }}>
//     {item.email === 'jobs' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="job.jpg" alt="Job" />
//         )}
//         {item.email === 'articles' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="articale.jpg" alt="Article" />
//         )}
//         {item.email === 'jobsArabic' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="jobs.jpg" alt="Photo" />
//         )}
//         {item.email === 'news' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="news.jpg" alt="News" />
//         )}
//         {item.email === 'stories' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="story.jpg" alt="Facebook" />
//         )}
//         {item.email === 'articlesArabic' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="articale.png" alt="Telegram" />
//         )}
//         {item.email === 'storiesArabic' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="story.webp" alt="Telegram" />
//         )}
//         {item.email === 'newsArabic' && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="new.jpg" alt="Telegram" />
//         )}
//         {(!['jobs', 'articles', 'jobsArabic', 'news', 'stories', 'articlesArabic', 'storiesArabic','newsArabic'].includes(item.email)) && (
//           <img style={{ width: '190px', borderRadius: '5%' }} src="default.jpg" alt="Default" />
//         )}
//         <div style={{marginTop:'3px'}}><strong>{item.email}</strong></div>
//       </Link>
//       <Link to={`/${item.profile_link}`} style={{ marginTop: '10px' }}>
//         <button style={{ padding: '5px 30px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer',fontWeight: 'bold' }}>
//           View
//         </button>
//       </Link>
//       </div>
//   ))}
// </div>
//  }
// </div>)}
// export default Home

import React from 'react';
import AxiosInstance from './AxiosInstance';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../dark_mode.css';


const Home = () => {
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get('/users/').then((res) => {
      setMyData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="heading">Welcome to Our Website!</h1>
        <p className="paragraph">
          Your ultimate destination for <strong>news</strong>, <strong>articles</strong>, and{' '}
          <strong>job opportunities</strong> from around the globe. We deliver engaging content covering the latest updates, educational and inspiring articles, as well as diverse job listings tailored to various fields.
        </p>
        <p className={`paragraph ${loading ? 'paragraph-top' : ''}`}>
          Our mission is to be your go-to source for valuable information and inspiration to meet your
          everyday needs. Stay connected with us to stay informed and inspired! 🌍
        </p>
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="card-container">
          {myData
            .filter(
              (item) => !['ya801393@gmail.com', 'ya798317@gmail.com', 'joe@gmail.com'].includes(item.email)
            )
            .map((item, index) => (
              <div key={index} className="card">
                <Link to={`/${item.profile_link}`} className="card-link">
                  {item.email === 'jobs' && <img classname="imgfordiv" src="job.jpg" alt="Job" />}
                  {item.email === 'articles' && <img classname="imgfordiv" src="articale.jpg" alt="Article" />}
                  {item.email === 'jobsArabic' && <img classname="imgfordiv" src="jobs.jpg" alt="Photo" />}
                  {item.email === 'news' && <img classname="imgfordiv" src="news.jpg" alt="News" />}
                  {item.email === 'stories' && <img classname="imgfordiv" src="story.jpg" alt="Facebook" />}
                  {item.email === 'articlesArabic' && <img classname="imgfordiv" src="articale.png" alt="Telegram" />}
                  {item.email === 'storiesArabic' && <img classname="imgfordiv" src="story.webp" alt="Telegram" />}
                  {item.email === 'newsArabic' && <img classname="imgfordiv" src="new.jpg" alt="Telegram" />}
                  {(!['jobs', 'articles', 'jobsArabic', 'news', 'stories', 'articlesArabic', 'storiesArabic', 'newsArabic'].includes(item.email)) && (
                    <img src="default.jpg" alt="Default" />
                  )}
                  <div className="divName">
                    <strong>{item.email}</strong>
                  </div>
                </Link>
                <Link to={`/${item.profile_link}`} className="card-btn">
                  <button className="card-btn">View</button>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
