import Ember from 'ember';

export default Ember.Mixin.create({
  scrollToElem: function(s) {
    Ember.$('html, body').animate({
      scrollTop: Ember.$(s).offset().top
    }, 700);
  }
});
