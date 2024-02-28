import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={{margin: 100}}>
      <h1>404 Not Found</h1>
      <NavLink to="/">Вернуться на главную</NavLink>
    </div>
  );
}

export default ErrorPage;
