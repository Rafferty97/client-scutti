import { createElement } from 'cmmn';

import styles from './styles.scss';

const links = [
  ['about', 'About', 'about/'],
  ['stock', 'Our Shop', 'stock/'],
  // ['store', 'Online Store', 'store/'],
  ['catering', 'Catering', 'catering/'],
  ['contact', 'Contact Us', 'contact-us/']
];

export default props => {
  const nav = props.nav || [];
  if (nav.length < 1) nav[0] = '';
  return (
    <ul className={styles.wrap}>
      { links.map(item => (
        <li className={styles.item.with(item[0] === nav[0] ? 'active' : '')}>
          <a href={'*/' + item[2]}>{ item[1] }</a>
        </li>
      ))}
    </ul>
  );
}
