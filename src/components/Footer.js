import React from "react";
import { StyleFooter } from "../styles";

const Footer = () => {
  return (
    <StyleFooter>
      <div className="footer_top">
        <FooterItemTop />
      </div>
      <div className="footer_bottom"></div>
    </StyleFooter>
  );
};

export const FooterItemTop = () => {
  return (
    <div className="footer_card">
      <h3 className="card_title"></h3>
      <ul className="footer_items">
        <li className="menu_item"></li>
        <li className="menu_item"></li>
        <li className="menu_item"></li>
        <li className="menu_item"></li>
        <li className="menu_item"></li>
      </ul>
    </div>
  );
};

export default Footer;
