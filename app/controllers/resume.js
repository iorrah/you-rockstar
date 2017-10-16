import Ember from 'ember';
import TemplatesMixin from 'you-rockstar/mixins/data/templates';
import PalettesMixin from 'you-rockstar/mixins/data/palettes';
import ScrollToElemMixin from 'you-rockstar/mixins/scroll-to-elem';

export default Ember.Controller.extend(TemplatesMixin, PalettesMixin, ScrollToElemMixin, {
  currentPath: Ember.computed('target.currentPath', function() {
    var path = this.get('target.currentPath') || '';
    return path.replace('resume.', '');
  }),
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
    Ember.set(template, 'is_selected', false);
  },
  actions: {
    selectTemplate: function(template) {
      var templates = this.get('templates');
      var size = templates.get('length');

      for (var i = 0; i < size; i++) {
        var item = templates.findBy('id', i + 1);

        if (item.get('id') === template.get('id')) {
          Ember.set(item, 'is_selected', true);
        } else {
          this.disselectTemplate(item);
        }
      }
    },
    selectPalette: function(palette) {
      if (palette.is_selected) {
        return true;
      }

      var plts = this.get('palettes');
      var size = plts.get('length');

      for (var i = size - 1; i >= 0; i--) {
        var plt = plts[i];
        plt.set('is_selected', false);
      }

      palette.set('is_selected', true);
    }
  }
});
