import {NavBar} from "./NavBar.jsx";

export const Layout = ({children}) => (
	<div className={'container max-w-2xl mx-auto'}>
		<NavBar />
		<main className={'p-6 min-h-screen overflow-y-auto bg-gray-50'}>
			{children}
		</main>
	</div>
)