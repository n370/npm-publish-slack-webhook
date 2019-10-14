### npm publish Slack Webhook

####  How to use

```bash
npm install @n370/npm-publish-slack-webhook <your-slack-webhook-url>
```

Open your package's package.json and add a `postpublish` script to it;

```json
{
    "scripts": {
        "postpublish": "npm-publish-slack-webhook <your-slack-webhook-url>"
    }
}
```
Every time you run `npm publish` and successfully publish a new package version you should get a message on slack like:

> `package@x.x.x` has been published!

#### Testing

##### With `npx`
```bash
npx @n370/npm-publish-slack-webhook <your-slack-webhook-url>
```

##### Against a local server

Start the test server included with the source files
```bash
node tests/server.js
```

Open another terminal tab, link the library using `npm link` and test it against the local server.

```bash
npm-publish-slack-webhook "http://localhost:1337/"
```
