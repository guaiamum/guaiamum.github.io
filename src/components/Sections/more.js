import { h } from 'preact';

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default (props) => (
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
);
