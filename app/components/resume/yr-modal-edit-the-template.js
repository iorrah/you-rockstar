import Ember from 'ember';
import ConstantsMixin from 'you-rockstar/mixins/constants';
import TemplateStateMixin from 'you-rockstar/mixins/template/state';

export default Ember.Component.extend(ConstantsMixin, TemplateStateMixin, {
  didInsertElement: function() {
    this.startObservingModal();
    this.showModal();
  },
  palettes_light_bg: Ember.computed('palettes.[]', function() {
    return this.get('palettes').filterBy('is_light_bg', true);
  }),
  palettes_dark_bg: Ember.computed('palettes.[]', function() {
    return this.get('palettes').filterBy('is_light_bg', false);
  }),
  startPieCharts: function() {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.responsive = false;

    var palettes = this.get('palettes'),
        size = palettes.get('length');

    for (var i = size - 1; i >= 0; i--) {
      var e = palettes[i],
          ctxP = document.getElementById('palette-' + e.get('id')).getContext('2d'),
          myPieChart = new Chart(ctxP, { type: 'pie', data: e.get('chart') });
    }
  },
  startObservingModal: function() {
    var self = this;

    $('.modal-edit-the-template').on('shown.bs.modal', function() {
      self.startPieCharts();
    });
  },
  showModal: function() {
    $('.modal-edit-the-template').modal('show');
  },
  actions: {
    selectPalette: function(palette) {
      this.sendAction('selectPalette', palette);
    }
  }
});
