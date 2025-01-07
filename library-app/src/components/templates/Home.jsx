import {useBookContext} from "../../context/BookContext.jsx";
import {genres} from "../../utils/utils.js";
import BookList from "../organism/BookList.jsx";

export const Home = () => {
	const {setGenre, setSearch} = useBookContext();

	return (
		<div>
			<header className={'flex justify-between items-center p-2'}>
				<h1 className={'text-3xl font-bold'}>도서목록</h1>
				<div className={'flex justify-center gap-x-6 items-center'}>
					<input className={'border border-gray-200 rounded-lg p-2'} onChange={e => setSearch(e.target.value)}/>
					<select className={'border border-gray-200 rounded-lg p-2'} onChange={e => setGenre(e.target.value)}>
						<option value={''}>All Genres</option>
						{genres.map((genre, index) => (
							<option key={index} value={genre}>
								{genre}
							</option>
						))}
					</select>
				</div>
			</header>
			<BookList/>
		</div>
	)
}