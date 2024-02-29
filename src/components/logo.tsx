import { Link } from 'react-router-dom';

export enum LogoType {
  Header,
  Footer
}

type LogoProps = {
  type: LogoType;
};

function Logo({type}: LogoProps) {
  switch(type) {
    case LogoType.Header:
      return (
        <Link className="header__logo-link header__logo-link--active" to="/">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </Link>
      );
    case LogoType.Footer:
      return (
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      );
  }
}

export default Logo;
