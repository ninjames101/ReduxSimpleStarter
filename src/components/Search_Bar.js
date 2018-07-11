import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// this says that the searchbar class has access to all the functionality that the react.component class has.
class SearchBar extends Component {
// Render method allows us to return JSX. Must remember to RETURN our JSX so it can render. Render method is how we will attach all other methods to our class.
    render() {
        return <input onChange={ event => console.log(event.target.value)} />
 
    }
}

export default SearchBar
