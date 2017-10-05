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
    var e = Ember.$('#' + this.elementId + ' input');

    e.on('focus', function() {
      Ember.$('.template .overlay').addClass('active');
    });

    e.on('blur', function() {
      Ember.$('.template .overlay').removeClass('active');
    });
  },
  actions: {
    add: function() {
      this.set('content', '');
      var self = this;

      setTimeout(function() {
        var elem = Ember.$('#' + self.elementId + ' .auto-mode input');

        if (elem && elem.length) {
          elem.focus();
        } else {
          alert('does not exist');
        }
      }, 100);
    },
    edit: function() {
      Ember.$('#' + this.elementId + ' .auto-mode input').focus();
    },
    remove: function() {
      this.set('content', null);
    }
  }
});
