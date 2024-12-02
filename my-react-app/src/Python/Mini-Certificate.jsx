
import React, { useRef } from 'react'; 
import '../dark_mode.css';
import { Link } from 'react-router-dom';

const MiniCertificate = ({ userName, courseName, content, issueDate, profileLink, certId }) => {
  const certificateRef = useRef();

  // استخراج النص قبل وبعد علامة "*"
  const getTruncatedText = (text) => {
    const marker = '*';
    const markerIndex = text.indexOf(marker);
    if (markerIndex === -1) return text; // إذا لم توجد العلامة، يتم عرض النص كاملاً
    return `${text.slice(0, markerIndex)}...`; // عرض النص حتى العلامة مع النقاط
  };

  const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

  return (
    <div className="certificate-container">
      <a
        href={`/${profileLink}/${certId}`}
        className="certificate-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="mini-h4">{courseName}</h4>
        <div ref={certificateRef} className="certificate-content">
          <h5 className={isArabic(content) ? 'arabic-text' : 'ltr-text'}>
            {getTruncatedText(content)}
          </h5>
          <Link to={`/${profileLink}/${certId}`} className="view-button-container">
            <button className="view-button">
              View
            </button>
          </Link>
          <h6 className="issue-date">Date: {issueDate}</h6>
        </div>
      </a>
    </div>
  );
  
};

export default MiniCertificate;


