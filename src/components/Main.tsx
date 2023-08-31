import { CircleNotch, MagnifyingGlass } from '@phosphor-icons/react'

import { githubApi } from '../api'
import { ReposType, SearchEngineType } from '../@types/interfaces'
import { GithubRepoCard } from './GithubRepoCard'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

export function Main() {
  const [repos, setRepos] = useState<ReposType[] | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [searchEngine, setSearchEngine] = useState<SearchEngineType>('google')

  const { user, handleUser } = useContext(AppContext)

  const getRepos = async (user: string) => {
    if (!user) return

    const res = await githubApi.get(
      `/users/${user}/repos?sort=updated&per_page=10`,
    )
    setRepos(res.data)
  }

  useEffect(() => {
    if (user) {
      getRepos(user)
    }
  }, [user])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    handleUser(inputValue)
    localStorage.setItem('user', inputValue)
  }

  return (
    <main className="grid h-full grid-cols-[350px_1fr] gap-12 overflow-hidden px-12">
      <div className="flex flex-col gap-4 overflow-hidden">
        <h1 className="text-lg font-bold">GitHub</h1>

        {!user && (
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
        )}

        <div className="flex-1 space-y-6 overflow-y-scroll scrollbar-none">
          {!user ? (
            <div className="flex items-center justify-center p-4">
              <span className="text-center text-sm font-light text-zinc-300">
                Insira seu nome de usuário do GitHub para ver seus repositórios.
              </span>
            </div>
          ) : !repos ? (
            <CircleNotch className="h-8 w-8 animate-spin" />
          ) : (
            repos?.map((repo) => {
              return <GithubRepoCard key={repo.id} repo={repo} />
            })
          )}
        </div>
      </div>

      <section className="mb-4 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <select
            name="engine"
            id="engine"
            className="w-fit cursor-pointer rounded-md bg-transparent text-lg font-bold outline-none focus:bg-zinc-500/50"
            onChange={(e) => {
              setSearchEngine(e.target.value as SearchEngineType)
            }}
          >
            <option value="google" className="bg-zinc-800 text-zinc-200">
              Google
            </option>
            <option value="bing" className="bg-zinc-800 text-zinc-200">
              Bing
            </option>
          </select>
          <form action={`https://${searchEngine}.com/search`} method="get">
            <input
              type="text"
              id="search"
              name="q"
              placeholder={`Pesquisar no ${searchEngine}`}
              className="h-12 w-full rounded-3xl bg-zinc-800 px-6 shadow-glass outline-none ring-zinc-500 focus:ring-1"
            />
          </form>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <strong className="text-lg">Mais Visitados</strong>
          <div className="flex flex-1 flex-wrap gap-2">
            <a
              href="https://youtube.com"
              className="aspect-video h-24 overflow-hidden rounded-lg shadow-glass"
            >
              <img
                src="https://i.pinimg.com/originals/09/0c/06/090c0658afb2350efff9c2ac705d5fe9.jpg"
                alt=""
                className="scale-150"
              />
            </a>
            <a
              href="https://discord.com/channels/@me"
              className="aspect-video h-24 overflow-hidden rounded-lg shadow-glass"
            >
              <img
                src="https://www.videogameschronicle.com/files/2021/05/discord-new-logo.jpg"
                alt=""
                className=""
              />
            </a>
            <a
              href="https://instagram.com"
              className="aspect-video h-24 overflow-hidden rounded-lg shadow-glass"
            >
              <img
                src="https://static.poder360.com.br/2021/12/instagram-logo.jpg"
                alt=""
                className="scale-150"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
