import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  actions: {
    scrollToElem: function(selector) {
      this.get('resume').send('scrollToElem', selector);
    },
    selectTemplate: function(template) {
      this.get('resume').send('selectTemplate', template);
    },
    selectPalette: function(palette) {
      this.get('resume').send('selectPalette', palette);
    }
  }
});
