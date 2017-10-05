import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement: function() {
    this.startPoppover();
  },
  willDestroyElement: function() {
    this.dismissPoppover();
  },
  startPoppover: function() {
    var options = this.getPoppoverOptions();

    Ember.$(function() {
      Ember.$('[data-toggle="popover"]').popover(options);
    });
  },
  getPoppoverOptions: function() {
    var template = Ember.$('.poppover-template').innerHTML;
    var content = Ember.$('.poppover-content').html();

    return {
      template: template,
      placement: 'right',
      title: 'Download Tip',
      trigger: 'hover',
      content: content,
      html: true
    };
  },
  dismissPoppover: function() {
    Ember.$('[data-toggle="popover"]').popover('hide');
  }
});
