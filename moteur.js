var item = new Array();


// "Page","Address","","Title of the page","Keyword","Description of the page"



//a
c=0; item[c]=new Array("","","Aa","a, a","A, a");

//b
c++; item[c]=new Array("","","Монгол Улс 《ᠮᠣᠩᠭᠣᠯ ᠤᠯᠤᠰ》","mongolia, a","Mongolia");



page=
"<html><head><title>Results of the search</title></head><body bgcolor='peachpuff'><center><a href=''><img src='data:image/png;base64,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' style='max-width:100px;width: auto;'/></a><table border=0 cellspacing=10 width=80%>"
;

function search(frm) {
	win=window.open("", "_self");
	win.document.write(page);
	txt = frm.srchval.value.split(" ");
	fnd = new Array(); total=0;
	for (i = 0; i < item.length; i++) {
		fnd[i] = 0; order = new Array(0, 4, 2, 3);
		for (j = 0; j < order.length; j++)
		for (k = 0; k < txt.length; k++)
		if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
		fnd[i] += (j+1);
	}
	for (i = 0; i < fnd.length; i++) {
		n = 0; w = -1;
		for (j = 0;j < fnd.length; j++)
		if (fnd[j] > n) { n = fnd[j]; w = j; };
		if (w > -1) total += show(w, win, n);
		fnd[w] = 0;
	}
win.document.write("</table><br><font face='meiryo'>Ойролцоогоор <b>"+total+"</b> илэрц</font><br></body></html>");
win.document.close();
}
function show(which,wind,num) {
	link = item[which][1] + item[which][0]; 
	line = "<tr><td><a href='"+link+"' style='color:black; font-family:DFKai-SB;font-size: 38px ; text-decoration:none;'>"+item[which][2]+"</a> <br/>";
	line += item[which][4] + "</td></tr>";
	wind.document.write(line);
return 1;
}
