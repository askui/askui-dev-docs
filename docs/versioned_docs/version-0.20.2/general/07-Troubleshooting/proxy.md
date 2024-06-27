---
sidebar_position: 6
---

# Proxy

In enterprises, [proxies](https://en.wikipedia.org/wiki/Proxy_server) are a standard to secure and control network traffic.

A problem with a proxy can occur at two points in time:

* Installing AskUI
* AskUI Controller connection to AskUI Inference

## Installing AskUI Through NTLM or Kerberos Proxy Server
A _Windows New Technology LAN Manager_ (NTLM) or _Kerberos_ proxy requires you to authenticate yourself. This is done via your currently logged in Windows user or the __username/password__ combination (Linux, macOS). The easiest way to do this is to install a local proxy that handles the handshake with the proxy for you.

### Install Local Proxy
We recommend [_Px_ as a local proxy](https://github.com/genotrance/px). Install it in your preferred way and start it. The default port it runs on is `3128`.

:::tip
Choose the binary option if a package manager is not feasible in your environment.
:::

### Windows Startup
You can add _Px_ to the startup for the binary zipped option in Windows like this:

1. Create a `px-start.bat` file within the unzipped folder, for example, `c:\tools\px` with the content:
    
    ```bash
    cd c:\tools\px (or whatever path you unzipped the archive to)
    px.exe
    ```
    
2. Double-Click on the `px-start.bat` file to start _Px_
3. _Optional_: Set up _Px_ to autostart on system startup so you don’t have to start it manually each time you want to use it 
    1. [Create a link](https://www.digitalcitizen.life/2-ways-generate-link-shared-network-folder-or-library/#:~:text=If%20you're%20using%20Windows%2010%2C%20hold%20down%20Shift%20on,path%E2%80%9D%20in%20the%20contextual%20menu.) to `px-start.bat`
    2. Open the startup folder with `Windows logo key + R`, enter **`shell:startup`**
    3. Move the link to `px-start.bat` into this folder

### Create `.npmrc` file for `npm`
Create a `.npmrc` file in your AskUI project. You want to make sure that:

* `registry` and `noproxy` point to your companies registry (i.e. Artifactory)
* `proxy` and `https-proxy` point to the local _Px_ proxy

```bash
registry=<company-registry-url>
proxy=http://127.0.0.1:3128
https-proxy=http://127.0.0.1:3128
noproxy=<company-registry-url>
```

### Set Environment Variables
Setting the proxy inside `.npmrc` does not cover all cases. Sometimes a separate `node` command spawns a new process which does not inherit the proxy settings. Therefore you need to set the environment variable `HTTPS_PROXY` like this:

* [Windows instructions](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)

```shell
# Linux and macOS
# Add it to your favourite shell
# at startup if necessary
export HTTPS_PROXY=http://127.0.0.1:3128
```

## AskUI Controller Connection to AskUI Inference
We describe two ways to connect to our backend AskUI Inference.

### Using Default Configuration with hpagent

 Per default, our library uses [hpagent](https://github.com/delvedor/hpagent) to support the use of HTTP and HTTPS proxies. `hpagent` is an open source package which provides HTTP(S) proxies that keeps connections alive. To use it, you need to
1. install `hpagent`
```bash
npm install --save-dev hpagent 
```
2. configure which proxies to use by setting the proxies' URLs using the environment variables `HTTP_PROXY` or `HTTPS_PROXY`
```bash
export HTTP_PROXY=http://<your-proxy-url>
export HTTPS_PROXY=https://<your-proxy-url>
```

### Manually Configuring the HTTP and HTTPS Agent

If you need even more control, you can also configure an HTTP agent and HTTPS agent supporting your proxy manually for either one or both, 
- the AskUI Controller (configuring the `UiController`) running on the OS you would like to control and
- the Inference API (configuring the `UiControlClient`) running on our servers and providing the vision to run your tests.

In the following example we are going to use [hpagent](https://github.com/delvedor/hpagent) again but you can use any HTTP and HTTPS agents that support proxies, for example, the [http.Agent](https://nodejs.org/api/http.html#class-httpagent) or the [https.Agent](https://nodejs.org/api/https.html#class-httpsagent) provided by the `http` and `https` module of Node.js, respectively.

1. Install `hpagent`
```bash
npm install --save-dev hpagent 
```

2. Import `hpagent` (or the agent(s) you would like to use) and configure the `UiController` and/or the `UiControlClient` inside the `test/helpers/askui-helper.ts` file.
```typescript
import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent'; // <-- Add imports
// other code

beforeAll(async () => {
  // Add this block
  const httpProxyUrl = "http://<your-proxy-url>" // <-- Adapt http proxy url
  const httpsProxyUrl = "https://<your-proxy-url>" // <-- Adapt https proxy url

  const proxyAgents = {
    http: new HttpProxyAgent({
      proxy: httpProxyUrl,
    }),
    https: new HttpsProxyAgent({
      proxy: httpsProxyUrl,
    }),
  }

  // other code

  uiController = new UiController({
    proxyAgents // <-- Set proxy agents
  });
  
  // other code

  aui = await UiControlClient.build({
    proxyAgents // <-- Set proxy agents
  });

  // other code
})
```

Here are some examples for the `httpProxyUrl` (for more details see [docs from hpagent](https://github.com/delvedor/hpagent#usage))

| Proxy Type | URL | Description | 
| --- | --- | --- | 
| HTTP | for example http://proxy.company.com:8293 |  A HTTP proxy without authentication |
| HTTP + Basic Auth | for example http://username:password@proxy.company.com:8293 |  A HTTP proxy with authentication |
| SOCKET |  |  Socket proxies are not supported by `hpagent` |

Here are some examples for the `httpsProxyUrl` (for more details see [docs from hpagent](https://github.com/delvedor/hpagent#usage))

| Proxy Type | URL | Description | 
| --- | --- | --- | 
| HTTPS | for example https://proxy.company.com:8293 |  A HTTPS proxy without authentication |
| HTTPS + Basic Auth | for example https://username:password@proxy.company.com:8293 |  A HTTP proxy with authentication.  |
| SOCKET |  |  Socket proxies are not supported by `hpagent` |

### Deep Package Inspection

Company proxies, like [Zscalar](https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy), use [deep package inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) to analyze the network traffic. Such proxies are adding self-signed certificates to the HTTPS request to break up the TLS connection.

This can result in the following error messages:
```
 RequestError: self signed certificate
```
or
```
 RequestError: unable to verify the first certificate
```

You can add a self-signed certificate as extra CA Certs to solve this problem as detailed in the next section.

#### Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)
The following step-by-step instructions will show you how to add the correct certificate as extra CA Certs.

1. Open the certificate viewer in your browser.

    Chrome: Depending on your operating system there is a **Lock**-icon left of your browser bar that opens the certificate viewer directly or another icon that opens a _Site Information_ menu where you have to select **Connection is Secure** -> **Certificate is Valid**

    Firefox: Click the **Lock**-icon left of your browser bar. click on **Connection Secure** -> **More Information**. Select the tab **Security**. Click **View Certificate**.

2. Chrome: Open the **Details** tab.

   Firefox: Select the **GTS Root R1** certificate.
3. Chrome: Select the Certificate **GTS Root R1** and click **Export...** on the bottom right.

   Firefox: Under **Miscellaneous**, you can download the certificate.
4. Save it somewhere you can find it.

![](./images/proxy-windows-chrome-download-root-certificate.png)
<figcaption>*Windows Chrome: Download the certificate in the three steps marked inside the picture above.*</figcaption>

![](./images/proxy-macos-chrome-download-root-certificate1.png)
<figcaption>*macOS/Unix Chrome: Open the certificate viewer step 1.*</figcaption>

![](./images/proxy-macos-chrome-download-root-certificate2.png)
<figcaption>*macOS/Unix Chrome: Open the certificate viewer step 2.*</figcaption>

![](./images/proxy-macos-chrome-download-root-certificate2.png)
<figcaption>_macOS/Unix Chrome: Open the certificate viewer step 3.*</figcaption>

##### Windows:

Add the following to your `<project>\.askui\Settings\AskuiEnvironmentSettings.json`

```json
{
	...
  "environmentVariables": {
    ...
    "NODE_EXTRA_CA_CERTS": "<insert absolute path of certificate>"
    ...
  },
  ...
}
```

##### macOS/Unix:
```bash
export NODE_EXTRA_CA_CERTS='<insert absolute path of certificate>'
```

**Additional information:**
- [Get Zscalar custom certificate](https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store) 
