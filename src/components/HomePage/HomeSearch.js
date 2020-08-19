import React from 'react';

const HomeSearch = () => {
    return ( 
        <React.Fragment>
            <div className="home-search-form">
                <h1>Find your perfect event space</h1>
                <div className="form">
                    <i className="material-icons search">search</i>
                    <input
                        type="text"
                        placeholder="Where is your event?"
                    />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default HomeSearch;