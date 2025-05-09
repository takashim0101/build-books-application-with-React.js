// C:\Level 5\Build Amazing Books Application with ReactJS\Build Amazing Books Application\src\components\Main.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // import icon
import styles from './Main.module.css'; // CSSモジュールをインポート
const Main = () => {
    return (
      <>
        <div className="header">
          <div className="row1"></div>
          <h1>A room without books is like<br/> a body without a soul.</h1>
        </div>
        <div className="row2"></div>
        <h2>Find Your Book</h2>        
      </>
    );
  }
  
  export default Main;



