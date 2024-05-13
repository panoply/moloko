import { Octokit } from '@octokit/core';
import { randomUUID } from 'node:crypto';
import type { Handler, HandlerEvent, Config } from '@netlify/functions';

const handler: Handler = async (event: HandlerEvent) => {

  const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  });

  const { data: { files } } = await octokit.request('GET /gists/{gist_id}', {
    gist_id: 'f959466bbadede97d8b40b2f9544b320',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  if (
    !(files &&
    'links.json' in files &&
    files['links.json'] &&
    'content' in files['links.json'] &&
    files['links.json'].content)) return;

  const links: { [path: string]: string } = JSON.parse(files['links.json'].content);

  if (!links) return;

  const pathname = `r-${randomUUID()}`;
  const hash = event.path;

  links[pathname] = hash;

  await octokit.request('PATCH /gists/{gist_id}', {
    gist_id: 'f959466bbadede97d8b40b2f9544b320',
    files: {
      'files.json': {
        content: JSON.stringify(links)
      }
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ pathname })
  };
};

export const config: Config = {
  path: '/shortener',
  method: [ 'POST', 'GET' ]
};

export { handler };
