import Ember from 'ember';

export default Ember.Component.extend({
  state: {
    template: true,
    theming: false,
    is_checked: true
  },
  observesIsChecked: Ember.observer('state.is_checked', function() {
    if (this.get('state.is_checked')) {
      this.set('state.template', true);
      this.set('state.theming', false);
    } else {
      this.set('state.theming', true);
      this.set('state.template', false);
    }
  }),
  didInsertElement: function() {
    this.startSwitchery();
  },
  startSwitchery: function() {
    var elem = document.querySelector('.js-switch');


    var options = {
      color: '#00c851',
      secondaryColor: '#1fc1c8'
    }

    var init = new Switchery(elem, options);
  },
  getNext: function(type) {
    var items = this.get(type.pluralize());
    var size = items.length;
    var i = 0;
    var id = this.get(type + '.id');
    var next = null;

    for (i; i < size; i++) {
      var e = items[i];
      var isThisSelected = (e.get('id') == id);
      var isThisLast = (i + 1) == size;

      if (isThisSelected) {
        if (isThisLast) {
          next = items[0];
        } else {
          next = items[i + 1];
        }
      }
    }

    return next;
  },
  getPrev: function(type) {
    var items = this.get(type.pluralize());
    var size = items.length;
    var i = size - 1;
    var id = this.get(type + '.id');
    var prev = null;

    for (i; i >= 0; i--) {
      var e = items[i];
      var isThisSelected = (e.get('id') == id);
      var isThisLast = (i == 0);

      if (isThisSelected) {
        if (isThisLast) {
          prev = items[size - 1];
        } else {
          prev = items[i - 1];
        }
      }
    }

    return prev;
  },
  repo: function() {
    var self = this;

    return {
      template: function() {
        return {
          setNext: function() {
            self.send('selectTemplate', self.getNext('template'));
          },
          setPrev: function() {
            self.send('selectTemplate', self.getPrev('template'));
          }
        }
      },
      theming: function() {
        return {
          setNext: function() {
            self.send('selectPalette', self.getNext('palette'));
          },
          setPrev: function() {
            self.send('selectPalette', self.getPrev('palette'));
          }
        }
      }
    }
  },
  actions: {
    next: function() {
      if (this.get('state.template')) {
        this.repo().template().setNext();
      } else if (this.get('state.theming')) {
        this.repo().theming().setNext();
      }
    },
    prev: function() {
      if (this.get('state.template')) {
        this.repo().template().setPrev();
      } else if (this.get('state.theming')) {
        this.repo().theming().setPrev();
      }
    },
    selectTemplate: function(template) {
      this.sendAction('selectTemplate', template);
    },
    selectPalette: function(palette) {
      this.sendAction('selectPalette', palette);
    }
  }
});
