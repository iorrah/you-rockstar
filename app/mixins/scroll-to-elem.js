import Ember from 'ember';

export default Ember.Mixin.create({
  executeScrollToElem: function(s) {
    Ember.$('html, body').animate({
      scrollTop: (Ember.$(s).offset().top)
    }, 700);
  },
  actions: {
    scrollToElem: function(s) {
      return this.executeScrollToElem(s);
    }
  }
});
