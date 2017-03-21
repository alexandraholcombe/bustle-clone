import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      feature: this.store.query('content', {limitToFirst:3}),
      bigFeature: this.store.query('content', {startAt: "3", endAt: "3"}),
    });
  },
});
