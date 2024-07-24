import React from 'react';
import sdk from '@stackblitz/sdk';

export function AskUIEmbedded(props): JSX.Element {
  const { projectId, embedOpts = {}, openOpts,
    files, settings, ...other }
    = props || {};
  async function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // TODO create remote machine and get AskUI Controller URL + VNC URL
    const remoteDeviceControllerURL = 'http://localhost:6769';
    files['.env'] = files['.env'].replace("RACU", remoteDeviceControllerURL);
    console.log(files['.env'])
    const vm = await sdk.embedProjectId(
      'embedStackBlitz',
      projectId, 
      {
        hideExplorer: false,
        showSidebar: true,
        hideNavigation: false,
        height: 600,
        openFile: 'askui_example/my-first-askui-test-suite.test.ts',
      }
    );
    await vm.applyFsDiff({
      create: {
        '.env': files['.env'],
      },
      destroy: [],
    });
  }
  return (
    <button type="button" {...other} onClick={handleClick} class="button button--secondary">Try in Browser!</button>
  );
}
