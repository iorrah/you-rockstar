import Ember from 'ember';

export default Ember.Mixin.create({
  palettesData: Ember.A([
    Ember.Object.create({
      id: 1,
      chart: Ember.Object.create({
        labels: ['', ''],
        datasets: [{
          data: [1, 1],
          backgroundColor: [
            '#172c2f',
            '#ee4d3b'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#172c2f',
            '#ee4d3b'
          ]
        }]
      }),
      is_selected: false,
      template_id: 1,
      is_light_bg: false
    }),
    Ember.Object.create({
      id: 2,
      chart: Ember.Object.create({
        labels: ['', ''],
        datasets: [{
          data: [1, 1, 1],
          backgroundColor: [
            '#673AB7',
            '#fff',
            '#212529'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#673AB7',
            '#fff',
            '#212529'
          ]
        }]
      }),
      is_selected: true,
      template_id: 1,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 3,
      chart: Ember.Object.create({
        labels: ['', '', '', '', ''],
        datasets: [{
          data: [200, 200, 200, 200, 200],
          backgroundColor: [
            '#123f61',
            '#1e6291',
            '#66a4c0',
            '#99ccff',
            '#000000'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#123f61',
            '#1e6291',
            '#66a4c0',
            '#99ccff',
            '#000000'
          ]
        }]
      }),
      is_selected: false,
      template_id: 2,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 4,
      chart: Ember.Object.create({
        labels: ['', '', '', '', ''],
        datasets: [{
          data: [200, 200, 200, 200, 200],
          backgroundColor: [
            '#fff8f8',
            '#e9cbca',
            '#daa8a6',
            '#940000',
            '#580000'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#fff8f8',
            '#e9cbca',
            '#daa8a6',
            '#940000',
            '#580000'
          ]
        }]
      }),
      is_selected: false,
      template_id: 2,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 5,
      chart: Ember.Object.create({
        labels: ['', '', '', '', ''],
        datasets: [{
          data: [200, 200, 200, 200, 200],
          backgroundColor: [
            '#34a853',
            '#4285f4',
            '#ed1c24',
            '#fbbc05',
            '#a5a0a9'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#34a853',
            '#4285f4',
            '#ed1c24',
            '#fbbc05',
            '#a5a0a9'
          ]
        }]
      }),
      is_selected: false,
      template_id: 3,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 6,
      chart: Ember.Object.create({
        labels: ['', '', '', '', ''],
        datasets: [{
          data: [200, 200, 200, 200, 200],
          backgroundColor: [
            '#34a853',
            '#4285f4',
            '#ed1c24',
            '#fbbc05',
            '#a5a0a9'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#34a853',
            '#4285f4',
            '#ed1c24',
            '#fbbc05',
            '#a5a0a9'
          ]
        }]
      }),
      is_selected: false,
      template_id: 3,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 7,
      chart: Ember.Object.create({
        labels: ['', '', '', '', ''],
        datasets: [{
          data: [200, 200, 200, 200, 200],
          backgroundColor: [
            '#a4281c',
            '#dd4c2f',
            '#f68448',
            '#f89c47',
            '#f7c5a4'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#a4281c',
            '#dd4c2f',
            '#f68448',
            '#f89c47',
            '#f7c5a4'
          ]
        }]
      }),
      is_selected: false,
      template_id: 3,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 8,
      chart: Ember.Object.create({
        labels: ['', ''],
        datasets: [{
          data: [1, 1, 1],
          backgroundColor: [
            '#3f51b5',
            '#fff',
            '#212529'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#3f51b5',
            '#fff',
            '#212529'
          ]
        }]
      }),
      is_selected: false,
      template_id: 1,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 9,
      chart: Ember.Object.create({
        labels: ['', ''],
        datasets: [{
          data: [1, 1, 1],
          backgroundColor: [
            '#e91e63',
            '#fff',
            '#212529'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#e91e63',
            '#fff',
            '#212529'
          ]
        }]
      }),
      is_selected: false,
      template_id: 1,
      is_light_bg: true
    }),
    Ember.Object.create({
      id: 10,
      chart: Ember.Object.create({
        labels: ['', ''],
        datasets: [{
          data: [1, 1],
          backgroundColor: [
            '#673AB7',
            '#fff'
          ],
          borderWidth: 0,
          hoverBackgroundColor: [
            '#673AB7',
            '#fff'
          ]
        }]
      }),
      is_selected: false,
      template_id: 1,
      is_light_bg: false
    })
  ])
});
