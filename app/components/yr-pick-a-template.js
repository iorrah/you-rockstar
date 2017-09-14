import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select: function(template) {
      this.sendAction('select', template);
    }
  }
});
