---
sidebar_position: 5
pagination_next: general/Getting Started/write-your-first-instruction
---

# AskUI on Linux

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- __npm__ in version 7.10 or above (usually comes with the Node.js installation)
- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)
- :warning: [Information for Wayland](../../07-Troubleshooting/linux.md#wayland).

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our __AskUI Studio__ (for free).

Please [fill out this form](https://www.askui.com/demo) to schedule a demonstration or request a trial to obtain access to __AskUI Studio__.

## Installation

Open a directory where you would like to place the AskUI setup and run this command. The command will ask you a few questions on how to customize your setup. If you are unsure which value to select press the `Enter`-key to select the default value. Also keep your `workspace id` and your `access token` ready which you [created just before](#access-token) (We hope so 😉).

```shell
npx askui@latest init
```

:::note

To create and serve a static HTML-Report you have to install [Allure](https://github.com/allure-framework/allure2#download) and then call `allure serve ./allure-results` from your root-directory.

:::
