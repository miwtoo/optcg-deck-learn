# OPTCG Deck Learn

An Astro site for One Piece Card Game deck guides.

Published site: https://miwtoo.github.io/optcg-deck-learn/

## Deploy

1. Run `pnpm run build`.
2. Push the changes to `main`.

Set the repository Pages Source setting to `GitHub Actions`.

## Setup

Requires Node.js and pnpm.

```sh
pnpm install
pnpm dev
```

## Card data

Card-data snapshots are machine-local. Git does not track them.

Requires Rust and Cargo.

```sh
cargo install vegapull
```

Run these commands from the repository root:

```sh
vega pull all --language english --output ./reference/card-data
vega pull all --language english-asia --output ./reference/card-data
vega pull all --language japanese --output ./reference/card-data
```

The output folder name is not fixed.
