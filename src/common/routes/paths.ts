// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const DOMAIN_ROOT = '';

// ----------------------------------------------------------------------

export const PATH_DOMAIN = {
  root: DOMAIN_ROOT,
  shop: path(DOMAIN_ROOT, '/yurs/shop'),
};
