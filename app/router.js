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
  this.route('resume');
});

export default Router;
