import data from '../data';
import Book from './Book';

function ListBooks() {
    return (
        <div className='row'>
            <Book
            livros={data}
            />
        </div>
    )
}

export default ListBooks