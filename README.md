# daily-windows-server

[daily.windowsserver.admin.news](https://daily.windowsserver.admin.news): a
readable daily record of what changed across Windows Server documentation.

This repository holds the product: its configuration, its assets, and its
generated site. The generator, the workflows' steps and the test suite live in
[merill/dailynews-engine](https://github.com/merill/dailynews-engine).

## What it tracks

[`merill/windows-server-docs-mirror`](https://github.com/merill/windows-server-docs-mirror):
every Windows Server page on Microsoft Learn (about 2,600), rebuilt as Markdown
by [learn-mirror](https://github.com/merill/learn-mirror) four times a day at
the path of the source file Learn built it from. The mirror begins on
4 November 2026; its first commit is the initial import, and the archive starts
the day after.

Every page publishes at `windows-server/<path under WindowsServerDocs>`. The
source keeps mixed-case names (`OpenSSH/OpenSSH_KeyManagement`) that Learn
lowercases; Learn ignores case, so the routed URLs resolve. The test suite checks
the route against every URL the crawl fetched, with no exceptions today.

The role folder settles the product: `identity/ad-fs`, `identity/ad-cs`, the rest
of `identity/` (AD DS, LAPS, privileged access), DNS/DHCP/IPAM, networking,
Remote Desktop Services, Remote Access, storage, failover clustering, Hyper-V,
WSUS, administration (including the ~870 Windows command reference pages, which
also carry the "Command reference" topic), Windows Admin Center and Azure Arc,
security and local AI. Get-started, licensing and release pages stay under
Windows Server.

Message Center items are matched on "Windows Server", not bare "Windows", which
would pull in the client.

## v1 has no email

`email: { enabled: false }`. The site is the whole product for now.

## Working on it

```bash
npm run engine:link     # links ../dailynews-engine into node_modules
npm run docs:clone      # clones the mirror into windows-server-docs/
npm test
TZ=UTC npm run build:site
npm run dev
```

`TZ=UTC` matters: without it every date bucket shifts.

## Deploying

Cloudflare Pages, connected to this repository: production branch `main`, no
build command, output directory `website`. Summaries authenticate to OpenAI
with workload identity federation, not an API key: set the repository variables
`OPENAI_IDENTITY_PROVIDER_ID` and `OPENAI_SERVICE_ACCOUNT_ID` (see the engine
README's OpenAI credentials section). Optional secrets: `DISCORD_WEBHOOK_URL`
and `HEALTHCHECKS_PING_URL`.
