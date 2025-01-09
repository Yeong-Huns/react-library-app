import {useBookContext} from "../../context/BookContext.jsx";
import {Loading} from "../templates/Loading.jsx";
import {Error} from "../templates/Error.jsx";
import {getBookEmoji, renderStars} from "../../utils/utils.js";
import {Link} from "react-router-dom";


const BookList = () => {
	const { books, dispatch, loading, error } = useBookContext()

	if (loading) return <Loading />
	if (error) return <Error />

	const toggleAvailable = async (id, currentAvailable) => {
		try {
			const response = await fetch(`http://localhost:4000/books/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ available: !currentAvailable })
			})

			if (!response.ok) throw new Error('Failed to update availability')

			const updatedBook = await response.json()
			dispatch({ type: 'UPDATE_BOOK', payload: updatedBook })
		} catch (err) {
			console.error(err.message)
		}
	}

	return (
		<section className={'space-y-3'}>
			{books.map((book) => (
				<article key={book.id} className={'flex items-center border border-gray-200 rounded-lg'}>
					<div className={'text-6xl w-1/5'}>
						{getBookEmoji(book.id)}
					</div>
					<div className={'space-y-3 flex-auto'}>
						<h3 className={'text-xl font-bold'}>{book.title}</h3>
						<p className={'text-lg'}>{book.author} / {book.genre}</p>
						<p className={'text-lg leading-7 text-blue-500'}>
							{renderStars(book.rating)}
						</p>
					</div>
					<div className={'flex flex-col items-center justify-center gap-y-2 w-1/5 p-2'}>
						<button
							className={`p-2 w-full font-medium bg-blue-500 rounded-lg text-white text-md text-center`+ (book.available ? '' : ' bg-opacity-35')}
							onClick={() => toggleAvailable(book.id, book.available)}
						>
							{book.available ? '재고있음' : '재고없음'}
						</button>
						<Link className={'p-2 w-full font-medium bg-gray-300 rounded-lg text-gray-800 text-md text-center'} to={`/books/${book.id}`}>상세보기</Link>
					</div>
				</article>
			))}
		</section>
	)
}

export default BookList
