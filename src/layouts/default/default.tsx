import { component$, Host, Slot, useScopedStyles$ } from '@builder.io/qwik';
import styles from './default.css?inline';

const DefaultLayout = component$(() => {
  useScopedStyles$(styles);

  const rows = Array(32).fill(null)
  const columns = Array(24)

  const matrix = [rows, columns]

  return (
    <Host>
      <main class="container">
        {
          rows.map(() => {
            return <article class="dot" aria-label="I'm a dot!">
            </article>
          })
        }
      </main>
    </Host>
  );
});

export default DefaultLayout;
