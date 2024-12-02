import React, { useState } from 'react';
import '../dark_mode.css';
const VerifyCertificate = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleVerify = () => {
    // استبدل هذا الجزء بالتحقق من قاعدة البيانات
    const storedVerificationCode = "رمز التحقق المخزن"; // هذا يجب أن يأتي من قاعدة البيانات
    setIsValid(verificationCode === storedVerificationCode);
  };

  return (
    <div>
      <h2>Verify Your Certificate</h2>
      <input 
        type="text" 
        placeholder="Enter Verification Code" 
        value={verificationCode} 
        onChange={(e) => setVerificationCode(e.target.value)} 
      />
      <button onClick={handleVerify}>Verify</button>
      {isValid !== null && (
        <p>{isValid ? "The certificate is valid!" : "Invalid certificate code."}</p>
      )}
    </div>
  );
};

export default VerifyCertificate;
