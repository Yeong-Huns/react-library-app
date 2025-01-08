import './index.css'
import {Layout} from "./components/molecules/Layout.jsx";
import { Routes, Route } from 'react-router-dom'
import {Home} from "./components/templates/Home.jsx";
import {Error} from "./components/templates/Error.jsx";
import {AddBook} from "./components/templates/AddBook.jsx";

function App() {

  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
