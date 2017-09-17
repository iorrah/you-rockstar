import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  actions: {
    zoom: function(direction) {
      const JUMP = 0.09;
      var curr = null, goTo = null;
      var e = Ember.$('.template-container');

      curr = e[0].getBoundingClientRect().width / e[0].offsetWidth;

      // debugger

      switch (direction) {
        case 'in':
          goTo = curr + JUMP;
          break;
        case 'out':
          goTo = curr - JUMP;
          break;
      }

      e.css({ 'transform': 'scale(' + goTo + ')'});
    }
  }
});
