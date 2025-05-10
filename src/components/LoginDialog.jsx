import React, { useState } from 'react';
import './LoginDialog.module.css'; // スタイルを別ファイルに分ける

const LoginDialog = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 簡単なメールアドレスの正規表現
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).*$/; // 大文字で始まり数字で終わる正規表現

  const validateInput = () => {
    setMessage('');
    setEmailError('');
    setPasswordError('');

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format. Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password is too short! It must be at least 8 characters long.');
      return;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password must start with an uppercase letter and end with a number.');
      return;
    }

    alert(`Email: ${email}\nPassword is valid! You are authenticated.`);
    onClose(); // ダイアログを閉じる
  };

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div 
        className="modalContent" 
        onClick={(e) => e.stopPropagation()} // モーダルのクリックイベントを伝播しないようにする
      >
        <span className="closeButton" onClick={onClose}>&times;</span>
        <h1>SecureAuth Toolkit</h1>
        <h2>This is email and password validation</h2>
        <label htmlFor="input-email">Email:</label>
        <input
          type="email"
          id="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <label htmlFor="input-password">Password:</label>
        <input
          type="password"
          id="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button onClick={validateInput}>Validate</button>        
        <p>{message}</p>
        <p style={{ color: 'red' }}>{emailError}</p>
        <p style={{ color: 'red' }}>{passwordError}</p>
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginDialog;