import React from "react";
import "./Footer.css";
const Footer = () => (
  <div className="Footer">
    <table className="Footer-table">
      <thead style={{ fontSize: 13 }}>
        <tr>
          <th style={{ fontSize: 25 }}>LOGO</th>
          <th>TEAM SPOT</th>
          <th>고객센터</th>
          <th>CONTACT INFO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={5}>
            --------------------------------------------------
          </td>
          <td>About Us</td>
          <td>Find a Property</td>
          <td>Phone: 1234567890</td>
        </tr>
        <tr>
          <td>Legal Information</td>
          <td>How To Host?</td>
          <td>Email: company@email.com</td>
        </tr>
        <tr>
          <td>Contact Us</td>
          <td>Why Us?</td>
          <td>Location: 100 Smart Street, LA, USA</td>
        </tr>
        <tr>
          <td>Blog</td>
          <td>FAQs</td>
        </tr>
        <tr>
          <td></td>
          <td>Rental Guides</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div className="Footer-bottom">
      <p>@2022 SCH.Team SPOT</p>
      <p>Connected With...</p>
    </div>
  </div>
);
export default Footer;
