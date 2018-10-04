import React, {Component} from 'react';
import BookItem from './book-item.component';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return(
                <BookItem key={book.title} book={book} />
            )
        })
    }
    render() {
        return(
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

//Mappa i dati dell'application state su una props
function mapStateToProps(state) {
    return {
        books : state.books
    }
}
//crea la connessione fra redux e react
export default connect(mapStateToProps)(BookList);