import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';
import TemplateStateMixin from 'you-rockstar/mixins/template/state';

export default Ember.Component.extend(ConstantsMixin, TemplateStateMixin, {
  actions: {
    select: function(template) {
      this.sendAction('select', template);
    }
  }
});
