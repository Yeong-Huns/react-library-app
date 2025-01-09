import {useParams} from "react-router-dom";
import {BookDetail} from "../organism/BookDetail.jsx";

export const BookDetails = () => {
	const {id} = useParams();

	return (
		<div>
			<h1 className={'text-3xl font-bold mb-8'}>도서 상세정보</h1>
			<BookDetail id={id}/>
		</div>
	)
}