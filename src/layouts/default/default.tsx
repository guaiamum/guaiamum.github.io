import { component$, Host, Slot, useScopedStyles$ } from '@builder.io/qwik';
import styles from './default.css?inline';

const DefaultLayout = component$(() => {
  useScopedStyles$(styles);

  return (
    <Host class="docs">
      <main>
        <article>
          <Slot />
        </article>
      </main>
    </Host>
  );
});

export default DefaultLayout;
