import './index.css'
import {Layout} from "./components/molecules/Layout.jsx";
import { Routes, Route } from 'react-router-dom'
import {Home} from "./components/templates/Home.jsx";
import {Error} from "./components/templates/Error.jsx";

function App() {

  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
