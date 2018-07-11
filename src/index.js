import React from 'react'; 
import ReactDOM from 'react-dom';
// import search from 'youtube-search';
import SearchBar  from './components/Search_Bar';

// AIzaSyBcneztX_IvxFdsc2iss1OQ-zRjtvi2cP4

const App = () => {
    return ( 
        <div>
            <SearchBar/>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector('.container'))