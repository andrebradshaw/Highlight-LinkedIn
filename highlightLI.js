var moreSumB = document.getElementsByClassName("pv-top-card-section__summary-toggle-button button-tertiary-small mt4");
if (moreSumB == true) {
moreSumB[0].click();
}
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
var booleanString = prompt("Paste your keywords here.");
var regXgetNEARs = /\w+\sn3r\s\w+|".*?"\sn3r\s\w+|\w+\sn3r\s".*?"|".*?"\sn3r\s".*?"/igm;
var matchNEARsrh;
while ((matchNEARsrh = regXgetNEARs.exec(booleanString)) !== null) {
  var mNear = matchNEARsrh;
	var n3r = n3r + ',' + mNear + ',';
}
var fullDocHTML = document.body.outerHTML;
if (n3r) {
var boolNEARcln = n3r.replace(/,,/g, '|');
var boolNEAR_OR = boolNEARcln.replace(/undefined|,|"/igm, '');
var boolNEARor1 = boolNEAR_OR.replace(/\W+n3r\W+/gi, "\\W+\\w+\\W+");
var boolNEARor2 = boolNEAR_OR.replace(/\W+n3r\W+/gi, "\\W+\\w+\\W+\\w+\\W+");
var boolNEARor3 = boolNEAR_OR.replace(/\W+n3r\W+/gi, "\\W+\\w+\\W+\\w+\\W+\\w+\\W+");
var boolNEARor4 = boolNEAR_OR.replace(/\W+n3r\W+/gi, "\\W+\\w+\\W+\\w+\\W+\\w+\\W+\\w+\\W+");
var boolNEARor5 = boolNEAR_OR.replace(/\W+n3r\W+/gi, "\\W+\\w+\\W+\\w+\\W+\\w+\\W+\\w+\\W+\\w+\\W+");
var mergBooln3r = boolNEARor1 + "|" + boolNEARor2 + "|" + boolNEARor3 + "|" + boolNEARor4 + "|" + boolNEARor5;
var chckWildCrd = /\*/g;
var wildNOTFUNCTIONAL = chckWildCrd.exec(mergBooln3r);
if (wildNOTFUNCTIONAL) {
  var mergBooln3r = mergBooln3r.replace(chckWildCrd, "\\w+");
}
var n3rREGX = new RegExp(mergBooln3r, "igm");
var n3rArray;
while ((n3rArray = n3rREGX.exec(fullDocHTML)) !== null) {
  var n3A = n3A + ',' + n3rArray + ',';
}
if (n3A) {
var n3A = n3A.replace(/,,/gm, '", "');
var n3A = n3A.replace(/undefined,|,$/gm, '');
console.log(n3A);
}
}
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
} else {
var booleanArray3 = booleanArray2.replace(/\s+/g, '", "');
var arrString = booleanArray3;
}
if (n3A) {
  arrString = n3A + ", " + arrString;
}
var itemArr = JSON.parse('["' + arrString + '"]');
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
var colorlight = 91;
var heaterC = count * 3.5;
var heaterS = count * 1.25;
var colorNumC = colorstart - heaterC;
var colorNumS = colorlight - heaterS;
if (colorNumC < -20) {
  colorNumC = -20;
}
if (colorNumS < 60) {
  colorNumS = 60;
}
    var poop = '<b style="background-color:hsl(33, 32%, 95%); border-radius:6px; font-size:8px; vertical-align: 10px;">' + '(' + count + ')' + '</b>' + '<b style="background-color:hsl(' + colorNumC + ', 100%, '+ colorNumS + '%); border-radius:6px;">' + tstWord + '</b>';
    var remmie = exprOuterHtml.replace(rgXword, poop);
    document.getElementsByClassName(elm)[i].outerHTML = remmie;
  }
}
});

}, 520);
}
highlight();
