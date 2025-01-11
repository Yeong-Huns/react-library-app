import {useNavigate, useParams} from "react-router-dom";
import {useBookContext} from "../../context/BookContext.jsx";
import {useEffect, useState} from "react";
import {Loading} from "./Loading.jsx";
import {BookForm} from "../organism/BookForm.jsx";

export const EditBook = () => {
	const {id} = useParams()
	const navigate = useNavigate()
	const {dispatch} = useBookContext();
	const [bookData, setBookData] = useState(null);

	useEffect(() => {
		const fetchBook = async () => {
			const response = await fetch(`http://localhost:4000/books/${id}`)
			if (response.ok) {
				const data = await response.json();
				setBookData(data);
			}
		}
		fetchBook();
	}, [id])

	const handelBookUpdate = async (updatedBook) => {
		try {
			const response = await fetch(`http://localhost:4000/books/${id}`, {
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(updatedBook),
			})
			if (!response.ok) throw new Error('도서를 업데이트하는데 실패하였습니다.');
			const data = await response.json();
			dispatch({type: 'UPDATE_BOOK', payload: data});
			navigate('/')
		} catch (err) {
			console.error(err.message);
		}
	}

	if (!bookData) return <Loading/>;

	return (
		<div>
			<h1>도서 수정</h1>
			<BookForm initialData={bookData} onSubmit={handelBookUpdate}/>
		</div>
	)
}