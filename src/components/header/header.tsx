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

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const favourites = useAppSelector((state) => state.favourites);

  const authContent = authorizationStatus === AuthorizationStatus.Authorized
    ? (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <span className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <Link className="header__user-name user__name" to={Path.Favourites}>{user?.email}</Link>
            <span className="header__favorite-count">{favourites.length}</span>
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
          <Link className="header__nav-link header__nav-link--profile" to={Path.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>
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
