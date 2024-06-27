---
sidebar_position: 5
pagination_next: general/Getting Started/write-your-first-instruction
---

# AskUI on Linux

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- __npm__ in version 7.10 or above (usually comes with the Node.js installation)
- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)
- An AskUI account. Don't have one? Sign up for a [7-day free trial here](https://www.app.askui.com)!
- :warning: [Information for Wayland](../../07-Troubleshooting/linux.md#wayland).

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our __AskUI Studio__ (for free).

Please [sign up for a 7-day free trial](https://www.app.askui.com).

## Installation

Open a directory where you would like to place the AskUI setup and run this command. The command will ask you a few questions on how to customize your setup. If you are unsure which value to select press the `Enter`-key to select the default value. Also keep your `workspace id` and your `access token` ready which you [created just before](#access-token) (We hope so 😉).

```shell
npx askui@latest init
```
