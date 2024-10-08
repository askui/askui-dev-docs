/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: '📦 Quickstart',
    url: 'https://github.com/askui/askui-try-out',
    description: (
      <Translate id="gettingstarted.gitpod.description">
        Try AskUI without any hassle in Gitpod.
      </Translate>
    ),
    cta: 'Try it now!',
    idbutton: 'github-try-out-button',
  },
  {
    name: '🪟 Windows',
    url: 'Installing%20AskUI/getting-started',
    description: (
      <Translate id="gettingstarted.installwindows.description">
        {
          'Learn how to automate on Windows.'
        }
      </Translate>
    ),
    cta: 'Get started!',
    idbutton: 'install-windows-button',
  },
  {
    name: '🤖 Android',
    url: 'Installing%20AskUI/getting-started-android',
    description: (
      <Translate id="gettingstarted.installandroid.description">
        {
          'Learn how to automate on Android.'
        }
      </Translate>
    ),
    cta: 'Get started!',
    idbutton: 'install-android-button',
  },
  {
    name: '👩🏻‍💻 macOS',
    url: 'Installing%20AskUI/getting-started-macos',
    description: (
      <Translate id="gettingstarted.installandroid.description">
        {
          'Learn how to automate on macOS'
        }
      </Translate>
    ),
    cta: 'Get started!',
    idbutton: 'install-macos-button',
  },
  {
    name: '💻 Linux',
    url: 'Installing%20AskUI/getting-started-linux',
    description: (
      <Translate id="gettingstarted.installlinux.description">
        {
          'Learn how to automate on Linux.'
        }
      </Translate>
    ),
    cta: 'Get started!',
    idbutton: 'install-linux-button',
  },
  {
    name: '🏢 Enterprise Checklist',
    url: 'Installing%20AskUI/enterprise-checklist',
    description: (
      <Translate id="gettingstarted.installenterprise.description">
        {
          'Setup in an enterprise environment.'
        }
      </Translate>
    ),
    cta: 'Get started!',
    idbutton: 'install-enterprise-button',
  },
  // {
  //   name: '📱 iOS',
  //   url: 'Installing%20AskUI/getting-started',
  //   description: (
  //     <Translate id="gettingstarted.installenterprise.description">
  //       {
  //         '🚧 Coming soon! 🚧'
  //       }
  //     </Translate>
  //   ),
  //   cta: 'Get started!',
  //   idbutton: 'install-iOS-button',
  // },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
  cta: string;
  idbutton: string;
}

function PlaygroundCard({name, url, description, cta, idbutton}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url} id={idbutton}>
              <Translate id="playground.tryItButton">{cta}</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallationCardsRow(): JSX.Element {
  return (
    <div>
      <div className="row">
        {Playgrounds.map((playground) => (
          <PlaygroundCard key={playground.name} {...playground} />
        ))}
      </div>
    </div>
  );
}
