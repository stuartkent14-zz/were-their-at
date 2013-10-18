$(document).ready( function() {
  var derp = function() {
    return confirm("Did you use the correct \"their/there/they're/where/were/we're\"?");
  }

  $('form[action^="/ajax/updatestatus"] button[type=submit]').click(derp);
});
