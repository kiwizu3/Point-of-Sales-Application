var xmlString= " <ENTRY> <DETAILS DTLID='D1'><USERNAME>MUNNI</USERNAME><PASSWORD>mn01</PASSWORD></DETAILS><DETAILS DTLID='D2'><USERNAME>NAWAZ </USERNAME><PASSWORD>nz02</PASSWORD></DETAILS><DETAILS DTLID='D3'><USERNAME>APPU </USERNAME><PASSWORD>ap03</PASSWORD></DETAILS><DETAILS DTLID='D4'><USERNAME>CHAMMU </USERNAME><PASSWORD>cm04</PASSWORD></DETAILS><DETAILS DTLID='D5'><USERNAME> TACCHI </USERNAME><PASSWORD>tc05</PASSWORD></DETAILS></ENTRY>";

var myXmlDocument, myEntries, myDocument;

function dataLoad(){
    if(window.DOMParser)
    {
        myParser= new DOMParser();
        myDocument= myParser.parseFromString(xmlString, "text/xml");
        myEntries= myDocument.getElementsByTagName("DETAILS");
    }
    else{
        myXMLDocument= new ActiveXObject("MicroSoft.XMLDOM");
        myXMLDocument.async= false;
        myXMLDocument.loadXML(xmlString);
        root= myXmlDocument.documentElement;
        myEntries= root.getElementsByTagName("DETAILS");
    }
}

dataLoad();


function validate(){
    var aflag=1, bflag=1;
  
    for(var i=0;i<(myEntries.length);i++){
        if((myEntries[i].childNodes[0].firstChild.nodeValue)==(document.getElementById("username").value)){
			aflag=0;
			break;
        }    
    }

    for(var i=0;i<(myEntries.length);i++){
        if((myEntries[i].childNodes[1].firstChild.nodeValue)==(document.getElementById("password").value)){
			bflag=0;
			break;
		}
    }

    if( (aflag==1) && (bflag==1))
        alert("Invalid UserName and Password");
    else if(bflag==1)
        alert("Invalid Password");
    else if(aflag==1)       
        alert("Invalid Username");
    else
		location.href="product.html";
}


