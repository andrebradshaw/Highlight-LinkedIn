/*/

watch me rebuild this: https://youtu.be/IuAHUomCrqM 

/*/

var userinput = prompt("enter your keywords here...");
var tosudoArr = userinput.replace(/\W/g, '').replace(/\s+/g, '","')//lets get rid of the stuff people may enter that we do not want... like anything that is not a letter or number.
//and then we will replace spaces with "," to build a sudo array

var classArr = ["pv-entity__summary-info", "pv-skill-entity__skill-name", "pv-top-card-section__summary-text", "pv-entity__description", "truncate-multiline--truncation-target", "pv-top-card-section__headline", "pv-recommendation-entity__text", "profile-info", "module-body searchable", "position", "module primary-module", "title", "positions", "description", "skills"]; //but I am going to rename the object.

var boolie = JSON.parse('["'+tosudoArr+'"]')//object to contain our search parameters.
function replacer(){
    classArr.forEach(elm =>{
      //need a variable to hold the current class element. we need to loop through all available class items forEach classname
      var tempclassElm = document.getElementsByClassName(elm);
      for(i=0; i<tempclassElm.length; i++){
          //now another loop will check each keywork from our boolie object within each item within each classname.... ooof. that is a lot of loops.
          for(e=0; e<boolie.length; e++){
            //now we can do the stuff
            var currentElementOuterHTML = tempclassElm[i].outerHTML;
            var regXkeyword = new RegExp("\\b"+boolie[e], 'ig'); //this converts the keyword into a regular expression which will be used to find our match within the document. adding "\\b" in front of the boolie[e] will ensure we only match the exact word, so "sql" will not match "mySql", but would match pl/sql. For more information on regular expressions, go play on regex101.com.

            //we will now get the entire text of the document and count how many times our keyword matches, then adjust the highlighter color based on that count.
            var docText = document.body.innerText;
            var count = 0;
            while(regXkeyword.exec(docText) != null){ //alternatively, you could probably say while(regXkeyword.test(docText) === true)... I would probably default to that, but != null works just as well.
                ++count; //this is just another way of saying count = count +1
            }//while is another loop method. You should NEVER use this unless you know how it works. It will run forever while the condition remains. I lost a lot of unsaved code from my machine crashing while learning to use this loop method.
            //now lets create our colors for highlighting the matched keywords.
            var colorstart = 70;
            var colorlight = 91;//this is the baseline
            var heaterC = count * 3.5;
            var heaterS = count * 1.25;
            var colorNumC = colorstart - heaterC;
            var colorNumS = colorlight - heaterS;
            //now lets create a condition to prevent our colors from going off the range when a keyword has a high number of matches
            if(colorNumC < -20){
              colorNumC = -20;
            }
            if(colorNumS < 56){
              colorNumS = 56;
            }
            //now we will insert our custom CSS into the HTML.
            var editedHTML = '<b style="background-color:hsl(33, 32%, 95%); border-radius:6px; font-size:8px; vertical-align: 10px;">'+ '(' + count + ')' + '</b>' + '<b style="background-color:hsl(' + colorNumC + ', 100%, ' + colorNumS + '%); border-radius:6px;">' + boolie[e] + '</b>';

            //now we replace the matched word with the editedHTML;
            var place = currentElementOuterHTML.replace(regXkeyword, editedHTML);
            document.getElementsByClassName(elm)[i].outerHTML = place;
            
            //okay.. that should do it. lets just call the function at the bottom and test it out.
          }
      }
    });
}
replacer();
