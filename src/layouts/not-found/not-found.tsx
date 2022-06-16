import { component$, Host, useScopedStyles$ } from '@builder.io/qwik';
import styles from './not-found.css?inline';

const NotFound = component$(() => {
  useScopedStyles$(styles);

  return (
    <Host class="docs">
      <main>Not Found</main>
    </Host>
  );
});

export default NotFound;
