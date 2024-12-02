
import React, { useState, useEffect, useMemo } from 'react'; 
import { useParams, Link } from 'react-router-dom'; 
import AxiosInstance from './AxiosInstance'; 
import { useNavigate } from 'react-router-dom'; 
import MiniCertificate from '../Python/Mini-Certificate';
import '../dark_mode.css';

const CertificatePage = () => {
    const { profile_link, certId } = useParams();
    const [certificate, setCertificate] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const [myData, setMyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [certificates, setCertificates] = useState([]);

    const isArabicText = useMemo(() => isArabic(certificate?.name), [certificate]);

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                const response = await AxiosInstance.get(`/api/myschool/certificates/${profile_link}/${certId}/`);
                if (response.status === 200) {
                    setCertificate(response.data);
                } else {
                    alert("Certificate not found.");
                }
            } catch (error) {
                alert("Failed to fetch certificate. Please try again later.");
            }
        };
        fetchCertificate();
    }, [certId, profile_link]);

    useEffect(() => {
        const GetData = () => {
            const url = profile_link ? `profile/${profile_link}/` : 'users/me/';
            AxiosInstance.get(url)
                .then((res) => {
                    setMyData(res.data);
                    setFirstName(res.data.first_name);
                    setLastName(res.data.last_name);
                    setEmail(res.data.email);
                    setLoading(false);
                    AxiosInstance.get(`/api/myschool/school/?user_id=${res.data.id}`)
                        .then((res) => {
                            const certificates = res.data.length > 0 ? res.data[0].certificates : [];
                            setCertificates(certificates);
                        })
                        .catch((error) => {
                            console.error("Error fetching certificates:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setLoading(false);
                });
        };
        GetData();
    }, [profile_link]);

    const groupedCertificates = useMemo(() => {
        return certificates.reduce((acc, cert) => {
            const key = cert.nameButton.split('/')[0].trim();
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(cert);
            return acc;
        }, {});
    }, [certificates]);

    if (!certificate) return <div>Loading...</div>;

    function isArabic(text) {
        const arabicPattern = /[\u0600-\u06FF]/;
        return arabicPattern.test(text);
    }

    const toggleExpand = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    const processText = (text) => {
      const marker = '**';
      const markerIndex = text.indexOf(marker);
  
      // Regex to match URLs
      const urlRegex = /(https?:\/\/[^\s]+)/g;
  
      // Replace URLs with "Click here" or "اضغط هنا" based on language
      const textWithLinks = text.replace(urlRegex, (url) => {
          const linkText = isArabic(certificate.name) ? "اضغط هنا" : "Click here";
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
      });
  
      if (markerIndex === -1) return { truncated: textWithLinks.replace(/\*/g, ''), remaining: '' };
  
      const cleanedText = textWithLinks.replace(/\*/g, '');
      return {
          truncated: cleanedText.slice(0, markerIndex),
          remaining: cleanedText.slice(markerIndex),
      };
  };

    const { truncated, remaining } = processText(certificate.firstLast);

    return (
        <>
      
{/* ////////////////////////////////////////////////////// */}
<div
   className="certi-div"
// style={{
//     background: '#9A9A9A', // لون خلفية داكن
//     color: '#fff', // لون النص
//     display: 'flex', // استخدام Flexbox
//     justifyContent: 'center', // محاذاة المحتوى أفقياً في المنتصف
//     alignItems: 'center', // محاذاة المحتوى عموديًا في المنتصف
//     padding: '10px 20px',
//     margin: '0px',
//     boxSizing: 'border-box', // تضمين الحواف والمسافات
//     width: '100%',
//   }}
>
  {/* الرابط على الجهة اليسرى */}
  <div  className="certi-link"
// style={{ position: 'absolute', left: '20px' }}
>
    <Link
      to={`/${profile_link}`}
       className="certi-link2"
// style={{
//         backgroundColor: '#f0f0f0', // لون خلفية فاتح
//         color: '#333', // لون نص داكن ومريح للعين
//         padding: '5px 10px', // تقليل حجم الزر
//         textDecoration: 'none', // إزالة التسطير
//         borderRadius: '4px', // حواف مستديرة
//         fontWeight: 'normal', // جعل النص طبيعي بدون بروز
//         fontSize: '14px', // حجم خط أصغر
//         display: 'inline-block', // تنسيق الرابط كزر
//         transition: 'background-color 0.3s ease', // تأثير عند التمرير
//       }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'} // تغيير اللون عند التمرير
      onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'} // استرجاع اللون عند الخروج
    >
      ◄ Back to category
    </Link>
  </div>

  {/* النص في المنتصف */}
  <div>
    <span
       className="certi-span"
// style={{
//         fontSize: '18px', // حجم النص
//         fontWeight: 'bold', // جعل النص بارز
//         textAlign: 'center', // محاذاة النص أفقياً
//       }}
    >
      {certificate.name}
    </span>
  </div>
</div>
{/* ////////////////////////////////////////////////////// */}
<div dir={isArabic(certificate.name) ? "rtl" : "ltr"} 
       className="certi-name"
// style={{padding:'0px 20px'}}
>
          {/* <Link to={`/${profile_link}`}>Back to Profile</Link>
          <h2>{certificate.name}</h2> */}

          <h6  className="certi-h"
// style={{ direction: "ltr"}}
>
              Date: {new Date(certificate.date).toLocaleDateString()}
          </h6>
  
          <h3 className="doco"
              dangerouslySetInnerHTML={{
                  __html: remaining
                      ? isExpanded
                          ? `${truncated}${remaining}`
                          : `${truncated}...`
                      : truncated,
              }}
          ></h3>
  
          {remaining && (
              <div 
               className="certi-1"
// style={{ padding: "4px", background: "#c7ead6" }}
              >
                  <div 
                   className="certi-2"
// style={{ textAlign: "center", margin: "20px" }}
                  >
                      <button
                          onClick={toggleExpand}
                           className="certi-button"
// style={{
//                               backgroundColor: "#4CAF50",
//                               color: "white",
//                               border: "none",
//                               padding: "10px 20px",
//                               fontSize: "16px",
//                               borderRadius: "5px",
//                               cursor: "pointer",
//                               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                               transition: "transform 0.3s ease, background-color 0.3s ease",
//                           }}
                          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
                          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                      >
                          {isExpanded
                              ? isArabic(certificate.name)
                                  ? "إخفاء المقال"
                                  : "Hide the article"
                              : isArabic(certificate.name)
                              ? "أكمل قراءة المقال"
                              : "Continue reading the article"}
                      </button>
                  </div>
              </div>
          )}
  <br />
          {/* <hr /> */}
          <div>
              {loading ? <p>Loading data...</p> : (
                  <div>
{/* ////////////////////////////////////////////////// */}
                    <div>
                <div
   className="certi-div5"
// style={{
//     background: '#9A9A9A', 
//     // لون خلفية داكن
//     color: '#fff', // لون النص
//     display: 'flex', // استخدام Flexbox
//     justifyContent: 'space-between', // توزيع العناصر
//     alignItems: 'center', // محاذاة العناصر عموديًا
//     padding: '0px 5px', 
//     // padding: '0px', 
//     margin: '0px', 
//     // إضافة مسافة داخلية
//     boxSizing: 'border-box', // تضمين الحواف والمسافات
//     width:'100%',
//     direction: "ltr"
//   }}
>
  {/* القسم الأيسر: الرابط */}
  <div  className="certi-link3"
// style={{ flex: 1, textAlign: 'left' }}
>
  <Link
  to={`/${profile_link}`}
   className="certi-to"
// style={{
//     backgroundColor: '#f0f0f0', 
//     // لون خلفية فاتح
//     color: '#333', // لون نص داكن ومريح للعين
//     padding: '5px 10px', // تقليل حجم الزر
//     textDecoration: 'none', // إزالة التسطير
//     borderRadius: '4px', // حواف مستديرة
//     fontWeight: 'normal', // جعل النص طبيعي بدون بروز
//     fontSize: '14px', // حجم خط أصغر
//     display: 'inline-block', // تنسيق الرابط كزر
//     transition: 'background-color 0.3s ease', // تأثير عند التمرير
//   }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'} // تغيير اللون عند التمرير
  onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'} // استرجاع اللون عند الخروج
>
  ◄ Back to category
</Link>

  </div>

  {/* القسم الأوسط: النص في المنتصف */}
  <div  className="certi-cername"
// style={{ flex: 1, textAlign: 'center' }}
>
    
    
 


    {certificate.name && /^[\u0600-\u06FF\s]+$/.test(certificate.name) ? (
      <span  className="certi-cername2"
// style={{
//         fontSize: '18px', // حجم النص
//         fontWeight: 'bold', // جعل النص بارز
//         // color:'black',
//       }}
      >
        <h3  className="certi-h3"
// style={{ textAlign: "center", margin: "20px" }} 
> مقالات مشابهة</h3>
       
      </span> // إذا كان النص باللغة العربية
    ) : (
      <span  className="certi-span4"
// style={{
//         fontSize: '18px', // حجم النص
//         fontWeight: 'bold', // جعل النص بارز
//         // color:'black',
//       }}
       >
        <h3  className="certi-h33"
// style={{ textAlign: "center", margin: "20px" }} 
>Similar Articles</h3></span> // إذا كان النص ليس باللغة العربية
    )}


  </div>
   {/* قسم فارغ في الجهة اليمنى (لتحقيق التوازن) */}
  <div  className="certi-divv"
// style={{ flex: 1 }}
></div>


  </div>
</div>
{/* ////////////////////////////////////////////////// */}
                      {/* <Link to="/home">Back</Link> */}
                      <br />
                      {/* <h3  className="certi-"
style={{ textAlign: "center", margin: "20px" }} >مقالات مشابهة</h3> */}
                      {Object.keys(groupedCertificates).map((key, index) => (
                          <div key={index}>
                              {/* <h3>{key}</h3> */}
                              <div
     className="certi-obj"
// style={{
//         display: 'flex',
//         justifyContent: 'flex-start',
//         direction: 'ltr', // تأكيد الاتجاه من اليسار إلى اليمين
//         paddingLeft:'10px'
//     }}
>
    <h3
         className="certi-key"
// style={{
//             border: '1px solid black',
//             padding: '5px',
//             margin: '0px',
//             textAlign: 'left', // توسيط النص لليسار داخل العنوان
//         }}
    >
        {key}
    </h3>
</div>





                              <div 
                            //    className="certi-"
// style={{ display: 'flex', flexWrap: 'wrap' }}
                             className="certificate-list"
                            //  "certi-wra"
// style={{ display: 'flex', flexWrap: 'wrap',
//                                 padding: '5px',
//                                 margin: '10px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                 borderRadius: '8px',
//                                 backgroundColor: '#f9f9f9',
//                                 border: '1px solid #ddd',
//                                 boxSizing: 'border-box',
//                                 textAlign: 'center',
//                                 //  className="certi-"

//                                     // display: 'flex',
//                                     justifyContent: 'center',
//                                     // alignItems: 'center',
//                                     // height: '100vh', // تجعل العنصر يشغل كامل ارتفاع الصفحة
//                                     // backgroundColor: '#f0f0f0', // لون خلفية اختياري
//                                     // textAlign: 'center', // توسيط النص داخل المحتوى
//                                 // }}
//                             }}
                              >
                                  {groupedCertificates[key].map((cert, certIndex) => (
                                      cert.id !== certificate.id && (
                                          <div key={certIndex}  className="certificate-item"
// style={{ margin: '10px',maxWidth:'250px' }}
>
                                              {/* {cert.nameButton} */}
                                              <MiniCertificate
                                                  userName={`${firstName} ${lastName}`}
                                                  courseName={cert.name}
                                                  content={cert.firstLast}
                                                  issueDate={new Date(cert.date).toLocaleDateString()}
                                                  profileLink={profile_link}
                                                  certId={cert.id}
                                              />
                                          </div>
                                      )
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
              )}
          </div>
      </div></>
  );
};

export default CertificatePage;
