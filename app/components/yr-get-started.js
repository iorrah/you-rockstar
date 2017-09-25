import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';

export default Ember.Component.extend(ConstantsMixin, {
  classNames: 'full-height',
  device: Ember.computed('[]', function() {
    return this.get('PATH_TO_IMAGES') + 'homepage/imac-1.png';
  }),
  behindDevice: Ember.computed('[]', function() {
    return this.get('PATH_TO_IMAGES') + 'preview/screen-shot.png';
  })
});
