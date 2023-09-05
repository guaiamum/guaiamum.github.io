import { h } from "preact";
import Icon from "Components/Icon";
import styles from "./profile.module.css";
import Image from "Assets/images/half-heart.jpg";

export default ({ links, name, subtitle, img }) => {
    return (
        <section class={styles.profile}>
            <header>
                <img
                    class={styles.image}
                    src={Image}
                    alt="My Face"
                    height="180"
                    width="180"
                />
                <h2 class={styles.subtitle}>{subtitle}</h2>
                <h1 class={styles.name}>{name}</h1>
            </header>
            {links && (
                <footer class={styles.footer}>
                    {links.map(({ id, name, url }, idx) => (
                        <a
                            class={styles.link}
                            style={`--delay-multip: ${idx};`}
                            aria-label={name}
                            href={url}
                            key={id}
                        >
                            <Icon name={name} width="35" height="35" />
                        </a>
                    ))}
                </footer>
            )}
            <p class="proj-note">Done @ Home since 2017</p>
        </section>
    );
};
