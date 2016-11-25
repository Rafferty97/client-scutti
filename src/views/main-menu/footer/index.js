import { createElement } from 'cmmn';

import styles from './styles.scss';

import { getOffsetTop } from '../../theme/util';

import { phone, email, tradingHours } from '../../../constants';

export default class Footer {
  fetchProps(props) {
    return props;
  }
  render(props) {
    const mob = props.mobile ? 'mobile' : '';
    const persists = !props.fixes ? 'persists' : '';
    return (
      <div>
        <div className={styles.placeholder}></div>
        <div className={styles.wrap.with(mob, persists)}>
          <div className={styles.block}>
            <h4 className={styles.title}>Trading Hours</h4>
            {tradingHours}
          </div>
          <div className={styles.block}>
            <p>
              <strong>Corner Angelo & Coode St,<br/>South Perth WA 6151</strong>
            </p>
            <p>
              <strong>Phone:</strong> {phone}<br/>
              <strong>Email:</strong> {email}
            </p>
          </div>
        </div>
      </div>
    );
  }
  mount(_node, props) {
    if (!props.fixes) return;
    const nodes = _node.childNodes;
    document.addEventListener('scroll', () => {
      if (nodes[0] == null) return;
      const vpos = (getOffsetTop(nodes[0]) + nodes[1].offsetHeight + 20) - window.innerHeight;
      if (document.body.scrollTop > vpos)
        nodes[1].className = styles.wrap.with('fixed');
      else
        nodes[1].className = styles.wrap;
    });
  }
}
