import Ember from 'ember';
import UserMixin from 'you-rockstar/mixins/data/user';

export default Ember.Route.extend(UserMixin, {
  titleToken: function() {
    return this.model().get('header.name') + ' Resumé';
  },
  model: function() {
    return this.get('user');
  }
});
