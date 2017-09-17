import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  actions: {
    selectTemplate: function(template) {
      this.get('resume').send('selectTemplate', template);
    },
    selectPalette: function(palette) {
      this.get('resume').send('selectPalette', palette);
    }
  }
});
