import Ember from 'ember';

export default Ember.Mixin.create({
  imageUrl: Ember.computed('template.id', function() {
    return this.get('PATH_TO_IMAGES') + 'placeholders/' + 'card-skeleton.png';
  }),
  state: Ember.computed('template.is_selected', function() {
    var buttonClassName = 'btn-',
        buttonText = 'Select',
        cardClassName = '';

    if (this.get('template.is_selected')) {
      buttonClassName += 'antares';
      buttonText += 'ed';
      cardClassName = 'selected';
    } else {
      buttonClassName += 'h20';
    }

    return {
      card_class_name: cardClassName,
      button: {
        class_name: buttonClassName,
        text: buttonText
      }
    };
  }),
  simpleTitle: Ember.computed('template.id', function() {
    return 'Template ' + this.get('template.id');
  })
});
