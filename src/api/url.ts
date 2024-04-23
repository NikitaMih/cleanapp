import type { Endpoints } from './endpoints';

export const domainUrl = import.meta.env.NEXT_PUBLIC_DOMAIN;
export const baseUrl = 'https://hcateringback-dev.unitbeandev.com/api';

export const getStringParams = (params: string[] | string | undefined) => {
  if (!params) {
    return '';
  }
  if (Array.isArray(params)) {
    return params.join('&');
  }
  return params;
};

export const combineUrl = (
  endpoint: Endpoints,
  path: (string | number)[] = [],
  params?: string[] | string | undefined,
) => {
  let url = `${baseUrl}${endpoint}`;

  if (path.length) {
    url += `${path.join('/')}/`;
  }

  const query = getStringParams(params);
  if (query) {
    url += `?${query}`;
  }

  return url;
};
