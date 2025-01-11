import './index.css'
import {Layout} from "./components/molecules/Layout.jsx";
import {Route, Routes} from 'react-router-dom'
import {Home} from "./components/templates/Home.jsx";
import {Error} from "./components/templates/Error.jsx";
import {AddBook} from "./components/templates/AddBook.jsx";
import {BookDetails} from "./components/templates/BookDetails.jsx";
import {EditBook} from "./components/templates/EditBook.jsx";

function App() {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add" element={<AddBook/>}/>
                <Route path="/books/:id" element={<BookDetails/>}/>
                <Route path={"/edit/:id"} element={<EditBook/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Layout>
    )
}


export default App
