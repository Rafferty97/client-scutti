import { createElement } from 'cmmn';

import styles from './styles.scss';

export default props => (
  <ul className={styles.wrap}>
    { props.items.map((item, ind) => (
      <li className={styles.item.with(ind == props.active ? 'active' : '')}>
        <a href={ind == props.active ? null : '*/' + item[2]}>{ item[1] }</a>
      </li>
    ))}
  </ul>
);
