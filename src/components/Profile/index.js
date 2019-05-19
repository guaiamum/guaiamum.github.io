import { h } from 'preact';

export default ({ links, name, subtitle, img, ...otherProps }) => (
    <aside class="profile">
        <header class="hdr">
            <img class="-circl" src={img} alt="My Face" height="180" width="180" />
            <p class="subtitle">{ subtitle }</p>
            <p class="name">{ name }</p>
        </header>
        {
            links &&
                <footer class="ftr">
                    {
                        links.map(({ name, url }) => {
                            const icon = require(`../../assets/icons/${name}.svg`);
                            return (
                                <a class="link" aria-label={name} href={url}>
                                    <img class="-circl" src={icon} id={`${name}-link`}
                                        alt={`${name} Icon.`} width="35" height="35"
                                    />
                                </a>
                            );
                        })
                    }
                </footer>
        }
    </aside>
);
