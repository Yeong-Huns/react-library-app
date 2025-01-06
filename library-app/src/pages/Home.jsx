import {useBookContext} from "../context/BookContext.jsx";
import {genres} from "../utils/utils.js";

export const Home = () => {
	const {setGenre, setSearch} = useBookContext();

	return (
		<div>
			<header>
				<h1>Book List</h1>
				<div>
					<input/>
					<select>
						<option>All Genres</option>
						{genres.map((genre, index) => (
							<option key={index} value={genre}>
								{genre}
							</option>
						))}
					</select>
				</div>
			</header>
		</div>
	)
}