import { NavLink } from 'react-router-dom';

import logoFacebook from "../../assets/logos/facebook.png";
import logoInstagram from "../../assets/logos/instagram.png";

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__image">
      <NavLink
        to="/facebook"
      >
        <img
          src={logoFacebook}
          className="footer__image-facebook"
          alt="Logo Facebook"
        />
      </NavLink>
      <NavLink
        to="/instagram"
      >
        <img
          src={logoInstagram}
          className="footer__image-instagram"
          alt="Logo Instagram"
        />
      </NavLink>
    </div>
    <a href="/copyright" className="footer__copyright">Copyright</a>
    <a href="/mentions-legales" className="footer__mentions">Mentions Légales</a>
  </div>
);

export default Footer;
