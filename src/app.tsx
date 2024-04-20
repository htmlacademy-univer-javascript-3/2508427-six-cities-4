import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './pages/error-page/error-page.tsx';
import LoginPage from './pages/login-page/login-page.tsx';
import {Path} from './settings.ts';
import MainPage from './pages/main-page/main-page.tsx';
import OfferPage from './pages/offer-page/offer-page.tsx';
import ProtectedRoute from './components/protected-route/protected-route.tsx';
import FavouritesPage from './pages/favourites-page/favourites-page.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Login} element={<LoginPage/>}/>
        <Route path={Path.Favourites} element={
          <ProtectedRoute>
            <FavouritesPage/>
          </ProtectedRoute>
        }
        />
        <Route path={Path.OfferById} element={<OfferPage/>}/>
        <Route path={Path.Main} element={<MainPage/>}/>
        <Route path={Path.Error} element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
