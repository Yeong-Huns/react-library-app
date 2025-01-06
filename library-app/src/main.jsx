import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BookProvider} from "./context/BookContext.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<BookProvider>
			<App/>
		</BookProvider>
	</BrowserRouter>
)
