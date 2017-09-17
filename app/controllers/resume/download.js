import Ember from 'ember';

export default Ember.Controller.extend({
  resume: Ember.inject.controller(),
  actions: {
    genPDF: function() {
      window.print();
    }
  }
});
