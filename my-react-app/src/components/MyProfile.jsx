import React from 'react';
import AxiosInstance from './AxiosInstance';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MiniCertificate from '../Python/Mini-Certificate';
import '../dark_mode.css';



const MyProfile = () => {
    const { profile_link } = useParams();
    const [myData, setMyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [certificates, setCertificates] = useState([]);

    const GetData = () => {
        const url = profile_link ? `profile/${profile_link}/` : `users/me/`;
        AxiosInstance.get(url).then((res) => {
            setMyData(res.data);
            setFirstName(res.data.first_name);
            setLastName(res.data.last_name);
            setEmail(res.data.email);
            setLoading(false);
            AxiosInstance.get(`/api/myschool/school/?user_id=${res.data.id}`).then((res) => {
                console.log("Certificates response:", res.data); // تحقق من شكل البيانات هنا
                const certificates = res.data.length > 0 ? res.data[0].certificates : [];
                setCertificates(certificates);
            }).catch((error) => {
                console.error("Error fetching certificates:", error);
            });
        }).catch((error) => {
            console.error("Error fetching user data:", error);
            setLoading(false);
        });
    };
    useEffect(() => {
        GetData();
    }, [profile_link]);

    const groupedCertificates = certificates.reduce((acc, cert) => {
        const key = cert.nameButton.split('/')[0].trim(); // إضافة trim لإزالة أي مسافات زائدة
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(cert);
        return acc;
      }, {});

      return (
        <div>
            {loading ? <p>Loading data...</p> :
            <div>
                <div className="header">
                    {/* القسم الأيسر: الرابط */}
                    <div className="left-section">
                        <Link
                            to={`/home`}
                            className="back-link"
                            onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                        >
                            ◄ Back to all categories
                        </Link>
                    </div>
    
                    {/* القسم الأوسط: النص في المنتصف */}
                    <div className="center-section">
                        <span className="email-text">
                            {myData.email}
                        </span>
                    </div>
    
                    {/* القسم الأيمن: يمكن تركه فارغًا */}
                    <div className="right-section"></div>
                </div>
    
                <div className="certificates-container">
                    {Object.keys(groupedCertificates).map((key, index) => (
                        <div key={index} className="certificate-group">
                            <h3 className="certificate-title">{key}</h3>
                            <div className="certificate-list">
                                {groupedCertificates[key].map((cert, certIndex) => (
                                    <div key={certIndex} className="certificate-item">
                                        <MiniCertificate
                                            userName={`${firstName} ${lastName}`}
                                            courseName={cert.name}
                                            content={cert.firstLast}
                                            issueDate={new Date(cert.date).toLocaleDateString()}
                                            profileLink={profile_link}
                                            certId={cert.id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
    
;}

export default MyProfile;