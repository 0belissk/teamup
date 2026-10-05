import { Routes, Route, Link } from 'react-router-dom'

function HomePage() {
  return (
    <main>
      <h1>TeamUp</h1>
      <p>Find volleyball players, teams, and pickup games.</p>
      <p>Backend Status: Connected</p>

      <Link to="/dev">Go to Dev Page</Link>
    </main>
  )
}

function DevPage() {
  return (
    <main>
      <h1>TeamUp Dev Page</h1>
      <Link to="/">Back Home</Link>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dev" element={<DevPage />} />
    </Routes>
  )
}

export default App