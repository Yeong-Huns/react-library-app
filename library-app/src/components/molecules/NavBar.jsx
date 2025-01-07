import {Link} from "react-router-dom";

export const NavBar = () => {

	return (
		<nav className={'flex justify-between h-14 items-center px-5 bg-blue-500 max-w-full text-white sticky top-0 backdrop-blur-lg bg-opacity-90 p-2'}>
			<div className={'text-lg font-bold'}>도서관리</div>
			<ul className={'flex gap-x-6'}>
				<li className={'text-white font-semibold hover:underline'}><Link to={'/'}>홈</Link></li>
				<li className={'hover:underline font-semibold'}><Link to={'/add'}>도서추가</Link></li>
			</ul>
		</nav>
	)
}