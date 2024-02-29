import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={{margin: 100}}>
      <h1>404 Not Found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default ErrorPage;
