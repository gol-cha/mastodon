import Rails from '@rails/ujs';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';

export function start() {
  require.context('../images/', true);

  try {
    Rails.start();
  } catch (e) {
    // If called twice
  }
}
