import { h } from 'preact';

const baseSvgPath = '../../assets/icons';

const links = ['github', 'instagram', 'medium', 'linkedin'];

export default ({ classes, name, subtitle, img, ...otherProps }) => (
    <section class={`container ${classes}`} id="profile-nav">
        <header id="info">
            <img class="circle" src={img} alt="User Avatar" id="user-img" height="180" width="180" />
            <p id="profile-subtitle">{ subtitle }</p>
            <p id="profile-name">{ name }</p>
        </header>

        <footer>
            {
                links.map((val) => (
                    <a aria-label={val}>
                        <img class="circle" src={`${baseSvgPath}/${val}.svg`} id={`${val}-link`} alt={`${val} Icon`} />
                    </a>
                ))
            }
        </footer>
    </section>
);
