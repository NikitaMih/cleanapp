export const createQueryString = (selectedParams: any, searchParams: any) => {
  const params = new URLSearchParams(searchParams);

  selectedParams.forEach(({ name, value }) => {
    if (value?.length) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
  });

  return params.toString();
};

export const checkFields = (fields: any) => {
  return Object.values(fields).some(item => item === '');
};
