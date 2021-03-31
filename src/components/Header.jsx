import React from 'react';
import DarkTheme from './DarkTheme';
function Header(props) {
  return (
    <>
      <div className="h3 justify-content-center d-flex mb-3 p-3 bg-warning text-secondary ">
        Список дел
      </div>
      <DarkTheme />
    </>
  );
}

export default Header;
