import Ember from 'ember';

export default Ember.Mixin.create({
  palettes: Ember.A([
    Ember.Object.create({
      id: 1,
      chart: Ember.Object.create({
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
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
      is_selected: true
    }),
    Ember.Object.create({
      id: 2,
      chart: Ember.Object.create({
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
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
      is_selected: false
    }),
    Ember.Object.create({
      id: 3,
      chart: Ember.Object.create({
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
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
      is_selected: false
    }),
    Ember.Object.create({
      id: 4,
      chart: Ember.Object.create({
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
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
      is_selected: false
    })
  ])
});
