import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement: function() {
    this.startSideBar();
    // $('.menu-toggle').first().click();
  },
  startSideBar: function() {
    $('.menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  },
  someProperty: Ember.computed(function() {
    // ...
  }),
  areTemplatesShown: true,
  arePalettesShown: false,
  actions: {
    activeMenu: function(menu) {
      if (menu == 'templates') {
        this.set('arePalettesShown', false);
        this.set('areTemplatesShown', true);
      } else if (menu == 'palettes') {
        this.set('areTemplatesShown', false);
        this.set('arePalettesShown', true);
      }
    },
    selectTemplate: function(template) {
      this.sendAction('selectTemplate', template);
    },
    selectPalette: function(palette) {
      this.sendAction('selectPalette', palette);
    }
  }
});
