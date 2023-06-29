import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Header } from './components/Header'
import { Main } from './components/Main'

export default function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen overflow-hidden bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-100">
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  )
}
