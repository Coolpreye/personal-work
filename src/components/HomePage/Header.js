import React from 'react';
import NavBar from './NavBar';
import HomeSearch from './HomeSearch';

const Header = () => {


    return ( 
        <React.Fragment>
            <header className="home-header">
                <div className="home-header-overlay">
                    <NavBar />
                    <HomeSearch />
                </div>
            </header>
        </React.Fragment>
     );
}
 
export default Header;