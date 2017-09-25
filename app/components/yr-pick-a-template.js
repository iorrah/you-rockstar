import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectTemplate: function(template) {
      this.sendAction('selectTemplate', template);
    }
  }
});
