import React, {Component} from 'react';
import BookList from './container/book-list.component';


export default class Main extends Component {
  
    constructor(props) {
      super(props);     
    }

   render() {
       return(
            <div>
              <BookList />
            </div>
       );
   }
}