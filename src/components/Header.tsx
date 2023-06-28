const date = new Date()
const hours = date.getHours()

function presentation() {
  if (hours <= 12) {
    return 'Bom dia'
  } else if (hours <= 18) {
    return 'Boa tarde'
  } else {
    return 'Boa noite'
  }
}

export const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between px-12">
      <h1 className="text-2xl font-bold">{presentation()}, Matheus</h1>
    </header>
  )
}
