import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface User {
  id: string
  emailAddress: string
  displayName: string
  photoURL: string
  role: string
  exp: number
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const accessToken = getAccessToken()
      const decodedAccessToken = jwtDecode<User>(accessToken)

      if (decodedAccessToken.exp * 1000 < Date.now()) {
        throw new Error('Access token expired.')
      }

      setUser(decodedAccessToken)
    } catch (error) {
      handleFetchError(error)
    } finally {
      setLoading(false)
    }
  }

  const getAccessToken = (): string => {
    const accessTokenFromUrl = new URLSearchParams(window.location.search).get(
      'token',
    )
    const accessTokenFromLocalStorage = localStorage.getItem('accessToken')

    const accessToken = accessTokenFromUrl || accessTokenFromLocalStorage

    if (!accessToken) {
      throw new Error('Access token not found.')
    }

    if (accessTokenFromUrl) {
      localStorage.setItem('accessToken', accessToken)
      window.history.replaceState({}, '', window.location.pathname)
    }

    return accessToken
  }

  const handleFetchError = (error: any) => {
    setError('Error fetching user data: ' + error)
    router.push('/login')
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    setUser(null)
    router.push('/login')
  }

  useEffect(() => {
    fetchData()
  }, [router]) // eslint-disable-line react-hooks/exhaustive-deps

  return { user, logout, loading, error }
}
