// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const DOMAIN_ROOT = '';

// ----------------------------------------------------------------------

export const PATH_DOMAIN = {
  root: DOMAIN_ROOT,
  home: path(DOMAIN_ROOT, '/home'),
};
