import {useNavigate} from "react-router-dom";
import {useBookContext} from "../../context/BookContext.jsx";
import {BookForm} from "../organism/BookForm.jsx";

export const AddBook = () => {
	const navigate = useNavigate();
	const {dispatch} = useBookContext();

	const handleBook = async (newBook) => {
		try {
			const response = await fetch('http://localhost:4000/books', {
				method: 'POST',
				headers: {'content-type': 'application/json'},
				body: JSON.stringify(newBook)
			})
			if(!response.ok) throw new Error('도서를 추가하는데 실패하였습니다.');

			const data = await response.json();
			dispatch({type: 'ADD_BOOK', payload: data});
			navigate('/');
		} catch (error) {
			console.error(error.message);
		}
	}

	return(
		<div>
			<h1 className={'text-3xl font-bold'}>도서 추가</h1>
			<BookForm onSubmit={handleBook} />
		</div>
	)
}