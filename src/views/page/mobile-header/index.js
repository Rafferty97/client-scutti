import { createElement } from 'cmmn';

import styles from './styles.scss';

export default class MobileHeader {
  render() {
    return (
      <div className={styles.wrap}>
        <a className={styles.bars} href="#"><i className="fa fa-bars" /></a>
        <a href="*/"><img className={styles.logo} src={require('../../main-menu/scutti-logo.svg')} /></a>
      </div>
    );
  }
  mount(node) {
    const link = node.childNodes[0];
    link.addEventListener('click', window.openNav);
  }
}
