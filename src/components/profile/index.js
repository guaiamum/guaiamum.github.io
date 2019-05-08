import { h } from 'preact';

export default ({ classes, links, name, subtitle, img, ...otherProps }) => (
    <aside class={classes} id="profile-nav">
        <header id="info">
            <img class="circle" src={img} alt="User Avatar" id="user-img" height="180" width="180" />
            <p id="profile-subtitle">{ subtitle }</p>
            <p id="profile-name">{ name }</p>
        </header>
        {
            links &&
                <footer>
                    {
                        links.map(({ name, url }) => {
                            const icon = require(`../../assets/icons/${name}.svg`);
                            return (
                                <a class="link" aria-label={name} href={url}>
                                    <img class="circle" src={icon} id={`${name}-link`} alt={`${name} Icon.`} />
                                </a>
                            );
                        })
                    }
                </footer>
        }
    </aside>
);
