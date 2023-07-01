import { ReposType } from '../@types/interfaces'

interface Props {
  repo: ReposType
}

export const GithubRepoCard = ({ repo }: Props) => {
  const langColor =
    repo.language === 'JavaScript'
      ? 'bg-yellow-500'
      : repo.language === 'Astro'
      ? 'bg-purple-500'
      : repo.language === 'TypeScript'
      ? 'bg-blue-500'
      : 'bg-white'

  return (
    <a
      href={repo.html_url}
      target="_blank"
      className="flex h-[150px] w-full flex-col gap-2 rounded-lg bg-zinc-800/50 p-4 shadow-glass backdrop-blur-lg transition hover:bg-zinc-800"
      rel="noreferrer"
    >
      <h1 className="text-lg font-semibold">{repo.name}</h1>
      <p className="flex-1 text-sm font-light text-zinc-200">
        {repo.description}
      </p>
      {repo.language && (
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${langColor}`} />
          <span className="text-xs font-light text-zinc-300">
            {repo.language}
          </span>
        </div>
      )}
    </a>
  )
}
