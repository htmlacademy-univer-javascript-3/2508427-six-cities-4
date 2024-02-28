import { NavLink } from 'react-router-dom';
import { Path } from '../settings.ts';

type ErrorBlockProps = {
  redirectTo: Path;
};

function ErrorBlock({redirectTo}: ErrorBlockProps) {
  return (
    <div style={{margin: 100}}>
      <h1>404 Not Found</h1>
      <NavLink to={redirectTo}>Вернуться на главную</NavLink>
    </div>
  );
}

export default ErrorBlock;
