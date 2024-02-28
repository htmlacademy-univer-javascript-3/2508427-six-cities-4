import ErrorBlock from '../components/error-block.tsx';
import { Path } from '../settings.ts';

function Error() {
  return (
    <ErrorBlock redirectTo={Path.Main} />
  );
}

export default Error;
