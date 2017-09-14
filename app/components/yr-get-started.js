import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';

export default Ember.Component.extend(ConstantsMixin, {
  classNames: 'full-height',
  device: Ember.computed('[]', function() {
    return this.get('PATH_TO_IMAGES') + 'imac-1.png';
  })
});
