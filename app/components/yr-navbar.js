import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.startAffix();
  },
  currentPathObserver: Ember.observer('currentPath', function() {
    this.startAffix();
  }),
  // startAffix: function() {
  //   var top = function() {
  //     var height;
  //     // height = Ember.$('header').outerHeight(true);
  //     height = 0;
  //     // height = height - 3;
  //     return (height = this.top = height);
  //   }

  //   var bottom = function() {
  //     var height;
  //     // height = Ember.$('footer').outerHeight(true);
  //     height = false;
  //     return (height = this.bottom = height);;
  //   }

  //   Ember.$('.navbar').affix({ offset: { top, bottom, } });
  // }
  startAffix: function() {
    var toggleAffix = function(affixElement, scrollElement) {
      var top = Ember.$('header').outerHeight(true)

      if (scrollElement.scrollTop() >= top){
        affixElement.removeClass('affix-top');
      } else {
        affixElement.addClass('affix-top');
      }
    };

    Ember.$('.navbar').each(function() {
      var ele = Ember.$(this);

      Ember.$(window).on('scroll resize', function() {
        toggleAffix(ele, Ember.$(this));
      });

      toggleAffix(ele, Ember.$(window));
    });
  }
});
