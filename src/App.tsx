import { Header } from './components/Header'
import { Main } from './components/Main'
import { AppContextProvider } from './contexts/AppContext'

export default function App() {
  return (
    <AppContextProvider>
      <div className="grid h-screen grid-rows-[96px_1fr]">
        <Header />
        <Main />
      </div>
    </AppContextProvider>
  )
}
