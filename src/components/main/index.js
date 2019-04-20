import { h } from 'preact';

const tabs = ['me', 'skills', 'experience', 'education', { more: <i class="material-icons">more_horiz</i> }];

export default ({ ...otherProps }) => (

    <div class="col s12 l9" id="main">

        <div class="col s12 tabs-container">
            <ul class="tabs tabs-fixed-width">
                {
                    tabs.map((val, idx) => {
                        let li;
                        if (typeof val === 'string') {
                            li = <li class="tab col s3">
                                <a {...idx === 0 && { class: 'active' }} href={`#${val}`} aria-label={`Section ${val}`}>{ val }</a>
                            </li>;
                        } else {
                            const key = Object.keys(val)[0];
                            const el = val[key];
                            li = <li class="tab col s3">
                                <a {...idx === 0 && { class: 'active' }} href={`#${key}`} aria-label={`Section ${key}`}>{ el }</a>
                            </li>;
                        }

                        return li;
                    })
                }
            </ul>
        </div>

        <div class="row" id="main-content">

            <section class="row" id="me">

                <div class="row">
                    <p class="me-small">I believe in <span class="me-big">Simplicity</span></p>
                </div>

            </section>

            <section id="skills" class="col s12">
                <h5>SKILLS I HAVE</h5>
                <div class="row">
                    <div class="skills-container" id="skills-have" />
                </div>

                <h5>SKILLS I WANT TO LEARN</h5>
                <div class="row">
                    <div class="skills-container" id="skills-want" />
                </div>
            </section>

            <section id="experience" class="col s12">
                <div class="row xps-container" id="experiences">
                    <div class="cd-timeline cd-container amarelo" />
                </div>
            </section>

            <section id="education" class="col s12">
                <div class="row">
                    <div class="cd-timeline cd-container verde" />
                </div>
            </section>

            <section id="more" class="col s12">
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
            </section>

        </div>
    </div>
);
