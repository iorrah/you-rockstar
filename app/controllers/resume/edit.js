import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  templateComponentName: Ember.computed(function() {
    return 'yr-templates/yr-template-' + this.get('resume.template.id');
  }),
  actions: {
    selectTemplate: function(template) {
      this.get('resume').send('selectTemplate', template);
    },
    selectPalette: function(palette) {
      this.get('resume').send('selectPalette', palette);
    }
  }
});
