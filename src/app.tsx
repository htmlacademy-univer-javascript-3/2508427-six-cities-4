import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/error-page.tsx';
import OfferPage from './pages/offer-page.tsx';
import LoginPage from './pages/login-page.tsx';
import FavouritesPage from './pages/favourites-page.tsx';
import ProtectedRoute from './components/protected-route.tsx';
import { AuthorizationStatus } from './settings.ts';
import MainPage from './pages/main-page.tsx';
import { offers } from './mocks/offers.ts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offers={offers} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favourites" element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NotAuthorized}>
            <FavouritesPage offers={offers} />
          </ProtectedRoute>
        }
        />
        <Route path="/offers/:id" element={<OfferPage offers={offers} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
