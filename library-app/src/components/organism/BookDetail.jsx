import {useNavigate} from "react-router-dom";
import {useBookContext} from "../../context/BookContext.jsx";
import {useEffect, useState} from "react";
import {Loading} from "../templates/Loading.jsx";
import {getBookEmoji, renderStars} from "../../utils/utils.js";

export const BookDetail = ({id}) => {
	const navigate = useNavigate();
	const {dispatch} = useBookContext();
	const [book, setBook] = useState(null);

	useEffect(() => {
		const fetchBook = async () => {
			const response = await fetch(`http://localhost:4000/books/${id}`);
			if (response.ok) {
				const data = await response.json();
				setBook(data);
			}
		}
		fetchBook();
	}, [id]);

	if (!book) {
		console.log(`book 업슴!`)
		return <Loading/>
	}

	/*const handleEdit = () => {
		navigate(`/edit/${id}`);
	}*/

	const handleDelete = async () => {
		const confirmed = window.confirm('이 도서를 삭제하시겠습니까?');
		if (!confirmed) return
		try {
			const response = await fetch(`http://localhost:4000/books/${id}`, {
				method: 'DELETE'
			})
			if (!response.ok) throw new Error('Failed to delete book')
			dispatch({type: 'DELETE_BOOK', payload: id})
			navigate('/')
		} catch (e) {
			console.log(e.message);
		}
	}

	return (
		<section className={'container w-full border-t-2 border-gray-200 p-6'}>
			<div className={'flex'}>
				<div className={'space-y-2 w-4/6'}>
					<h2 className={'text-2xl font-bold mb-4'}>{book.title}</h2>
					<p><strong>작가: </strong> {book.author}</p>
					<p><strong>장르: </strong> {book.genre}</p>
					<p><strong>출판일: </strong> {book.publishedDate}</p>
					<p><strong>별점: </strong>
						<span className={'text-lg leading-7 text-blue-500'}>
						 {renderStars(book.rating)}
					</span>
					</p>
					<p><strong>재고상태: </strong> {book.available ? '가능' : '불가능'}</p>
				</div>
				<div className={'w-2/6 text-9xl'}>
					{getBookEmoji(book.id)}
				</div>
			</div>
			<div className={'flex justify-center items-center mt-8 gap-x-5'}>
				<button onClick={() => console.log('수정이벤트 추가예정')} className={'px-4 py-2 font-bold bg-blue-500 rounded-lg text-white text-md text-center'}>
					수정
				</button>
				<button onClick={handleDelete} className={'px-4 py-2 font-bold bg-red-600 rounded-lg text-white text-md text-center'}>
					삭제
				</button>
			</div>
		</section>

	)
}