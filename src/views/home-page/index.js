import { createElement } from 'cmmn';

import MainMenu from '../main-menu';

import '../theme';
import styles from './styles.scss';

import { tradingHours } from '../../constants';

export const getMeta = () => ({
  title: 'Scutti | Markets on Angelo',
  bodyClass: 'bk-antipasto'
});

export default props => (
  <div>
    <div className={styles.menuWrap}>
      <MainMenu nav={[]} noContent={true} />
    </div>
    <div className={styles.hero}>
      <div className={styles.logoWrap}>
        <img src={require('../main-menu/scutti-logo.svg')} />
        <h1>Markets on Angelo</h1>
      </div>
      <div className={styles.contactWrap}>
        <h4 className={styles.title}>Trading Hours</h4>
        {tradingHours}
        <p>
          <strong>Corner Angelo & Coode St,<br/>South Perth WA 6151</strong>
        </p>
      </div>
    </div>
  </div>
);
