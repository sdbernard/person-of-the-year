import oHoverable from 'o-hoverable';
import attachFastClick from 'fastclick';
import mainTemplate from '../templates/main.hbs';

document.addEventListener('DOMContentLoaded', () => {
  // make hover effects work on touch devices
  oHoverable.init();

  // remove the 300ms tap delay on mobile browsers
  attachFastClick(document.body);

  // YOUR CODE HERE!
  var groupNames = [];
  var groups = [];
  var dataset = spreadsheet.data;

  //put the dataset into groups and add the corresponding indicators
  dataset.forEach(function (row) {
    if (groupNames.indexOf(row.type) === -1) {
      groupNames.push(row.type);
      groups.push({
        type: row.type,
        person: []
      });
    }
  });

  dataset.forEach(function (row) {
    var groupIndex = groupNames.indexOf(row.type);
    groups[groupIndex].person.push(row);
  });

  console.log(groups);
  document.querySelector('main').innerHTML = mainTemplate(dataset);
});
