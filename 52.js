// clone using Object.assign

const obj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const clone = Object.assign({}, obj);

// clone using spread operator

const clone2 = { ...obj };

// clone using JSON

const clone3 = JSON.parse(JSON.stringify(obj));

// clone using lodash

const clone4 = _.cloneDeep(obj);

// clone using jQuery

const clone5 = $.extend(true, {}, obj);

// clone using AngularJS

const clone6 = angular.copy(obj);

// clone using VueJS

const clone7 = Vue.util.extend({}, obj);

// clone using EmberJS

const clone8 = Ember.copy(obj, true);

// clone using ReactJS

const clone9 = React.addons.update(obj, {});
console.log(clone9);
