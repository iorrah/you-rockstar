import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  templateComponentName: Ember.computed(function() {
    return 'yr-templates/yr-template-' + this.get('resume.template.id');
  }),
  actions: {
    zoom: function(direction) {
      const JUMP = 0.09;
      var curr = null, goTo = null;
      var e = Ember.$('.template-container');
      curr = e[0].getBoundingClientRect().width / e[0].offsetWidth;

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
