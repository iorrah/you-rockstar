import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  didTransition() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});

Router.map(function() {
  this.route('resume', function() {
    this.route('index', { path: '/' });
    this.route('edit');
    this.route('create');
    this.route('download');
    this.route('preview');
    this.route('templates');
  });
});

export default Router;
