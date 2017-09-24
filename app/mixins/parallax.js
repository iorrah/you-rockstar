import Ember from 'ember';

export default Ember.Mixin.create({
  startParallax: function() {
    this.bootParallax();
    this.preventIssueiOS();
  },
  bootParallax: function() {
    this.$('.parallax-window').parallax();
  },
  preventIssueiOS: function() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      var e = Ember.$('.parallax-window');
      var fallback = e.attr('data-image-src');

      e.css('background-color', '#000')
       .css('background-image', 'url(' + fallback + ')');
    }
  },
  dismissParallax: function() {
    this.$('.parallax-window').parallax('destroy');
  }
});
