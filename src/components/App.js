import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="main">
              <div className="main_content">
                <h1>Books N  Roses: Appetite for Instruction</h1>
                <BookList/>
              </div>
              <div className="books">
                  <BookDetail/>

                </div>
            </div>
        );
    }
}

export default App;
