import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('user', changesFromForm);
        profile.save().then(() => {
          profile.set('user', profile);
        })
          this.transitionToRoute('finished');

  },
},
});
