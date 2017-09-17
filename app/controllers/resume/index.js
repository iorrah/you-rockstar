import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  actions: {
    scrollToElem: function(selector) {
      this.get('resume').send('scrollToElem', selector);
    },
    select: function(template) {
      this.get('resume').send('select', template);
    },
    selectPalette: function(palette) {
      this.get('resume').send('selectPalette', palette);
    }
  }
});
