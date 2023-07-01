import { CircleNotch, MagnifyingGlass } from '@phosphor-icons/react'

import { githubApi } from '../api'
import { ReposType } from '../@types/interfaces'
import { GithubRepoCard } from './GithubRepoCard'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

export function Main() {
  const [repos, setRepos] = useState<ReposType[] | null>()
  const [inputValue, setInputValue] = useState('')

  const { user, handleUser } = useContext(AppContext)

  const getRepos = async (user: string) => {
    if (!user) return

    const res = await githubApi.get<ReposType[]>(`/users/${user}/repos`)
    setRepos(res.data)
  }

  useEffect(() => {
    getRepos(user)
  }, [user])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    handleUser(inputValue)
  }

  return (
    <main className="flex h-full overflow-hidden px-12">
      <div className="flex w-[350px] flex-col gap-4">
        <h1 className="text-lg font-bold">GitHub</h1>
        <form
          onSubmit={handleSubmit}
          className="flex h-12 w-full items-stretch gap-2"
        >
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Digite seu nome do GitHub"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex w-full flex-1 items-center rounded-lg bg-zinc-800/50 px-4 shadow-glass outline-none backdrop-blur-md"
          />
          <button
            type="submit"
            className="flex w-12 items-center justify-center rounded-lg bg-zinc-500 shadow-glass"
          >
            <MagnifyingGlass weight="bold" size={22} />
          </button>
        </form>
        <div className="flex-1 space-y-6 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-600">
          {!user ? (
            <div className="flex items-center justify-center p-4">
              <span className="text-center text-sm font-light text-zinc-300">
                Insira seu nome de usuário do GitHub para ver seus repositórios.
              </span>
            </div>
          ) : !repos ? (
            <CircleNotch className="h-8 w-8 animate-spin" />
          ) : (
            repos.map((repo) => {
              return <GithubRepoCard key={repo.id} repo={repo} />
            })
          )}
        </div>
      </div>
    </main>
  )
}
