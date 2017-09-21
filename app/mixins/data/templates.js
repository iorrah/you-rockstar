import Ember from 'ember';

export default Ember.Mixin.create({
  templates: Ember.A([
    Ember.Object.create({
      id: 1,
      name: 'Dark Gradient Simple Resume',
      source: 'https://www.canva.com/templates/resumes/MACBTvM3cuo-dark-gradient-simple-resume/',
      author: 'Reychelle Ann Mendoza',
      pct_picked: 13,
      is_selected: false,
      is_edited: false,
      wont_edit: false
    }),
    Ember.Object.create({
      id: 2,
      name: 'Plum Simple Modern Resume',
      source: 'https://www.canva.com/templates/resumes/MACUmC5RqHM-gray-and-purple-simple-research-resume/',
      author: 'Reychelle Ann Mendoza',
      pct_picked: 16,
      is_selected: true,
      is_edited: false,
      wont_edit: false
    }),
    Ember.Object.create({
      id: 3,
      name: 'Simple Blue Modern Resume',
      source: 'https://www.canva.com/templates/resumes/MACD9ukLq68-black-and-white-mountain-photo-simple-resume/',
      author: 'Reychelle Ann Mendoza',
      pct_picked: 13,
      is_selected: false,
      is_edited: false,
      wont_edit: false
    })
  ])
});
