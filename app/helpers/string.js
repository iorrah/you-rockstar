import Ember from 'ember';

export function string(params) {
  const str = params[0];
  return str || (str === '');
}

export default Ember.Helper.helper(string);
