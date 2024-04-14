import Logo from '../logo/logo.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus, LogoType, Path} from '../../settings.ts';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions.ts';


function Header() {
  const dispatch = useAppDispatch();

  function sendLogoutAction() {
    dispatch(logout());
  }

  const { authorizationStatus, user } = useAppSelector((state) => state);
  const authContent = authorizationStatus === AuthorizationStatus.Authorized
    ? (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <span className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <Link className="header__user-name user__name" to={Path.Favourites}>{user?.email}</Link>
            <span className="header__favorite-count">3</span>
          </span>
        </li>
        <li className="header__nav-item">
          <span className="header__nav-link">
            <Link className="header__signout" to={Path.Main} onClick={sendLogoutAction}>Sign out</Link>
          </span>
        </li>
      </ul>
    )
    : (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <Link className="header__login" to={Path.Login}>Sign in</Link>
          </a>
        </li>
      </ul>
    );
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={LogoType.Header}/>
          </div>
          <nav className="header__nav">
            {authContent}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
