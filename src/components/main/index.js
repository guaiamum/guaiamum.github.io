import { h, Component } from 'preact';
import Tabs from './tabs';

const obj = {
    me: <section id="me" class="row">
        <div class="row">
            <p class="me-small">I believe in <span class="me-big">Simplicity</span></p>
        </div>
    </section>,
    skills: <section id="skills" class="col s12 skills">
        <h5 class="ttl">SKILLS I HAVE</h5>
        <div class="row">
            <div class="skills-container" id="skills-have" />
        </div>

        <h5 class="ttl">SKILLS I WANT TO LEARN</h5>
        <div class="row">
            <div class="skills-container" id="skills-want" />
        </div>
    </section>,
    experiences: <section id="experience" class="col s12">
        <div class="row xps-container" id="experiences">
            <div class="cd-timeline cd-container amarelo" />
        </div>
    </section>,
    education: <section id="education" class="col s12">
        <div class="row">
            <div class="cd-timeline cd-container verde" />
        </div>
    </section>,
    more: <section id="more" class="col s12">
        <div class="row">
            <div class="col s12 offset-l2 l8">
                <p class="me-small">Areas of Interest</p>
                <ul>
                    <li class="me-big">User experience</li>
                    <li class="me-big-right">Open Source</li>
                    <li class="me-big">Artificial Inteligence</li>
                    <li class="me-big-right">Security</li>
                </ul>
            </div>
        </div>

        <div class="row margem-cima">
            <div class="col s12 offset-l2 l8">
                <p class="me-small">Courses and certificates</p>
                <ul>
                    <li class="me-big">SEMCOMP UFBA - 2017</li>
                    <li class="me-big-right">RoadSec - 2017</li>
                    <li class="me-big">JavaScript walkthrough IFBA - 2017</li>
                    <li class="me-big-right">TOEFL: 103 points</li>
                </ul>
            </div>
        </div>
    </section>,

};

export default class Main extends Component {
    /**
     * @param {Object} props
     * @constructor
     */
    constructor (props) {
        super();

        this.state = {
            section: obj.me,
        };
    }

    /**
     * @param {string} target
     * @returns {void}
     */
    propToRender = (target) => {
        this.setState({ section: obj[target] });
    }

    /**
     * @param {Object} props
     * @param {Object} state
     * @returns {JSX}
     */
    render ({ ...otherProps }, { section }) {
        return (
            <main class="col s12 l9" id="main">
                <Tabs cbx={this.propToRender} />
                <div class="row" id="main-content">
                    { section }
                </div>
            </main>
        );
    }
}
