import { h } from 'preact';

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default ({ skills, skillsWanted }) => (
    <section class="-pam">
        <h2>Skills I consider to have</h2>
        <ol class="skill-list -phm">
            {
                skills.map(({ title, description }) => (
                    <li key={title}>
                        <h3>{ title }</h3>
                        <p>{ description }</p>
                    </li>
                ))
            }
        </ol>
        <h2>Skills I want to acquire</h2>
        <ul>
            {
                skillsWanted.map(({ title, description }) => (
                    <li key={title}>
                        <h3>{ title }</h3>
                        <p>{ description }</p>
                    </li>
                ))
            }
        </ul>
    </section>
);
