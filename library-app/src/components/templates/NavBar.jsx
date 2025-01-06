import {Link} from "react-router-dom";

export const NavBar = () => {

	return (
		<nav className={'flex justify-between h-14 items-center px-5 bg-blue-500 text-white'}>
			<div className={'text-lg font-bold'}>Book Manager</div>
			<ul className={'flex gap-x-4'}>
				<li className={'text-white'}><Link to={'/'}>Home</Link></li>
				<li className={'hover:underline'}><Link to={'/add'}>Add Book</Link></li>
			</ul>
		</nav>
	)
}