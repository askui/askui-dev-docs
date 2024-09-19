/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const APIs = [
  {
    name: '🛠️  API',
    url: '../../api/API/table-of-contents',
    description: (
      <Translate id="gettingstarted.installlinux.description">
        {
          'API reference for TypeScript SDK.'
        }
      </Translate>
    ),
    cta: 'Start!',
    idbutton: 'learn-api-button',
  },
  {
    name: '🧱  AskUI Suite',
    url: '../../suite/Components/AskUI-Suite',
    description: (
      <Translate id="gettingstarted.installlinux.description">
        {
          'The components of the AskUI Suite.'
        }
      </Translate>
    ),
    cta: 'Start!',
    idbutton: 'learn-api-button',
  },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
  cta: string;
  idbutton: string;
}

function APICard({name, url, description, cta, idbutton}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg homepage-card">
      <div className={clsx('card')}>
        <Link className="" to={url} id={idbutton}>
          <div className="card__body">
            <Heading as="h3">{name}</Heading>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function APICardsRow(): JSX.Element {
  return (
    <div>
      <div className="row">
        {APIs.map((playground) => (
          <APICard key={playground.name} {...playground} />
        ))}
      </div>
    </div>
  );
}
