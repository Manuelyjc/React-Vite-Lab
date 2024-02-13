// Importa los estilos CSS para la aplicación
import './App.css'

// Importa el componente TwitterFollowCard desde TwitterFollowCard.jsx
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// Define una matriz de usuarios
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

// Define el componente App
export function App () {
  return (
    <section className='App'>
      {
        // Mapea la matriz de usuarios y renderiza el componente TwitterFollowCard para cada usuario
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
