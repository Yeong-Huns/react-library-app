import './index.css'
import {Layout} from "./components/templates/Layout.jsx";
import { Routes, Route } from 'react-router-dom'
import {Home} from "./pages/Home.jsx";

function App() {

  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
