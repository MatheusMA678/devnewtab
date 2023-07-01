import { Header } from './components/Header'
import { Main } from './components/Main'
import { AppContextProvider } from './contexts/AppContext'

export default function App() {
  return (
    <AppContextProvider>
      <div className="flex h-screen flex-col bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-100">
        <Header />
        <Main />
      </div>
    </AppContextProvider>
  )
}
