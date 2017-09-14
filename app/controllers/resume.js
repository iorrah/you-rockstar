import Ember from 'ember';
import TemplatesMixin from 'you-rockstar/mixins/data/templates';
import PalettesMixin from 'you-rockstar/mixins/data/palettes';
import ScrollToElemMixin from 'you-rockstar/mixins/scroll-to-elem';

export default Ember.Controller.extend(TemplatesMixin, PalettesMixin, ScrollToElemMixin, {
  palettes: Ember.computed('palettes.[]', 'template.id', function() {
    return this.get('palettesData')
               .filterBy('template_id', this.get('template.id'));
  }),
  template: Ember.computed('templates.@each.is_selected', function() {
    return this.get('templates')
               .filterBy('is_selected')
               .get('firstObject');
  }),
  palette: Ember.computed('palettes.@each.is_selected', function() {
    return this.get('palettes')
               .filterBy('is_selected')
               .get('firstObject');
  }),
  isStepShown: Ember.computed('templates.length', 'template.is_edited', 'template.wont_edit', function() {
    var pick     = !!(this.get('templates.length'));
    var edit     = !!(this.get('template'));
    var download = !!(this.get('template.is_edited') ||
                      this.get('template.wont_edit'));

    return { pick, edit, download };
  }),
  disselectTemplate: function(template) {
    template.set('is_selected', false);
    template.set('is_edited', false);
    template.set('wont_edit', false);
  },
  disselectPalette: function(template) {
    template.set('is_selected', false);
  },
  actions: {
    select: function(template) {
      var tmpts = this.get('templates');
      var size = tmpts.get('length');

      for (var i = size - 1; i >= 0; i--) {
        var tmpt = tmpts[i];

        if (tmpt.get('id') == template.get('id')) {
          tmpt.set('is_selected', !template.get('is_selected'));
        } else {
          this.disselectTemplate(tmpt);
        }
      }
    },
    selectPalette: function(palette) {
      var plts = this.get('palettes');
      var size = plts.get('length');

      for (var i = size - 1; i >= 0; i--) {
        var plt = plts[i];

        if (plt.get('id') == palette.get('id')) {
          plt.set('is_selected', !palette.get('is_selected'));
        } else {
          this.disselectPalette(plt);
        }
      }
    }
  }
});
