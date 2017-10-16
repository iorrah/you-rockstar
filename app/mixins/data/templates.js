import Ember from 'ember';

export default Ember.Mixin.create({
  templates: Ember.A([
    Ember.Object.create({
      id: 1,
      name: 'Dark Gradient Simple Resume',
      source: 'https://www.canva.com/templates/resumes/MACBTvM3cuo-dark-gradient-simple-resume/',
      author: 'Reychelle Ann Mendoza',
      is_selected: false
    }),
    Ember.Object.create({
      id: 2,
      name: 'Plum Simple Modern Resume',
      source: 'https://www.canva.com/templates/resumes/MACUmC5RqHM-gray-and-purple-simple-research-resume/',
      author: 'Reychelle Ann Mendoza',
      is_selected: true
    })
  ])
});
