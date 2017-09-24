import Ember from 'ember';
import ParallaxMixin from 'you-rockstar/mixins/parallax';

export default Ember.Component.extend(ParallaxMixin, {
  classNames: 'full-height',
  didInsertElement: function() {
    this.startParallax();
  },
  willDestroyElement: function() {
    this.dismissParallax();
  }
});
