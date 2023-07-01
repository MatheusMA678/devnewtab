import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const date = new Date()
const hours = date.getHours()

const saudation =
  hours < 12 ? 'Bom dia' : hours < 18 ? 'Boa tarde' : 'Boa noite'

export function Header() {
  const { user } = useContext(AppContext)

  // const [user, setUser] = useState<string | null>()

  // useEffect(() => {
  //   setUser(localStorage.getItem('user'))
  // }, [])

  return (
    <header className="flex h-24 items-center justify-between px-12">
      <h1 className="text-sm font-light text-zinc-200">
        {saudation},{' '}
        <strong className="text-base capitalize">{user || 'Usuário'}</strong>
      </h1>
    </header>
  )
}
