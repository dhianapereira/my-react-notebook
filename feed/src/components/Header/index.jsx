import styles from './styles.module.css';

export function Header(){
    return (
        <header className={styles.header} >
            <img src="/ignite-logo.svg" alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}