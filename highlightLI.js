
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
    var poop = '<b style="background-color:hsl(33, 32%, 95%); border-radius:6px; font-size:8px;">' + '[' + count + ']' + '</b>' + '<b style="background-color:hsl(' + colorNumC + ', 100%, '+ colorNumS + '%); border-radius:6px;">' + tstWord + '</b>';
    var remmie = exprOuterHtml.replace(rgXword, poop);
    document.getElementsByClassName(elm)[i].outerHTML = remmie;
  }
}
});
