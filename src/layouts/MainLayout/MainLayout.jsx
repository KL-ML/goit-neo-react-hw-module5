import { lazy, Suspense, useState } from 'react';
// const Backdrop = lazy(() => import('../../components/Backdrop/Backdrop'));
// const Footer = lazy(() => import('../../components/Footer/Footer'));
// const Header = lazy(() => import('../../components/Header/Header'));
// const Main = lazy(() => import('../../components/Main/Main'));
// const Sidebar = lazy(() => import('../../components/Sidebar/Sidebar'));

import Backdrop from '../../components/Backdrop/Backdrop';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Sidebar from '../../components/Sidebar/Sidebar';
import logoImgPath from '../../images/logo.svg';
import menuItems from '../../data/sidebarMenu.json';
import { Outlet } from 'react-router-dom';

const homeWork = {
  number: '5',
  title: 'Routing.',
};

export default function MainLayout() {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  //open-close mobile menu sidebar
  function updateMobileMenuStatus(mobileMenuStatus) {
    setMobileMenuStatus((mobileMenuStatus = !mobileMenuStatus));
  }
  return (
    <>
      {/* <Suspense fallback={<div>Loading MainLayout...</div>}> */}
        <Section>
          <Header
            logoImgPath={logoImgPath}
            moduleNumber={homeWork.number}
            moduleTitle={homeWork.title}
            onUpdate={updateMobileMenuStatus}
          />
          <Main>
            <Outlet />
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
      {/* </Suspense> */}
    </>
  );
}
