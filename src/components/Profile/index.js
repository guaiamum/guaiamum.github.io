import { h } from 'preact';

export default ({ links, name, subtitle, img, ...otherProps }) => (
    <section class="profile">
        <header class="hdr">
            <img class="-circl" src={require(`../../assets/images/${img}`)} alt="My Face" height="180" width="180" />
            <h2 class="subtitle">{ subtitle }</h2>
            <h1 class="name">{ name }</h1>
        </header>
        {
            links &&
                <footer class="ftr">
                    {
                        links.map(({ id, name, url }) => {
                            const icon = require(`../../assets/icons/${name}.svg`);
                            return (
                                <a class="link" aria-label={name} href={url} key={id}>
                                    <img src={icon} alt={`${name} Icon.`} width="35" height="35" />
                                </a>
                            );
                        })
                    }
                </footer>
        }
    </section>
);
