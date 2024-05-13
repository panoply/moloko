import { IGithubIssue } from 'types/moloko';

export function ghissue (options: IGithubIssue = {}) {

  const url = new URL('https://github.com/panoply/esthetic/issues/new');

  if (!('body' in options)) {
    options.body = [
      '<!-- DESCRIBE THE ISSUE -->',
      '',
      '',
      '<!-- !! DO NOT EDIT BELOW THIS LINE !! -->',
      '',
      `[ÆSTHETIC PLAYGROUND LINK](${window.location.href})`
    ].join('\n');
  }

  const types = [
    'body',
    'title',
    'labels',
    'template',
    'milestone',
    'assignee',
    'projects'
  ];

  for (const type of types) {

    let value = options[type];

    if (value === undefined) continue;

    if (type === 'labels' || type === 'projects') {
      if (!Array.isArray(value)) throw new TypeError(`The \`${type}\` option should be an array`);
      value = value.join(',');
    }

    url.searchParams.set(type, value);

  }

  return url.toString();
}
