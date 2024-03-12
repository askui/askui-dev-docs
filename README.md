# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
npm install
```

### Local Development

```shell
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### How to get Search to Work Locally

For your searchbar to work locally the above command is not sufficient.
You have to generate the static content and then serve it locally.

```shell
npm run build
npm run serve
```

### Build

```shell
npm run build
```

This command generates static content into the `dist` directory and can be served using any static contents hosting service.

### Vale Prose Linting

Before every commit, vale will run against every Markdown file under `docs/`.

Do the following to install _Vale_ and the AskUI style guide.

* [Install _Vale_ instructions](https://vale.sh/docs/vale-cli/installation/).
* Clone th [askui-vale repository](https://github.com/askui/askui-vale)
* Symlink the styles to your `.github` folder

```bash
ln -s <Path to cloned askui-vale-repository>/styles styles  
```

To run _Vale_ manually before committing:

```shell
# Switch to root directory first
vale docs
```

### Create a New Release Notes Entry

The blog is stored under `docs/blog`. Every entry gets its own folder and we use the following format as a naming convention `YYYY-MM-DD`. This makes sorting easier. Inside the folder you can store images and _maximal_ one Markdown file (`.md` file extension). The Markdown file contains your **Release Note** entry.

#### Anatomy of a Release Note File

Every **Release Note** has a metadata header which looks like this.
Choose a unique title and slug.

```yaml
---
title: 2023.12.13 Annotate DetectedElements from get()
slug: release-notes-annotate-detected-elements
authors: [leonmeier, johannesdienst]
tags: [ReleaseNotes]
hide_table_of_contents: false
---
```

#### Add an Author

If you want to add a new author follow the convention in `authors.yml`. The author-image has to be added to `docs/static/img`.

### Regenerate API Documentation

1. Head over to [askui-inference](https://github.com/askui/askui-inference#generate-fluent-api-and-documentation)
2. Copy over the generated documentation
3. Adjust api documentation wherever we override it in `UiControlClient`

## Contributing

### Branching

Your branch name should conform to the format `<issue id>-<issue title lower-cased and kebab-cased>`, e.g., let's say you have an issue named *Hello World* with id *AS-101*, the the branch name would be `AS-101-hello-world`. We use the issue id prefix to prepend a link to the issue to the commit message header. In some cases, when doing a quick fix of a typo etc. when there is no issue, feel free to just use a descriptive name of what you are doing, e.g., `fix-typo-in-example-readme`.

### Commit Message Standard

Commit messages should conform to [Conventional Commits Message Standard](https://www.conventionalcommits.org/en/v1.0.0/). Exceptions to this rule may be merge commits.

### Adding Dependencies

The [one version rule](https://opensource.google/documentation/reference/thirdparty/oneversion#:~:text=There%20may%20only%20be%20one,several%20reasons%20for%20this%20restriction.) should be followed as much as possible. In practice, this mean checking if a dependency to be added is already used by another package or meant to be used by multiple packages. If not, install it inside the corresponding package's root directory. If it is shared, install it in the project's root directory and make sure that you only need to depend on this single version in all packages. 

### Githooks

This repo uses [githooks](https://git-scm.com/docs/githooks) with [husky](https://github.com/typicode/husky) to lint and test the code, to help you stick to the commit message standard by opening up a cli for constructing the commit message on each commit, prepending the commit message with the issue number or linting the commit message etc. In some cases, e.g., when using a Git client such as [Git Tower](https://www.git-tower.com/) or [GitKraken](https://www.gitkraken.com/), cherry-picking, rebasing or in a ci pipeline, you may want to disable githooks, especially the interactive cli.

For skipping the interactive cli when commiting, set the environment variable `SKIP_CZ_CLI` to `true`.
```sh
$ export SKIP_CZ_CLI=true
```

For skipping all githooks, set the environment variable `HUSKY` to `0`.
```sh
$ export HUSKY=0
```

In a ci pipeline, the githooks are skipped by default.
