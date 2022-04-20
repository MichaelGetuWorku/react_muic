import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const libraryStatusHandler = () => {
    if (libraryStatus === false) {
      setLibraryStatus(true);
    } else {
      setLibraryStatus(false);
    }
    console.log(libraryStatus);
  };
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        {/* <button onClick={libraryStatusHandler}> */}
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
