import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
import Image from 'next/image'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <Image
        width={88}
        height={88}
        src="https://github.com/dhianapereira.png"
        alt="Imagem de perfil"
      />
      <div>
        <strong>Dhiana Pereira</strong>
        <p>
          <Image width={14} height={16} src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
