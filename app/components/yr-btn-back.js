import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    goBack() {
      window.history.back();
    }
  }
});
