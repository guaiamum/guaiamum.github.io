import { h } from 'preact';

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default (props) => (
    <section class="-phm">
        <article class="-pvm">
            <h2 class="-upp">Areas of Interest</h2>
            <ul class="-fs20">
                <li>User experience</li>
                <li>Open Source</li>
                <li>Artificial Inteligence</li>
                <li>Security</li>
            </ul>
        </article>

        <article class="-pvm">
            <h2 class="-upp">Courses and certificates</h2>
            <ul class="-fs20">
                <li>SEMCOMP UFBA - 2017</li>
                <li>RoadSec - 2017</li>
                <li>JavaScript walkthrough IFBA - 2017</li>
                <li>TOEFL: 103 points</li>
            </ul>
        </article>
    </section>
);
