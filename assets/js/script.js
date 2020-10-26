var css = ['html,',
'body {',
'  padding: 0;',
'  margin: 0;',
'}',
'',
'#styles {',
'  position: absolute;',
'  padding: 0 5px;',
'  background:rgba(240, 240, 240, 0.8);',
'  top: 0;',
'  right: 0;',
'  z-index:1;',
'  font-family: Helvetica;',
'}',
'',
'.container {',
'  z-index:2;',
'  position: absolute;',
'  font-size: large;',
'  font-weight: 300;',
'  background: rgba(50, 50, 50, 0.8);',
'  color: #eee;',
'  border-radius: 3px;',
'  padding: 20px 50px;',
'  margin: 2% 0 0 10%;',
'}',
'',
'.header {',
'  font-family: Hack;',
'  color: rgba(232, 232, 232, 1);',
'}',
'',
'.body {',
'  font-family: \"Source Code Pro\", monospace;',
'  color: rgba(92, 219, 149, 1);',
'}',
'',
'.nice-font {',
'  font-family: \"Balsamiq Sans\", cursive;',
'  color: rgba:(255, 154, 162, 1);',
'  transition: 0.4s ease;',
'  padding: 0 10px;',
'}',
'',
'.contact {',
'  text-align: center;',
'}',
'',
'a {',
'  color: #f6abb6;',
'  padding:-right: 10px;',
'}',
'',
'a:hover {',
'  color: lightblue;',
'}',
'',
'h1,',
'h2 {',
'  font-weight: 300;',
'}',
'',
'.bg {',
'  height: 100%;',
'  width: 100%;',
'  background: 50% 50% / cover;',
'  background-image: url("/AKPro/assets/images/bg.jpg");',
'  position: absolute;',
'}',
'',
'',
'Danke dass Du unserer Seite zugesehen hast,',
'wie sie sich selbst programmiert!!',
'',
];

var i = 0;
var j = 0;

function write() {
  var obj = document.getElementById("styles");
  if (j < css[i].length) {
    obj.innerText += css[i][j];
    obj.scrollTop = obj.scrollHeight;
    j++;
    setTimeout(write, Math.floor((Math.random() * 50) + 10));
  } else {
    j = 0;
    if (i < css.length - 1) {
      i++;
      obj.innerText += "\r\n";
      obj.scrollTop = obj.scrollHeight;
      write();
    }
  }
}

write();
