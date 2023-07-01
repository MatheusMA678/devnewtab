import { ReactNode, createContext, useEffect, useState } from 'react'

interface AppContextTypes {
  user: string
  handleUser: (value: string) => void
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextTypes)

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [user, setUser] = useState('')

  const handleUser = (value: string) => {
    setUser(value)
  }

  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user])

  return (
    <AppContext.Provider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
