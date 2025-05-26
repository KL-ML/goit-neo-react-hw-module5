import Section from './Section/Section';
import Header from './Header/Header';
import logoImgPath from '../images/logo.svg';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Backdrop from './Backdrop/Backdrop';
import Sidebar from './Sidebar/Sidebar';
import menuItems from '../data/sidebarMenu.json';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Navigation from './Navigation/Navigation';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

const homeWork = {
  number: '5',
  title: 'Routing.',
};

const App = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  //open-close mobile menu sidebar
  function updateMobileMenuStatus(mobileMenuStatus) {
    setMobileMenuStatus((mobileMenuStatus = !mobileMenuStatus));
  }

  return (
    <Section>
      <Header
        logoImgPath={logoImgPath}
        moduleNumber={homeWork.number}
        moduleTitle={homeWork.title}
        onUpdate={updateMobileMenuStatus}
      />
      <Main>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Main>
      <Footer />
      <Backdrop mobileMenu={mobileMenuStatus}>
        <Sidebar
          menuItems={menuItems}
          variant="mobileMenu"
          mobileMenu={mobileMenuStatus}
          moduleNumber={homeWork.number}
          moduleTitle={homeWork.title}
          onUpdate={updateMobileMenuStatus}
        />
      </Backdrop>
    </Section>
  );
};

export default App;
