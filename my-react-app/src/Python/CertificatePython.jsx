import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Python.css';
import Certificate from './Certificate'; // تأكد من استيراد مكون الشهادة
import '../dark_mode.css';
const PythonLesson4 = () => {
  const navigate = useNavigate();
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div>
      {/* <h2>Python Lesson 4</h2>
      <p>Lesson 4 content...</p>
      <div className="button-container">
        <button onClick={() => setShowCertificate(true)}>Show me the Certificate</button>
      </div>

      {showCertificate && (
        <Certificate 
          userName="Youssef Ahmed" 
          courseName="Python Course" 
          issueDate={new Date().toLocaleDateString()} 
        />
      )}
      <div className="button-container">
        <button onClick={() => navigate('/python/lesson3')}>&lt; Previous</button>
        <button onClick={() => navigate('/python/lesson5')}>Next &gt;</button>
      </div> */}
    </div>
  );
};

export default PythonLesson4;
