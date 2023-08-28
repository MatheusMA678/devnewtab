import { useState, useEffect } from 'react'

export const useNetworkStatus = () => {
  const [status, setStatus] = useState(true)

  useEffect(() => {
    function changeStatus() {
      setStatus(navigator.onLine)
    }
    window.addEventListener('online', changeStatus)
    window.addEventListener('offline', changeStatus)
    return () => {
      window.removeEventListener('online', changeStatus)
      window.removeEventListener('offline', changeStatus)
    }
  }, [])

  return status ? 'online' : 'offline'
}
