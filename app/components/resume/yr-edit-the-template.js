import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';
import TemplateStateMixin from 'you-rockstar/mixins/template/state';

export default Ember.Component.extend(ConstantsMixin, TemplateStateMixin, {
  actions: {
    wontEdit: function(template) {
      return template.set('wont_edit', true);
    },
    selectPalette: function(palette) {
      this.sendAction('selectPalette', palette);
    }
  }
});
