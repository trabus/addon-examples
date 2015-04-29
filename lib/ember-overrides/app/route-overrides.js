import Ember from 'ember';
export default Ember.Route.reopen({
  logHistory: Ember.on('activate', function(){
    console.log('ROUTE: ',this.get('routeName'));
  })
});