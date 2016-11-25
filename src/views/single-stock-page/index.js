import { createElement } from 'cmmn';

import Page from '../page';

import '../theme';
import typo from '../theme/typography.scss';
import styles from './styles.scss';
import bks from '../stock-page/backgrounds.scss';

import contentObj from './content';

export const getMeta = props => ({
  title: contentObj[props.subpage].title
});

export default props => {
  const content = contentObj[props.subpage] || {};
  return (
    <Page nav={['stock']} full={true}>
      <div className={typo.bodyType}>
        <h1>{content.title}</h1>
        {content.copy}
        <div className={styles.fullWidthImg + bks[content.bk]}></div>
      </div>
    </Page>
  );
}
