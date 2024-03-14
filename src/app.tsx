import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/error-page.tsx';
import OfferPage from './pages/offer-page.tsx';
import LoginPage from './pages/login-page.tsx';
import FavouritesPage from './pages/favourites-page.tsx';
import ProtectedRoute from './components/protected-route.tsx';
import { AuthorizationStatus, Path } from './settings.ts';
import MainPage from './pages/main-page.tsx';
import { offersCompressed } from './mocks/offers.ts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<MainPage offers={offersCompressed} />} />
        <Route path={Path.Login} element={<LoginPage />} />
        <Route path={Path.Favourites} element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NotAuthorized}>
            <FavouritesPage offers={offersCompressed} />
          </ProtectedRoute>
        }
        />
        <Route path={Path.OfferById} element={<OfferPage />} />
        <Route path={Path.Error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
