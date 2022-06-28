import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <div className="Header">
        <h1 style={{ paddingRight: 30, fontSize: 25 }}>LOGO</h1>
        <ul style={{ width: 500, paddingRight: 100}}>
          <li className="Header-list">공개채용 정보</li>
          <li className="Header-list">스터디 구인</li>
          <li className="Header-list">스터디 구직</li>
          <li className="Header-list">고객센터</li>
        </ul>
        <button className="login-button">Login / join</button>
        <button className="mypage-button">Mypage</button>
    </div>
  </header>
);
export default Header;
