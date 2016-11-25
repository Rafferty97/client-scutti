import { createElement } from 'cmmn';

import Page from '../page';

import '../theme';
import typo from '../theme/typography.scss';

import { phone, email } from '../../constants';

export const getMeta = () => ({
  title: 'Catering',
  bodyClass: 'bk-antipasto2'
});

export default props => {
  return (
    <Page nav={['catering']}>
      <div className={typo.bodyType}>
        <h1>Catering</h1>
        <p>
          Contact our friendly staff to discuss you catering needs for any event, be it a small intimate affair or a large gathering. We have a range of salad platters, cheese platters, antipasto platters or we can assist with personalised catering on request.
        </p>
        <p>
          <strong>Our online shop will be available soon.</strong>
        </p>
        <hr/>
        <h3>Contact Details</h3>
        <p>
          <strong>Phone:</strong> {phone}<br/>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </Page>
  );
}
