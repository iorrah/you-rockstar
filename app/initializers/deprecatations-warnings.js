import Ember from 'ember';

export function initialize() {
  let list = ['ember-views.computed-tag-name'];

  Ember.Debug.registerDeprecationHandler((message, options, next) => {
    if (!list.includes(options.id)) {
      next(message, options);
    }
  });
}

export default { initialize };
