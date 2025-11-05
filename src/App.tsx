import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4 text-rick-green">
      <h1 className="text-6xl font-bold mb-8 text-center text-portal-blue">Wubba Lubba Dub Dub!</h1>
      
      <nav className="mb-8">
        <ul className="flex justify-center gap-8">
          <li>
            <Link to="/" className="text-morty-yellow hover:text-rick-green">Home</Link>
          </li>
          <li>
            <Link to="/resume" className="text-morty-yellow hover:text-rick-green">Resume</Link>
          </li>
          <li>
            <Link to="/contact-info" className="text-morty-yellow hover:text-rick-green">Contact Info</Link>
          </li>
          <li>
            <Link to="/more-characters" className="text-morty-yellow hover:text-rick-green">More Characters</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
