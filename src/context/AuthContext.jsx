import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        credentials: 'include' // Important for cookies
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Auth check response:', data);
        if (data.success) {
          setUser(data.data);  // Changed from data.user to data.data
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log('Attempting login...');
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok && data.success) {
        console.log('Setting user data:', data.data);  // Changed from data.userData to data.data
        setUser(data.data);
        return { success: true, user: data.data };
      } else {
        console.log('Login failed:', data.message);
        return { success: false, message: data.message || 'Login failed' };
      }
      return { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.success) {
        setUser(data.userData);
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: 'Registration failed' };
    }
  };

  const logout = async () => {
    try {
      // First clear the user state
      setUser(null);
      
      // Then make the request to the server
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'GET', // Changed back to GET as your backend might be expecting GET
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // If the request fails, we don't need to parse JSON or check success
      // Just clearing the user state is enough for frontend logout
      if (!response.ok) {
        console.log('Logout request failed, but user state was cleared');
      }

      // Return true to indicate successful logout from frontend perspective
      return true;
    } catch (error) {
      console.error('Logout failed:', error);
      // Even if the server request fails, we've already cleared the user state
      // so from the frontend perspective, the user is logged out
      return true;
    }
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
