import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Singin from './pages/Singin'
import Signup from './pages/Signup'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Singin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
