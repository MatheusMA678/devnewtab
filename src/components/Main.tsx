import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../api'
import { ReposType } from '../@types/interfaces'
import { GithubRepoCard } from './GithubRepoCard'

async function getRepos() {
  const res = await githubApi.get<ReposType[]>('/users/MatheusMA678/repos')
  return res.data
}

export const Main = () => {
  const { data: repos, isLoading } = useQuery({
    queryKey: ['repos'],
    queryFn: getRepos,
  })

  const newRepos = repos?.slice(0, 10)

  return (
    <main className="flex overflow-y-auto px-12">
      <div className="space-y-6 overflow-y-auto p-4 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-600">
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          newRepos?.map((repo) => {
            return <GithubRepoCard key={repo.id} repo={repo} />
          })
        )}
      </div>
    </main>
  )
}
