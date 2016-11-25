import { createElement } from 'cmmn';

import Navigation from './navigation';
import Footer from './footer';

import logoImg from './scutti-logo.svg';

import styles from './styles.scss';

import { facebook, instagram } from '../../constants';

export default class MainMenu {
  render(props) {
    return (
      <div className={styles.wrap.with(props.noContent ? 'no-content' : '')}>
        <a href="*/">
          <img src={logoImg} className={styles.logo} alt="Scutti" />
        </a>
        <p className={styles.headline}>
          Markets on Angelo
        </p>
        <Navigation nav={props.nav} />
        <div className={styles.socialMedia}>
          <a href={facebook} target="_blank"><i className="fa fa-facebook"></i></a>
          <a href={instagram} target="_blank"><i className="fa fa-instagram"></i></a>
        </div>
        <Footer fixes={!props.noContent} />
        <div className={styles.closeArea} />
      </div>
    );
  }
  mount(node) {
    window.openNav = function () {
      node.className = styles.wrap.with('open');
    };
    window.closeNav = function () {
      node.className = styles.wrap.with('');
    }
    node.childNodes[5].addEventListener('click', window.closeNav);
  }
}
