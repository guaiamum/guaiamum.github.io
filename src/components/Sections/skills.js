import { h } from 'preact';

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default (props) => (
    <section class="skills">
        <h5 class="ttl">SKILLS I HAVE</h5>
        <div class="row">
            <div class="skills-container" id="skills-have" />
        </div>

        <h5 class="ttl">SKILLS I WANT TO LEARN</h5>
        <div class="row">
            <div class="skills-container" id="skills-want" />
        </div>
    </section>
);
