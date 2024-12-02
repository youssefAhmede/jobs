import React from 'react';
import './dark_mode.css';

const Footer = () => {
  return (

    <footer
    className="footer"
      // style={{
      //   backgroundColor: '#333',
      //   color: '#fff',
      //   padding: '20px 0',
      //   textAlign: 'center',
      //   fontFamily: 'Arial, sans-serif',
      // }}
    >
      <div
    className="footerdiv"
      //  style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
      >
        {/* روابط الصفحات */}
        <div
        className="footer-1"
        //  style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}
         >
          <h3
        className="footer-2"
          //  style={{ borderBottom: '2px solid #4CAF50', display: 'inline-block', paddingBottom: '5px' }}
           >Quick Links</h3>
          <ul
        className="footer-3"
          //  style={{ listStyleType: 'none', padding: 0, margin: '10px 0' }}
           >
            <li><a href="/new" 
        className="footer-4"
            // style={{ color: '#4CAF50', textDecoration: 'none' }}
            >News</a></li>
            <li><a href="/art" 
        className="footer-4"

            // style={{ color: '#4CAF50', textDecoration: 'none' }}
            >Articles</a></li>
            <li><a href="/job" 
        className="footer-4"

            // style={{ color: '#4CAF50', textDecoration: 'none' }}
            >Jobs</a></li>
            <li><a href="/home" 
        className="footer-4"

            // style={{ color: '#4CAF50', textDecoration: 'none' }}
            >About Us</a></li>
            <li><a href="/home" 
        className="footer-4"

            // style={{ color: '#4CAF50', textDecoration: 'none' }}
            >Contact</a></li>
          </ul>
        </div>

        {/* معلومات الاتصال */}
        <div 
        className="footer-5"
        // style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}
        >
          <h3 
        className="footer-6"
          // style={{ borderBottom: '2px solid #4CAF50', display: 'inline-block', paddingBottom: '5px' }}
          >Contact Us</h3>
          <p>Email: There is no email available yet.</p>
          <p>Phone: +no phone number</p>
          <p>Address: 123 Maple Street, Toronto, ON, Canada</p>
        </div>

        {/* أيقونات التواصل الاجتماعي */}
        <div 
        className="footer-7"

        // style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}
        >
          <h3 
        className="footer-8"
          // style={{ borderBottom: '2px solid #4CAF50', display: 'inline-block', paddingBottom: '5px' }}
          >Follow Us</h3>
          <div 
        className="footer-9"
          // style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}
          >
            <a
              href="https://www.facebook.com/CamelCo/"
              target="_blank"
              rel="noopener noreferrer"
        className="footer-10"
              // style={{ textDecoration: 'none' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
        className="footer-11"
                // style={{ width: '30px', height: '30px' }}
              />
            </a>
            <a
              href="https://www.instagram.com/camel__c/"
              target="_blank"
              rel="noopener noreferrer"
        className="footer-12"

              // style={{ textDecoration: 'none' }}
            >
              <img
            
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
        className="footer-13"
                // style={{ width: '30px', height: '30px' }}
              />
            </a>
            <a
              href="https://t.me/+3lN1q7QIqUowMTg0"
              target="_blank"
              rel="noopener noreferrer"
        className="footer-14"
              // style={{ textDecoration: 'none' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
        className="footer-15"
                // style={{ width: '30px', height: '30px' }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* حقوق الطبع والنشر */}
      <div 
        className="footer-16"
      // style={{ borderTop: '1px solid #4CAF50', paddingTop: '10px', marginTop: '20px', fontSize: '0.9rem' }}
      >
        &copy; 2020 CamelC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
