import { createElement } from 'cmmn';

import MainMenu from '../main-menu';
import MobileHeader from './mobile-header';
import Footer from '../main-menu/footer';

import '../theme';
import styles from './styles.scss';

export default props => (
  <div className={styles.wrap.with(props.full ? 'full' : '')}>
    <MainMenu nav={props.nav} />
    <MobileHeader />
    {props.children}
    <Footer mobile={true} />
  </div>
);
