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
    var e = $('#' + this.elementId + ' input')

    e.on('focus', function() {
      $('.template .overlay').addClass('active');
    });

    e.on('blur', function() {
      $('.template .overlay').removeClass('active');
    });
  },
  actions: {
    add: function() {
      this.set('content', '');
      var self = this;

      setTimeout(function() {
        var elem = $('#' + self.elementId + ' .auto-mode input');

        if (elem && elem.length) {
          elem.focus();
        } else {
          alert('does not exist');
        }
      }, 100);
    },
    edit: function() {
      $('#' + this.elementId + ' .auto-mode input').focus();
    },
    remove: function() {
      this.set('content', null);
    }
  }
});
