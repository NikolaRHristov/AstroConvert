# [astro-convert] 🫶

This **[Astro integration][astro-integration]** converts all your files into
different formats.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `astro-convert`, run the following from your project directory and
follow the prompts:

Using NPM:

```sh
npx astro add astro-convert
```

Using Yarn:

```sh
yarn astro add astro-convert
```

Using PNPM:

```sh
pnpx astro add astro-convert
```

### Install dependencies manually

First, install the `astro-convert` integration like so:

```sh
npm install -D -E astro-convert
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
import Convert from "astro-convert";

export default {
	integrations: [Convert()],
};
```

## Getting started

You can override any of the default options from the configurations of:

-   [sharp](src/Option/Image.ts)

or disable them entirely:

```ts
import Convert from "astro-convert";

export default {
	integrations: [
		Convert({
			Convert: false,
		}),
	],
};
```

Set `Logger` to `0` if you do not want to see debug messages. Default is `2`.

```ts
import Convert from "astro-convert";

export default {
	integrations: [
		Convert({
			Logger: 0,
		}),
	],
};
```

[astro-convert]: https://npmjs.org/astro-convert
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.
