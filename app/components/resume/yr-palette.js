import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    selectPalette: function(palette) {
      this.sendAction('selectPalette', palette);
    }
  }
});
