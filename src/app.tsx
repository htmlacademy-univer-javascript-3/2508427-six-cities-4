import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/error-page.tsx';
import OfferPage from './pages/offer-page.tsx';
import LoginPage from './pages/login-page.tsx';
import FavouritesPage from './pages/favourites-page.tsx';
import ProtectedRoute from './components/protected-route.tsx';
import { AuthorizationStatus, MainPageSettings } from './settings.ts';
import MainPage from './pages/main-page.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage foundPlacesAmount={MainPageSettings.FoundPlacesAmount} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favourites" element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NotAuthorized}>
            <FavouritesPage />
          </ProtectedRoute>
        }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
