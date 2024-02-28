import Main from './pages/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login.tsx';
import Favourites from './pages/favourites.tsx';
import Offer from './pages/offer.tsx';
import Error from './pages/error.tsx';
import { AuthorizationStatus, MainPageSettings, Path } from './settings.ts';
import ProtectedRoute from './components/protected-route.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<Main foundPlacesAmount={MainPageSettings.FoundPlacesAmount} />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Favourites} element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NotAuthorized}>
            <Favourites />
          </ProtectedRoute>
        }
        />
        <Route path={Path.OfferById} element={<Offer />} />
        <Route path={Path.Error} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
