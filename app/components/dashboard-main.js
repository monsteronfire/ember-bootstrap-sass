import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    collapse() {
      this.toggleProperty('collapsed');
    }
  }
});
