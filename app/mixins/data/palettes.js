import Ember from 'ember';

export default Ember.Mixin.create({
  palettesData: Ember.A([
    Ember.Object.create({
      id: 1,
      is_selected: true,
      template_id: 1
    }),
    Ember.Object.create({
      id: 2,
      is_selected: false,
      template_id: 1
    }),
    Ember.Object.create({
      id: 3,
      is_selected: true,
      template_id: 2
    }),
    Ember.Object.create({
      id: 4,
      is_selected: false,
      template_id: 2
    }),
    Ember.Object.create({
      id: 5,
      is_selected: false,
      template_id: 3
    }),
    Ember.Object.create({
      id: 6,
      is_selected: false,
      template_id: 3
    }),
    Ember.Object.create({
      id: 7,
      is_selected: false,
      template_id: 3
    }),
    Ember.Object.create({
      id: 8,
      is_selected: false,
      template_id: 1
    }),
    Ember.Object.create({
      id: 10,
      is_selected: false,
      template_id: 1
    }),
    Ember.Object.create({
      id: 12,
      is_selected: false,
      template_id: 2
    }),
    Ember.Object.create({
      id: 13,
      is_selected: false,
      template_id: 2
    }),
    Ember.Object.create({
      id: 14,
      is_selected: false,
      template_id: 2
    })
  ])
});
