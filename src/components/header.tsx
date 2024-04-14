import Logo, { LogoType } from './logo.tsx';
import {useAppDispatch, useAppSelector} from '../hooks';
import {AuthorizationStatus, Path} from '../settings.ts';
import {Link} from 'react-router-dom';
import {logout} from '../store/api-actions.ts';


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
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{user?.email}</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={Path.Main} onClick={sendLogoutAction}>
            <span className="header__signout">Sign out</span>
          </Link>
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
