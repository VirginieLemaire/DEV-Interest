// eslint-disable-next-line import/prefer-default-export
export function slugify(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    // eslint-disable-next-line no-param-reassign
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  // eslint-disable-next-line no-param-reassign
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}
