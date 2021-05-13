## Ably in WebWorkers with Typescript

## Getting started
- `npm i` to install dependencies
- Change `ABLY_API_KEY` in `auth.ts` to have a valid API key that can generate a token.
  - Or alternatively do other things with Ably.
- `npx webpack` to build the app
- `npx serve` and visit the link

## Discovery
 We found that ably v1.2.3 works in Service Workers, but the latest v1.2.9 doesn't work. If you get a crash with a newer version, go back to v1.2.3, but hopefully it will be fixed soon. :)
 
## Motivation
To get Ably working in Cloudflare Workers, it needs to support WebWorkers. This is different to running in Google Cloud Functions or AWS Lambda, which run in NodeJS, not WebWorkers/ v8 isolates. Writing this project helped debug what was causing the issue, whether it was Cloudflare or Ably not supporting WebWorkers. It turns out Ably works fine at v1.2.3.