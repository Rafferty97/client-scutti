import { createElement } from 'cmmn';
import 'whatwg-fetch';

import styles from './styles.scss';

const Req = () => <span className={styles.required}>*</span>;

function validateForm(form) {
  const errs = [];
  const pl = {
    name: form.querySelector('[name="name"]').value.trim(),
    suburb: form.querySelector('[name="suburb"]').value.trim(),
    email: form.querySelector('[name="email"]').value.trim(),
    comments: form.querySelector('[name="comments"]').value.trim(),
    errors: []
  };
  if (pl.name == '') errs.push('You must provide a name');
  if (pl.suburb == '') errs.push('You must provide a suburb');
  if (pl.email == '') errs.push('You must provide an email address');
  if (pl.comments == '') errs.push('You must provide a comment');
  if (errs.length > 0) return { errors: errs };
  return pl;
}

function submitForm(payload) {
  function checkResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
  return fetch(require('./process-form.php'), {
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(checkResponse);
}

export default class ContactForm {
  render() {
    return (
      <form className={styles.wrap}>
        <h2 className={styles.header}>Contact Form</h2>
        <div className={styles.message.with('hidden')}></div>
        <div className={styles.row}>
          <label for="name">Name: <Req/></label>
          <input type="text" name="name" />
        </div>
        <div className={styles.row}>
          <label for="suburb">Suburb: <Req/></label>
          <input type="text" name="suburb" />
        </div>
        <div className={styles.row}>
          <label for="email">Email: <Req/></label>
          <input type="email" name="email" />
        </div>
        <div className={styles.row}>
          <label for="comments">Comments: <Req/></label>
          <textarea name="comments"></textarea>
        </div>
        <div className={styles.row}>
          <label for="submit">&nbsp;</label>
          <input type="submit" name="submit" value="Submit" />
        </div>
      </form>
    );
  }
  mount(node) {
    let submitting = false;
    node.addEventListener('submit', event => {
      if (submitting) return;
      const messageDiv = node.querySelector('.'+styles.message);
      event.preventDefault();
      const payload = validateForm(node);
      if (payload.errors.length > 0) {
        messageDiv.innerHTML = '<strong>Could not submit form</strong><br/>' + payload.errors.join('<br/>');
        messageDiv.className = styles.message.with('error');
      } else {
        messageDiv.innerHTML = 'Submiting form...';
        messageDiv.className = styles.message.with('');
        submitting = true;
        submitForm(payload)
          .then(() => {
            messageDiv.innerHTML = '<strong>Your message was sent.</strong> Thank\'s for getting in touch.';
            messageDiv.className = styles.message.with('success');
            node.reset();
            submitting = false;
          })
          .catch(() => {
            messageDiv.innerHTML = '<strong>A server error occured.</strong> Please try again soon.';
            messageDiv.className = styles.message.with('error');
            submitting = false;
          });
      }
    });
  }
}
