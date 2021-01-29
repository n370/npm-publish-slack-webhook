#!/usr/bin/env node

const cp = require('child_process');
const http = require('http');
const https = require('https');
const path = require('path');
const { URL } = require('url');

const packagejson = require(path.join(process.cwd(), 'package.json'));

const { hostname, port, protocol, pathname } = new URL(process.argv[2]);

const package = {
    name: `${packagejson.name}@${packagejson.version}`
};

const message = {
    "text": `> \`${package.name}\` has been published!`
};

cp.exec(`npm info ${package.name}`, (err, stdout) => {
    if (stdout.length) {
        const req = (protocol.match('https') ? https : http).request({
            hostname,
            path: pathname,
            port,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (res) => {
            res.on('data', (data) => {
                process.stdout.write(data);
            });
        });

        req.write(JSON.stringify(message));

        req.end();
    }
});
