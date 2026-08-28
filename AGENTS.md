# Architecture

Use Astro for the website architecture.

# Website content

Use ASD-STE100 Simplified Technical English for all text shown on the website.

- Use plain, approved words.
- Use active voice.
- Write one instruction or idea in each sentence.
- Use short sentences and short paragraphs.
- Explain any required long or technical word at once.
- Return only needed information.
- Do not add background detail or long summaries.

When website text asks the user to choose:

- Give no more than two options.
- Give only the facts needed to choose fast.
- Mark one option as recommended.

# Deploy

Deploy the site to Cloudflare Pages after a user asks to deploy.

1. Run `pnpm run build`.
2. Run `pnpm dlx wrangler pages deploy ./dist --project-name optcg-deck-learn`.
3. Report `https://optcg-deck-learn.pages.dev`.

# Guide source

Ground deck guide text in this video:

`https://youtu.be/pW0WQAHiZyk?si=_8f0yDqn1B07T95X`

Use official card text to check card effects.
Do not add a card claim that the video or official card text does not support.

# Reference card data

`reference/card-data/` is local source material. Git does not track it.

When the site needs an asset from this folder, copy the asset into the site asset folder.
Do not add a code path or link to `reference/card-data/`.
