export const dateStringToDate = (dateString: string): Date => {
  const splitDate = dateString.split('/');
  return new Date(+splitDate[2], +splitDate[1] - 1, +splitDate[0]); // month is 0 indexed, hence the `- 1`
};
