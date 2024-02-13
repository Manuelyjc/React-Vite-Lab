// Importa useState desde la biblioteca React para manejar el estado interno del componente
import { useState } from 'react'

// Define y exporta el componente TwitterFollowCard
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  // Declara un estado local "isFollowing" utilizando useState
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  // Registra en la consola el nombre de usuario cuando el componente se renderiza
  console.log('[TwitterFollowCard] render with userName: ', userName)

  // Determina el texto del botón basado en el estado "isFollowing"
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  // Determina la clase del botón basado en el estado "isFollowing"
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  // Función para manejar el clic del botón, invierte el estado "isFollowing"
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  // Devuelve la representación visual del componente TwitterFollowCard
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        {/* Renderiza el avatar del usuario */}
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        {/* Renderiza la información del usuario */}
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        {/* Renderiza el botón de seguimiento */}
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
