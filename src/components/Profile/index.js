import { h } from 'preact';
import Icon from 'Components/Icon';

export default ({ links, name, subtitle, img, ...otherProps }) => {
    const profileImg = require(`Assets/images/${img}`);

    return (
        <section class="profile">
            <header class="hdr">
                <img class="-circl" src={profileImg} alt="My Face" height="180" width="180" />
                <h2 class="subtitle">{ subtitle }</h2>
                <h1 class="name">{ name }</h1>
            </header>
            {
                links &&
                <footer class="ftr">
                    {
                        links.map(({ id, name, url }) => (
                            <a class="link" aria-label={name} href={url} key={id}>
                                <Icon name={name} width="35" height="35" />
                            </a>
                        ))
                    }
                </footer>
            }
        </section>
    );
};
