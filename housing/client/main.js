import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Houses } from '../collections.js';
import './main.html';

// uploaded = null

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
  	// console.log(uploaded)
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.upload.events({
  "change #files": function (e, instance) {
    var files = e.target.files || e.dataTransfer.files;
    for (var i = 0, file; file = files[i]; i++) {
      if (file.type.indexOf("text") == 0) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
          var text = e.target.result;
          console.log(text)
          var all = $.csv.toObjects(text);
          // uploaded = all
          Session.set("houses", all)
          // _.each(all, function (entry) {
          //   Houses.insert(entry);
          // });
        }
        reader.readAsText(file);
      }
    }
  }
})

Template.houses_table.helpers({
  houses: function() {
  	if (Session.get("houses") == null) {
  		return null;
  	}
  	houses = Session.get("houses");
  	housesArray = Object.keys(houses).map(function(k) { return houses[k] });
  	housesArray = housesArray.sort(function(h1, h2){return parseFloat(h1.Preference) - parseFloat(h2.Preference)})
    return housesArray.reverse();
  }
});
