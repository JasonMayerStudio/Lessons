import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
     super(props);

     this.state = { term: '' };
  }


  render () {
    return (
      <div className="search-bar">
         <input
         value={this.state.term}
         onChange={event => this.setState({ term: event.target.value })} />
        search
      </div>
     );
    }
  }




export default SearchBar;
