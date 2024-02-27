import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div style={{margin: 100}}>
      <h1>404 Этой страницы никогда не существовало 😧😧😧</h1>
      <NavLink to="/">Вернуться на главную</NavLink>
    </div>
  );
}

export default Error;
