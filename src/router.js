import { createElement } from 'cmmn';

import * as home from './views/home-page';
import * as about from './views/about-page';
import * as stock from './views/stock-page';
import * as stockSingle from './views/single-stock-page';
import * as catering from './views/catering-page';
import * as contact from './views/contact-page';

function route(props) {
  let page = home;
  let viewProps = {};
  if (props.route.length > 0) {
    switch (props.route[0]) {
      case 'about':
        page = about;
        viewProps.subpage = props.route.length > 1 ? props.route[1] : '';
        break;
      case 'stock':
        page = stock;
        if (props.route.length > 1) {
          page = stockSingle;
          viewProps.subpage = props.route[1];
        }
        break;
      case 'catering':
        page = catering;
        break;
      case 'contact-us':
        page = contact;
        break;
    }
  }
  return { page, viewProps };
}

export default (props) => {
  const { page, viewProps } = route(props);
  const meta = page.getMeta ? page.getMeta(viewProps) : {};
  const View = page.default;
  const title = (meta.title || 'Untitled') + (props.route.length == 0 ? '' : ' | Scutti');
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href={require('./views/theme/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={require('./views/theme/favicon-32x32.png')} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta charset="utf-8" />
        <title>{title}</title>
      </head>
      <body className={meta.bodyClass}>
        <View {...viewProps} />
      </body>
    </html>
  );
};
