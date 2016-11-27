import { createElement } from 'cmmn';

import Page from '../page';
import SubNav from '../sub-nav';

import '../theme';
import typo from '../theme/typography.scss';

const subnavitems = [
  ['', 'About Us', 'about/'],
  ['values', 'Our Values', 'about/values/'],
];

export const getMeta = (props) => ({
  title: 'About',
  bodyClass: 'bk-antipasto'
});

export default props => {
  const thisPage = subnavitems.findIndex(item => item[0] === props.subpage);
  return (
    <Page nav={['about']}>
      <SubNav items={subnavitems} active={thisPage} />
      <div className={typo.bodyType}>
        <h1>{subnavitems[thisPage][1]}</h1>
        { props.subpage === '' ? (
          <wrapper>
            <p>At Scutti Markets on Angelo we are passionate about fresh, simple and delicious food. We are committed to providing customers with a choice of the finest, freshest seasonal produce and products. We will do this by:</p>
            <ul>
              <li>focusing on West Australian fresh produce and products</li>
              <li>focusing on Australian fresh produce and products</li>
              <li>sourcing unique gourmet products from around the world</li>
            </ul>
          </wrapper>
        ) : null }
        { props.subpage === 'values' ? (
          <wrapper>
            <p>These are the values that underpin our every day work:</p>
            <table className={typo.bodyType.definitions}>
              <tbody>
                <tr><td><strong>Quality</strong></td><td>&mdash;</td><td>we believe in providing the highest quality produce and products to our customers</td></tr>
                <tr><td><strong>Customers</strong></td><td>&mdash;</td><td>we believe in providing customers with exceptional shopping experiences time and time again</td></tr>
                <tr><td><strong>Team&nbsp;work</strong></td><td>&mdash;</td><td>we believe in having fun at work and promoting a cohesive team environment where we support each other to do our best each day</td></tr>
              </tbody>
            </table>
          </wrapper>
        ) : null }
        {/*
        <p>
          Scutti Markets on Angelo commenced trading as Angelo Street Markets on the corner of Angelo & Coode Streets in South Perth in 1992. Domenic and Lucy Scutti and sons saw the opportunity to expand and diversify from selling predominantly fruit & vegetables to include other gourmet products such as deli meats, cheese, bread, eggs & selected groceries.
        </p>
        <p>
          Since this time the business has flourished and the name Scutti has become synonymous with the provision of the highest quality foodstuffs. With a wealth of experience in the fruit & vegetable industry, Domenic and Lucy Scutti have passed on to their sons the attributes of providing exceptional customer service and the freshest and most delicious variety of foods possible.
        </p>
        <p>
          Over the last 20 years Scutti's customers have been provided with fresh local produce that has expanded into authentic continental delicatessen with all kinds of gourmet delicacies from Australia and abroad. This includes prepared meals and dishes for either onsite dining or takeaway. These include winter soups, continental rolls, quiches, salads and delicious deserts, all prepared onsite and all with Scutti's ingredients.
        </p>
        <p>
          {'The incorporation of an alfresco dining cafe in 2008 allows customers to enjoy freshly brewed coffee and treats in the thrive and bustle of the local community. It\'s the perfect way to start the day or to reenergise with an afternoon espresso.'}
        </p>
        <p>
          {'Scutti continues to expand it\'s products into unique lines sourced from all parts of the globe. These include the special Altino and Bella Lucia ranges which comprise the finest oils, vinegars, pastas and olives available anywhere.'}
        </p>
        <p>
          The friendly Scutti staff would be delighted to share their passion for food with you.
        </p>
        */}
      </div>
    </Page>
  );
}
