import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Summary from './pages/Summary/Summary'
import Meetings from './pages/Meetings/Meetings'
import Groups from './pages/Groups/Groups'
import MeetingsPage from './pages/MeetingsPage/MeetingsPage'
import Summaries from './pages/Summaries/Summaries'
import Resources from './pages/Resources/Resources'
import Signup from './pages/Signup/Signup'
import LandingPage from './pages/LandingPage/LandingPage'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { useAuth } from './context/AuthContext'

// Wrapper component to handle conditional rendering based on auth state
const Root = () => {
  const { user, loading } = useAuth();
  
  console.log('Root component - Auth State:', { user, loading, currentPath: window.location.pathname });

  // If user is authenticated and trying to access auth pages, redirect to dashboard
  if (user && ['/login', '/signup', '/'].includes(window.location.pathname)) {
    console.log('Authenticated user accessing auth page, redirecting to dashboard');
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/summary" element={
        <ProtectedRoute>
          <Summary />
        </ProtectedRoute>
      } />
      <Route path="/meetings" element={
        <ProtectedRoute>
          <MeetingsPage />
        </ProtectedRoute>
      } />
      <Route path="/groups" element={
        <ProtectedRoute>
          <Groups />
        </ProtectedRoute>
      } />
      <Route path="/summaries" element={
        <ProtectedRoute>
          <Summaries />
        </ProtectedRoute>
      } />
      <Route path="/resources" element={
        <ProtectedRoute>
          <Resources />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </Router>
  )
}

export default App
