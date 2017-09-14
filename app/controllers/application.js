import Ember from 'ember';

export default Ember.Controller.extend({
  isNavbarShow: true,
  observesCurrentPath: Ember.observer('currentPath', function() {
    this.set('isNavbarShow', false);

    var self = this;

    setTimeout(function() {
      self.set('isNavbarShow', true);
    }, 100);
  }),
});
