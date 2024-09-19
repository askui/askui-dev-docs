/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Integrations = [
  {
    name: '🐙  GitHub',
    url: '../Integrations/github-actions',
    idbutton: 'github-actions-button',
  },
  {
    name: '🦊  Gitlab',
    url: '../Integrations/gitlab-ci',
    idbutton: 'gitlab-ci-button',
  },
  {
    name: '🌊  Azure DevOps',
    url: '../Integrations/azure-devops',
    idbutton: 'azure-devops-button',
  },
  {
    name: '🐳  Docker',
    url: '../Integrations/containers',
    idbutton: 'docker-button',
  },
];

interface Props {
  name: string;
  url: string;
  idbutton: string;
}

function IntegrationCard({name, url, idbutton}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg homepage-card">
      <div className={clsx('card')}>
        <Link className="" to={url} id={idbutton}>
          <div className="card__body">
            <Heading as="h3">{name}</Heading>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function IntegrationsCardsRow(): JSX.Element {
  return (
    <div>
      <div className="row">
        {Integrations.map((playground) => (
          <IntegrationCard key={playground.name} {...playground} />
        ))}
      </div>
    </div>
  );
}
