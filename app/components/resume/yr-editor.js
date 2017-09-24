import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['editor'],
  tagName: Ember.computed(function() {
    return this.get('tn');
  }),
  isShowModeShown: Ember.computed('sm', function() {
    return this.get('sm');
  }),
  didInsertElement: function() {
    this.startObservingInput();
  },
  startObservingInput: function() {
    var e = this.$('input')

    e.on('focus', function() {
      $('.template .overlay').addClass('active');
    });

    e.on('blur', function() {
      $('.template .overlay').removeClass('active');
    });
  },
  actions: {
    edit: function() {
      this.$('.auto-mode input').focus();
    },
    remove: function() {
      this.set('content', '');
    }
  }
});
