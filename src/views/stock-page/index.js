import { createElement } from 'cmmn';

import Page from '../page';

import '../theme';
import typo from '../theme/typography.scss';
import styles from './styles.scss';
import bks from './backgrounds.scss';

import { stockItems } from '../../constants';

export const getMeta = () => ({
  title: 'Our Shop'
});

export default props => {
  return (
    <Page nav={['stock']} full={true}>
      <div className={typo.bodyType}>
        <h1>Our Shop</h1>
      </div>
      <div className={styles.grid}>
        { stockItems.map(item => (
          <div className={styles.tile + bks[item.bk].with('small')}>
            <h2 className={styles.tile.title}>{item.title}</h2>
            <a className={styles.tile.link} href={'*/stock/' + item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </Page>
  );
}
