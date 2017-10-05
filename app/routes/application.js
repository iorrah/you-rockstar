import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    var title = '';

    if (tokens[0].indexOf('_') === 0) {
      title = 'You Rockstar • ' + tokens[0].substr(1);
    } else {
      title = tokens.join(' • ');
    }

    return title;
  }
});
