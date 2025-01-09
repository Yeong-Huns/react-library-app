import {useBookContext} from "../../context/BookContext.jsx";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import {genres} from "../../utils/utils.js";

export const BookForm = ({initialData = {}, onSubmit}) => {
	const {dispatch} = useBookContext();
	const navigate = useNavigate();
	const titleRef = useRef();
	const authorRef = useRef();
	const genreRef = useRef();
	const dateRef = useRef();
	const ratingRef = useRef();
	const availableRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		const bookData = {
			id: initialData.id || null,
			title: titleRef.current.value,
			author: authorRef.current.value,
			genre: genreRef.current.value,
			publishedDate: dateRef.current.value,
			rating: parseInt(ratingRef.current.value, 10),
			available: availableRef.current.checked
		}

		onSubmit(bookData);
	}

	return (
		<form className={'mt-8 flex flex-col justify-center items-center space-y-4 border border-gray-200 rounded-lg p-6'} onSubmit={handleSubmit}>
			<input className={'w-full p-2 border border-gray-200 rounded-lg'} ref={titleRef} defaultValue={initialData.title || ''} placeholder="제목" required />
			<input className={'w-full p-2 border border-gray-200 rounded-lg'} ref={authorRef} defaultValue={initialData.author || ''} placeholder="작가" required />
			<select className={'w-full p-2 border border-gray-200 rounded-lg text-gray-400'} ref={genreRef} defaultValue={initialData.genre || ''} required>
				<option value="" disabled>장르 선택</option>
				{genres.map((genre, index) => (
					<option key={index} value={genre}>{genre}</option>
				))}
			</select>
			<input className={'w-full p-2 border border-gray-200 rounded-lg text-gray-400'} ref={dateRef} defaultValue={initialData.publishedDate || ''} placeholder="발매일" required type="date" />
			<input className={'w-full p-2 border border-gray-200 rounded-lg text-gray-400'} ref={ratingRef} defaultValue={initialData.rating || 1} placeholder="별점 (1-5)" required type="number" min="1" max="5" />
			<label className={'peer w-full p-2 border bg-white border-gray-200 rounded-lg flex gap-x-2'}>
				<input className={'peer'} ref={availableRef} type="checkbox" defaultChecked={initialData.available || false} />
				<p className={'peer-checked:text-blue-500 hover:text-blue-500 text-gray-400'}>판매가능여부</p>
			</label>
			<div className={'text-white space-x-4'}>
				<button className={'bg-blue-500 rounded-lg px-4 py-2'} type="submit">{initialData.id ? '수정' : '추가'}</button>
				<button type="button" onClick={() => navigate('/')} className={'bg-red-600 rounded-lg px-4 py-2'}>
					취소
				</button>
			</div>
		</form>
	)
}