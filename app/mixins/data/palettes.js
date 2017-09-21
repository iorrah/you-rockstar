import Ember from 'ember';

export default Ember.Mixin.create({
  palettesData: Ember.A([
    Ember.Object.create({
      id: 1,
      colors: [
        { hex: '#bbdefb', is_light: true },
        { hex: '#212529', is_light: false },
        { hex: '#585858', is_light: false }
      ],
      is_selected: false,
      template_id: 1,
      is_light_bg: false
    }),
    Ember.Object.create({
      id: 2,
      colors: [
        { hex: '#673AB7', is_light: false },
        { hex: '#fff', is_light: true },
        { hex: '#212529', is_light: false }
      ],
      is_selected: false,
      template_id: 1,
      is_light_bg: true
    }),
    // Ember.Object.create({
    //   id: 3,
    //   colors: [
    //     { hex: '#123f61', is_light: false },
    //     { hex: '#1e6291', is_light: true },
    //     { hex: '#66a4c0', is_light: false },
    //     { hex: '#99ccff', is_light: false },
    //     { hex: '#000', is_light: false }
    //   ],
    //   is_selected: false,
    //   template_id: 2,
    //   is_light_bg: true
    // }),
    // Ember.Object.create({
    //   id: 4,
    //   colors: [
    //     { hex: '#fff8f8', is_light: false },
    //     { hex: '#e9cbca', is_light: false },
    //     { hex: '#daa8a6', is_light: false },
    //     { hex: '#940000', is_light: false },
    //     { hex: '#580000', is_light: false }
    //   ],
    //   is_selected: false,
    //   template_id: 2,
    //   is_light_bg: true
    // }),
    // Ember.Object.create({
    //   id: 5,
    //   colors: [
    //     { hex: '#34a853', is_light: false },
    //     { hex: '#4285f4', is_light: false },
    //     { hex: '#ed1c24', is_light: false },
    //     { hex: '#fbbc05', is_light: false },
    //     { hex: '#a5a0a9', is_light: false }
    //   ],
    //   is_selected: false,
    //   template_id: 3,
    //   is_light_bg: true
    // }),
    // Ember.Object.create({
    //   id: 6,
    //   colors: [
    //     { hex: '#34a853', is_light: false },
    //     { hex: '#4285f4', is_light: false },
    //     { hex: '#ed1c24', is_light: false },
    //     { hex: '#fbbc05', is_light: false },
    //     { hex: '#a5a0a9', is_light: false }
    //   ],
    //   is_selected: false,
    //   template_id: 3,
    //   is_light_bg: true
    // }),
    // Ember.Object.create({
    //   id: 7,
    //   colors: [
    //     { hex: '#a4281c', is_light: false },
    //     { hex: '#dd4c2f', is_light: false },
    //     { hex: '#f68448', is_light: false },
    //     { hex: '#f89c47', is_light: false },
    //     { hex: '#f7c5a4', is_light: false }
    //   ],
    //   is_selected: false,
    //   template_id: 3,
    //   is_light_bg: true
    // }),
    Ember.Object.create({
      id: 8,
      colors: [
        { hex: '#3f51b5', is_light: false },
        { hex: '#fff', is_light: true },
        { hex: '#212529', is_light: false }
      ],
      is_selected: false,
      template_id: 1,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 9,
      colors: [
        { hex: '#e91e63', is_light: false },
        { hex: '#fff', is_light: true },
        { hex: '#212529', is_light: false }
      ],
      is_selected: false,
      template_id: 1,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 10,
      colors: [
        { hex: '#673AB7', is_light: false },
        { hex: '#fff', is_light: true }
      ],
      is_selected: false,
      template_id: 1,
      is_light_bg: false
    }),
    Ember.Object.create({
      id: 11,
      colors: [
        { hex: '#212529', is_light: false },
        { hex: '#fff', is_light: true }
      ],
      is_selected: true,
      template_id: 1,
      is_light_bg: true
    })
  ])
});
