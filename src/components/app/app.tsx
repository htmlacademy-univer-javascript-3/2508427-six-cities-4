import Main from '../../pages/main/main.tsx';

type AppProps = {
  foundPlacesAmount: number;
};

function App({foundPlacesAmount}: AppProps) {
  return (
    <Main foundPlacesAmount={foundPlacesAmount} />
  );
}

export default App;
