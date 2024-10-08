import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Get Started',
    Svg: require('../../static/img/icons/engineering_white.svg').default,
    url: 'docs/general/Getting%20Started/start',
    description: (
      <>
        Follow a step-by-step tutorial to set up your development environment.
      </>
    ),
  },
  {
    title: 'SDK',
    Svg: require('../../static/img/icons/engineering_white.svg').default,
    url: 'docs/category/how-to-select-elements',
    description: (
      <>
        Learn everything to write AskUI workflows efficiently.
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('../../static/img/icons/engineering_white.svg').default,
    url: 'docs/api/API/table-of-contents',
    description: (
      <>
        Consult our API documentation for every AskUI command available.
      </>
    ),
  },
  {
    title: 'AskUI Suite',
    Svg: require('../../static/img/icons/engineering_white.svg').default,
    url: 'docs/suite/Components/AskUI-Suite',
    description: (
      <>
        The AskUI Suite manages your AskUI projects with a powerful CLI.
      </>
    ),
  },
  {
    title: 'AskUI Studio',
    Svg: require('../../static/img/icons/engineering_white.svg').default,
    url: 'docs/studio/overview',
    description: (
      <>
        Learn how to create credentials, manage your workspaces, billing and plans.
      </>
    ),
  },
];

function Feature({ title, Svg, description, url }) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="card">
        <Link to={url}>
          <div className="card__body card-body-overview">
            <Svg
              className={clsx(styles.featureSvg, 'margin-vert--sm')}
              alt={title}
            />
            <div style={{marginLeft: 40}}>
              <h4 className="margin-vert--none">{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
