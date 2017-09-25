import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';
import TemplateStateMixin from 'you-rockstar/mixins/template/state';

export default Ember.Component.extend(ConstantsMixin, TemplateStateMixin, {
  tagName: '',
  actions: {
    selectTemplate: function(template) {
      this.sendAction('selectTemplate', template);
    }
  }
});
