import {useAppDispatch, useAppSelector} from '../../hooks';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {login} from '../../store/api-actions.ts';
import {AuthorizationStatus, Path} from '../../settings.ts';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  const {authorizationStatus} = useAppSelector((state) => state);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      navigate(Path.Main);
    }
  }, [navigate, authorizationStatus]);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={onPasswordChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
