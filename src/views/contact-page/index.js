import { createElement } from 'cmmn';

import Page from '../page';
import ContactForm from './contact-form';

import '../theme';
import typo from '../theme/typography.scss';
import styles from './styles.scss';

import { phone, fax, email, GOOGLE_API_KEY } from '../../constants';

const mapFrameSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=Cnr+Angelo+Coode+St+South+Perth`;

export const getMeta = () => ({
  title: 'Contact Us',
  bodyClass: 'bk-store'
});

export default props => {
  return (
    <Page nav={['contact']}>
      <div className={typo.bodyType}>
        <h1>Contact Us</h1>
        <p>
          <strong>Phone:</strong> {phone}<br/>
          <strong>Fax:</strong> {fax}<br/>
          <strong>Email:</strong> {email}
        </p>
        <figure className={styles.mapFigure}>
          <div className={styles.map}>
            <iframe
              width="600"
              height="450"
              frameborder="0" style="border:0"
              src={mapFrameSrc}
              allowfullscreen>
            </iframe>
          </div>
          <figcaption>Corner&nbsp;Angelo&nbsp;&amp;&nbsp;Coode&nbsp;St, South&nbsp;Perth&nbsp;WA&nbsp;6151</figcaption>
        </figure>
        <ContactForm />
      </div>
    </Page>
  );
}
