import { h } from 'preact';
import { useState } from 'preact/hooks';
import sections from 'Components/Sections';
import Tabs from 'Components/Tabs';

export default (props) => {
    const [section, setSection] = useState('me');
    const SectionToRender = sections[section]; // require(`Components/Sections/${section}`);

    return (
        <main>
            <Tabs cbx={setSection} />
            <SectionToRender {...props} />
        </main>
    );
};
