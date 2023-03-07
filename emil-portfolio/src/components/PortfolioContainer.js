import React, { useState } from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Contact from './pages/Contact';
import gitHub from '../assets/github-mark.png';
import linkedIn from '../assets/LI-In-Bug.png';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

      </header>

      <main className="d-flex p-1" style={{ width: '1584px' }}>


        {renderPage()}
      </main>

      <footer>




        <div className="section-footer"  >




          <a href="https://github.com/Emil1577" target="_blank" rel="noreferrer">
            <img src={gitHub} style={{height:'65px', padding:'10px'}} ></img>
          </a>

          <a href="https://www.linkedin.com/in/emil-ronquillo-76832a32/" target="_blank" rel="noreferrer">
            <img src={linkedIn} style={{height:'65px', padding:'10px'}}></img>
          </a>


        </div>

      </footer>

    </div >
  );
}
