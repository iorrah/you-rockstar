import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';
import TemplateStateMixin from 'you-rockstar/mixins/template/state';
import UserMixin from 'you-rockstar/mixins/data/user';

export default Ember.Mixin.create(
  ConstantsMixin,
  TemplateStateMixin,
  UserMixin
);
