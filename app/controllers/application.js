import Ember from 'ember';

export default Ember.Controller.extend({
  isNavbarShown: Ember.computed('currentPath', function() {
    var shown = true,
        cpath = this.get('currentPath');

    switch (cpath) {
      case 'resume.index':
        shown = false;
        break;
      case 'resume.templates':
        shown = false;
        break;
      case 'resume.preview':
        shown = false;
        break;
      case 'resume.edit':
        shown = false;
        break;
      case 'resume.download':
        shown = false;
        break;
    }

    return shown;
  }),
  isFooterShown: Ember.computed('currentPath', function() {
    var shown = true,
        cpath = this.get('currentPath');

    switch (cpath) {
      case 'resume.index':
        shown = false;
        break;
      case 'resume.templates':
        shown = false;
        break;
      case 'resume.preview':
        shown = false;
        break;
      case 'resume.edit':
        shown = false;
        break;
      case 'resume.download':
        shown = false;
        break;
    }

    return shown;
  })
});
