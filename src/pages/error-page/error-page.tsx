import {Link} from 'react-router-dom';
import {Path} from '../../settings.ts';

function ErrorPage() {
  return (
    <div style={{margin: 100}}>
      <h1>404 Not Found</h1>
      <Link to={Path.Main}>Вернуться на главную</Link>
    </div>
  );
}

export default ErrorPage;
