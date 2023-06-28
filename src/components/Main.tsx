import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../api'

interface ReposType {
  id: number
  name: string
}

async function getRepos() {
  const res = await githubApi.get<ReposType[]>('/users/MatheusMA678/repos')
  return res.data
}

export const Main = () => {
  const { data: repos, isLoading } = useQuery({
    queryKey: ['repos'],
    queryFn: getRepos,
  })

  const newRepos = repos?.slice(0, 5)

  return (
    <main className="flex gap-4 px-12">
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        newRepos?.map((repo) => {
          return (
            <div
              key={repo.id}
              className="flex flex-col gap-4 rounded-lg border border-zinc-100/50 bg-zinc-800 p-4 shadow backdrop-blur"
            >
              <h1>{repo.name}</h1>
            </div>
          )
        })
      )}
    </main>
  )
}
