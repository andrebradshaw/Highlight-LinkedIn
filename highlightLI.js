document.getElementsByClassName("pv-top-card-section__summary-toggle-button button-tertiary-small mt4")[0].click();
window.scrollTo(0, document.body.scrollHeight);
window.scrollTo(0, document.body.scrollHeight);
window.scrollTo(0, document.body.scrollHeight);
    for (var b = 0; b < document.getElementsByClassName("pv-profile-section__see-more-inline link").length; b++) {
      var moreJ = document.getElementsByClassName("pv-profile-section__see-more-inline link")[b].innerText;
      if (moreJ == "See more positions") {
        document.getElementsByClassName("pv-profile-section__see-more-inline link")[b].click();
      }
    }
    for (var c = 0; c < document.getElementsByClassName("pv-profile-section__see-more-inline link").length; c++) {
      var moremoreJob = document.getElementsByClassName("pv-profile-section__see-more-inline link")[c].innerText;
      var regXseemoreJ = /See\s\d\smore/;
      var moremoremore = regXseemoreJ.exec(moremoreJob);
      if (moremoreJob == moremoremore) {
        document.getElementsByClassName("pv-profile-section__see-more-inline link")[c].click();
      }
    }
function highlight() {
setTimeout(function() {
var arrie = ["pv-entity__summary-info", "pv-skill-entity__skill-name", "pv-top-card-section__summary-text", "pv-entity__description", "truncate-multiline--truncation-target", "pv-top-card-section__headline", "pv-recommendation-entity__text"];
var booleanString = prompt("drop your string here");
var booleanArray1 = booleanString.replace(/\(|\)|\*|,|\&/ig, '');
var booleanArray2 = booleanArray1.replace(/\WOR\W|\WAND\W/ig, ' ');
var regXquotedWrd = /".*?"/igm;
var matchPhrase;
while ((matchPhrase = regXquotedWrd.exec(booleanArray2)) !== null) {
  var mg = matchPhrase;
	var msg = msg+  mg + '';
}
if (msg) {
var regXun = /undefined|null/igm;
var cleaner = msg.replace(regXun, '');
var cleanout = booleanArray2.replace(regXquotedWrd, '');
var booleanArray3 = cleanout.replace(/\s+/g, '"');
var cleanQuotes = cleaner + booleanArray3;
var end = cleanQuotes.replace(/""/g, '"');
var frontbackX = end.replace(/^"|"$/g, '');
var arrString = frontbackX.replace(/"/g, '", "');
var itemArr = JSON.parse('["' + arrString + '"]');
} else {
var booleanArray3 = booleanArray2.replace(/\s+/g, '", "');
var itemArr = JSON.parse('["' + booleanArray3 + '"]');
}
arrie.forEach(function(elm) {
for (i = 0; i < document.getElementsByClassName(elm).length; i++) {
  for (let e=0; e<itemArr.length; e++) {
    var exprOuterHtml = document.getElementsByClassName(elm)[i].outerHTML;
    var tstWord = itemArr[e];
    var rgXword = new RegExp('\\b' + tstWord, "ig");
var docText = document.body.innerText;
var count = 0;
while (rgXword.exec(docText) !== null) {
    ++count;
}
var colorstart = 70;
var heaterC = count * 3.5;
var heaterS = count * 1.1;
var colorNumC = colorstart - heaterC;
var colorNumS = colorstart - heaterS;
if (colorNumC < -20) {
  colorNumC = -20;
}
if (colorNumS < 45) {
  colorNumS = 45;
}
    var poop = '<b style="background-color:hsl(33, 32%, 95%); border-radius:6px; font-size:8px;">' + '[' + count + ']' + '</b>' + '<b style="background-color:hsl(' + colorNumC + ', 100%, '+ colorNumS + '%); border-radius:6px;">' + tstWord + '</b>';
    var remmie = exprOuterHtml.replace(rgXword, poop);
    document.getElementsByClassName(elm)[i].outerHTML = remmie;
  }
}
});
}, 220);
}
highlight();
