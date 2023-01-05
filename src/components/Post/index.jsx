import styles from './styles.module.css';

//TODO: Criar componente de avatar

export function Post(){
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/dhianapereira.png"  />
                    <div className={styles.authorInfo}>
                        <strong>Dhiana Pereira</strong>
                        <span>Mobile Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium soluta numquam rem eaque. Tempore dolorum, ea culpa deleniti ipsum, in neque excepturi sit nihil nemo quisquam, porro molestias fugiat.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ad fugit harum, error aliquam sunt repudiandae corporis a amet vitae deserunt nam qui. Id doloribus nulla suscipit dignissimos illum obcaecati?
                </p>
            </div>
        </article>
    );
}