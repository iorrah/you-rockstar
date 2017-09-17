import Ember from 'ember';

export default Ember.Component.extend({
  tagName: Ember.computed(function() {
    return this.get('tn');
  }),
  classNames: ['editor'],
  isShowModeShown: Ember.computed('sm', function() {
    return this.get('sm');
  }),
  // observesContent: Ember.observer('content', function() {
  //   if (this.get('adapt')) {
  //     this.reviseInputWidth();
  //   }
  // }),
  reviseInputWidth: function() {
    var thisElem = Ember.$('#' + this.elementId);
    var width = thisElem.find('.measure').css('width').replace('px', '');
    console.log('.mesure is ' + width + ' long');
    width = (width * 1);
    width = (width) + 'px';
    console.log('input will be ' + width + ' long');
    thisElem.find('input').css('width', width);
  }
});
