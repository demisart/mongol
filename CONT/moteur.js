var item = new Array();


// "Page","Address","","Title of the page","Keyword","Description of the page"



//A
c=0; item[c]=new Array("","","Аав"," a ","〔〕 Dad");

//Б
c++; item[c]=new Array("","","Бор"," a ","〔〕<br> Brown");

//В
c++; item[c]=new Array("","","Ваар"," a ","〔〕<br> Vase");

//Г
c++; item[c]=new Array("","","Гар"," a ","〔〕<br> Hand");

//Д
c++; item[c]=new Array("","","Дээл"," a ","〔〕<br> Deel (Traditional Mongolian clothing)");

page=
"<html><head><title>Results of the search</title></head><body bgcolor='#C2CDC2'><center><a href=''><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAAHECAYAAACnX1ofAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nO3deXzcdZ0/8Nf7O2fupPeR0tKGzExDW6ClNGmLLVZQ5BSK6HqhLqgouK6/FXVdiqsr7HosuuvBgoqKK1SUo8ByttJ20mILPUgySVMopU2vpGnuZI7v5/dH0stck2RmPt/vzOv5ePh4SDOZeXXSx/eVz3c+B0BEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQpJboDEKWt1Y854GrMB7xFiETzAXHAgAtK5Z5+kJELgQsAoBABzPZTXxJph4kIoGJwOVuB7maUHm3BmjVmqv8qRJmAhUgUr9WPOYCmKTAc06CMKTDUVJiYahiYokyZBlGTABT0/S8fQO7QTzhq7QBaALQCaIGSoyLqoKlwBAYOwZRDEPMwzFgDMP4w1t4US1IOorTCQiQ60wd+7EF+9nmAmgOoOYaS2QqYA8FsALMAuHVHHKEwgH2A7BWl3jIN2Qul3gJkL1o79+C5O3p0BySyChYiZa6bH5oGUy2EYc41FMqUyFwonA/AoztaisQAvAOgWpRUmaKqYajtiBaGOKqkTMRCpMyw+sESGOYlhpLFSuQSQC0A4NUdy6K6AOwUhddMQ7Yihtew9rP1ukMRJRsLkdLP6h9mwZlXjhiWi2AxBJdAYbzuWDbXCOA1BdkKQ21CtK0Sa7/SpTsUUSKxEMn+VqxxYuL0BXCoVaJkFYBl4Ogv2aIQ7BRTXjJhvoRs1yb8+pZu3aGIxoKFSPb04f8JQOSDotT7AVQAyNIdKcN1AdisRJ6HxNbhf28L6Q5ENFIsRLKHFWucmDh1iSGOq5SoawH4dUeiIb0twIumknVo63yBs1nJDliIZFmbfL48Q+Tqb55z1SUbinyfAZCjOxONSseK5tqHvrt/3VZTqaeX1da26Q5ENBCn7gBEZwoWF2dJbu4qpdRqiHwIQA4M+QtYhnaWA0MWALjDEOkO+v0vQWStaZp/ZjmSlbAQSbv1s2Z5vR7PNRC5SQFXKiALwpsX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' style='max-width:100px;width: auto;'/></a><table border=0 cellspacing=10 width=80%>"
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
	line = "<tr><td><a href='"+link+"' style='color:black; font-family:sarabun;font-size: 25px ; text-decoration:none;'>"+item[which][2]+"</a> <br/>";
	line += item[which][4] + "</td></tr>";
	wind.document.write(line);
return 1;
}
