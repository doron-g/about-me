import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Doron Gescheidt</h1>
      
      <nav className="mb-8">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-gray-800 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/resume" className="text-gray-800 hover:underline">Resume</Link>
          </li>
          <li>
            <Link to="/contact-info" className="text-gray-800 hover:underline">Contact Info</Link>
          </li>
          <li>
            <Link to="/more-cats" className="text-gray-800 hover:underline">More Cats</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
