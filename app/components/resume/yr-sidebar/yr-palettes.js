import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select: function(palette) {
      this.sendAction('select', palette);
    }
  }
});
