import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { getHealth } from './api/apiClient'

function HomePage() {
  const [backendStatus, setBackendStatus] = useState('Checking...')

  useEffect(() => {
    getHealth()
      .then((data) => {
        if (data.status === 'UP') {
          setBackendStatus('Connected')
        } else {
          setBackendStatus('Unavailable')
        }
      })
      .catch(() => {
        setBackendStatus('Unavailable')
      })
  }, [])

  return (
    <main>
      <h1>TeamUp</h1>
      <p>Find volleyball players, teams, and pickup games.</p>
      <p>Backend Status: {backendStatus}</p>

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