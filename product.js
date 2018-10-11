var products= new Array();

var products= "<PRODUCTS>";
var p1= "<DETAILS><PCODE>P01</PCODE><NAME>Boiled Rice</NAME><PRICE>100</PRICE></DETAILS>";
var p2= "<DETAILS><PCODE>P02</PCODE><NAME>Basmati Rice</NAME><PRICE>99</PRICE></DETAILS>";
var p3= "<DETAILS><PCODE>P03</PCODE><NAME>Idli Rice</NAME><PRICE>98</PRICE></DETAILS>";
var p4= "<DETAILS><PCODE>P04</PCODE><NAME>Wheat Flour</NAME><PRICE>97</PRICE></DETAILS>";
var p5= "<DETAILS><PCODE>P05</PCODE><NAME>Maida</NAME><PRICE>96</PRICE></DETAILS>";
var p6= "<DETAILS><PCODE>P06</PCODE><NAME>Ragi Flour</NAME><PRICE>95</PRICE></DETAILS>";
var p7= "<DETAILS><PCODE>P07</PCODE><NAME>Pasta</NAME><PRICE>94</PRICE></DETAILS>";
var p8= "<DETAILS><PCODE>P08</PCODE><NAME>Gram Flour</NAME><PRICE>93</PRICE></DETAILS>";
var p9= "<DETAILS><PCODE>P09</PCODE><NAME>Vermicelli</NAME><PRICE>92</PRICE></DETAILS>";
var p10= "<DETAILS><PCODE>P10</PCODE><NAME>Moong Dal</NAME><PRICE>91</PRICE></DETAILS>";
var p11= "<DETAILS><PCODE>P11</PCODE><NAME>Channa Dal</NAME><PRICE>90</PRICE></DETAILS>";
var p12= "<DETAILS><PCODE>P12</PCODE><NAME>Green Peas</NAME><PRICE>88</PRICE></DETAILS>";
var p13= "<DETAILS><PCODE>P13</PCODE><NAME>Ice Cream</NAME><PRICE>87</PRICE></DETAILS>";
var p14= "<DETAILS><PCODE>P14</PCODE><NAME>Sunflower Oil</NAME><PRICE>86</PRICE></DETAILS>";
var p15= "<DETAILS><PCODE>P15</PCODE><NAME>Coconut Oil</NAME><PRICE>85</PRICE></DETAILS>";
var p16= "<DETAILS><PCODE>P16</PCODE><NAME>Ghee</NAME><PRICE>84</PRICE></DETAILS>";
var p17= "<DETAILS><PCODE>P17</PCODE><NAME>Sugar</NAME><PRICE>83</PRICE></DETAILS>";
var p18= "<DETAILS><PCODE>P18</PCODE><NAME>Tea</NAME><PRICE>82</PRICE></DETAILS>";
var p19= "<ETAILS><PCODE>P19</PCODE><NAME>Coffee</NAME><PRICE>81</PRICE></DETAILS>";
var p20= "<DETAILS><PCODE>P20</PCODE><NAME>Cereal Boxes</NAME><PRICE>80</PRICE></DETAILS>";
var p21= "<DETAILS><PCODE>P21</PCODE><NAME>Biscuit</NAME><PRICE>79</PRICE></DETAILS>";
var p22= "<DETAILS><PCODE>P22</PCODE><NAME>Dish Washing Bar</NAME><PRICE>78</PRICE></DETAILS>";
var p23= "<DETAILS><PCODE>P23</PCODE><NAME>Toilet Cleaner</NAME><PRICE>77</PRICE></DETAILS>";
var p24= "<DETAILS><PCODE>P24</PCODE><NAME>Deodorants</NAME><PRICE>76</PRICE></DETAILS>";
var p25= "<DETAILS><PCODE>P25</PCODE><NAME>Shampoo</NAME><PRICE>75</PRICE></DETAILS>";
var p26= "<DETAILS><PCODE>P26</PCODE><NAME>Conditioner</NAME><PRICE>74</PRICE></DETAILS>";
var p27= "<DETAILS><PCODE>P27</PCODE><NAME>Hair Oil</NAME><PRICE>73</PRICE></DETAILS>";
var p28= "<DETAILS><PCODE>P28</PCODE><NAME>Dettol</NAME><PRICE>72</PRICE></DETAILS>";
var p29= "<DETAILS><PCODE>P29</PCODE><NAME>Onion</NAME><PRICE>71</PRICE></DETAILS>";
var p30= "<DETAILS><PCODE>P30</PCODE><NAME>Tomato</NAME><PRICE>70</PRICE></DETAILS>";   
var endProduct="</PRODUCTS>";

products=products+p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18+p19+p20+p21+p22+p23+p24+p25+p26+p27+p28+p29+p30+endProduct;


var myXmlDocument, myEntries, myDocument;

function productLoad(){
    if(window.DOMParser)
    {
        myParser= new DOMParser();
        myDocument= myParser.parseFromString(products, "text/xml");
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

window.onload= function(){
	productLoad();
}

function populate(){
    document.getElementById("popText").innerHTML="";
    var productCode  = document.getElementById("pCode").value;
    var unit  = document.getElementById("units").value;

    if(productCode==" "){
        document.getElementById("popText").innerHTML="Invalid product code";
        document.getElementById("pCode").focus();
    }

    else if(unit==" "){
        document.getElementById("popText").innerHTML="Invalid units";
        document.getElementById("units").focus();
    }

    else if(parseInt(unit)<1){
        document.getElementById("popText").innerHTML="Please Enter Non Zero Value";
        document.getElementById("units").value="";
        document.getElementById("units").focus();
    }


    else{
        var match;
        aflag=1;
        for(var i=0;i<myEntries.length;i++){
            if((myEntries[i].childNodes[0].firstChild.nodeValue)==pcode)
            {
                aflag=0;
                match=i;
                break;
            }

            }
        }

        if(aflag==0){
            var pname = myEntries[match].childNodes[1].firstChild.nodeValue;
            var price = myEntries[match].childNodes[2].firstChild.nodeValue;
            billDetails(unit,pcode,pname,price);

        }
        else{
            document.getElementById("popText").innerHTML="Enter valid code";
            document.getElementById("pCode").value="";
            document.getElementById("pCode").focus();
        }
}

function populateBill(pCode,unit){
    var pCode;
    var unit;
    var name;
    var price;

    var flag=0;

    pCode= this.pCode;
    unit = this.unit;

    for(var i=0;i<myEntries.length;i++){

        if(myEntries[i].childNodes[0].firstChild.nodeValue==pCode){
            flag=1;

            name = myEntries[i].childNodes[1].firstChild.nodeValue;
            alert(name);
            price = myEntries[i].childNodes[2].firstChild.nodeValue;
            break;
        }

    }

   return flag;

}

var columns = ["c1","c2","c3","c4","c5"];
var maxCount=0;

function billDetails(units, pCode,name, price){
    var flag = 1;
    var find;
    for(var i=0;i<5;i++){
        if(document.getElementById(columns[i]).childNodes[1].innerHTML == pCode){
        find=i;
        flag=0;
        break;
        }
    }

    if(flag==0){
        var pUnits = document.getElementById(columns[find]).childNodes[7].innerHTML;
        units_=parseInt(pUnits_);
        pUnits_=parseInt(units)+pUnits;
        document.getElementById(columns[find]).childNodes[7].innerHTML=pUnits;

        linePrice = parseFloat(pUnits)*parseFloat(price);
        document.getElementById(columns[find]).childNodes[9].innerHTML= linePrice;
    }
    else if(maxCount>0){

        //check if the product is not recorded
        line_price = parseFloat(price)*parseFloat(units);
        //alert(p_name);
        document.getElementById(columns[maxCount]).setAttribute("style","");
        //alert(p_code + " " + p_name + " " + price + " " + units + " " + line_price);
        //alert(document.getElementById("t1").innerHTML);
        document.getElementById(columns[maxCount]).childNodes[1].innerHTML= pCode;
        document.getElementById(columns[maxCount]).childNodes[3].innerHTML= name;
        document.getElementById(columns[maxCount]).childNodes[5].innerHTML= price;
        document.getElementById(columns[maxCount]).childNodes[7].innerHTML= units;
        document.getElementById(columns[maxCount]).childNodes[9].innerHTML= linePrice;
        maxCount--;
    }
    taxCalculation();
}

function taxCalculationax(){
    var sgst, cgst,grand;
    var tax=0;
    var lineTotal=0;
    for(var i=0;i<maxCount;i++){
        var lineP = document.getElementById(cols[i]).childNodes[9].innerHTML;
        taxP = (parseFloat(lineP)*4)/100;
        tax = tax+taxP;
        lpTotal = lpTotal+parseFloat(lineP);
    }
    sgst=tax;
    cgst=tax;

    document.getElementById("sgst").innerHTML= "sgst:"+sgst;
    document.getElementById("cgst").innerHTML= "cgst:"+cgst;

    grand=cgst+sgst+lpTotal;
    document.getElementById("grand").innerHTML= "grand total:"+grand;

}

var billWindow;
function generateBill(){
    if(billWindow!=null){
        billWindow.close();
    }

    if(maxCount<5){
        billWindow = window.open("","bill.html","height=600 width=400");
        str = createHTML();
        billWindow.document.write(str);
    }
}

function createHTML(){
    var str="";
    var start="<html>";
        var head1 = "<head><title>Bill</title>";
        var head2 ="<style>table ,td,th{border: 1px dotted black;}table {border-spacing: 1px;}div{text-align:center;}</style>"+"</head>";
        var head = head1+head2;
        var body_start = "<body>";

        var body_end = "</body>";

    var end="</html>";


    var banner_ = "<div class='bill'>Acme Grocers</div>";
    var d = new Date();
    var date_ = "<div class='time_date'>Date:"+d.toLocaleDateString()+"</div>";
    var table_start="<table>";
    var table_head= "<tr><th>Name</th> <th>Cost</th><th>Units</th><th>Line Cost</th></tr>";
    var table_data = makeTable();
    var table_end = "</table>";

    var table_ = table_start+table_head+table_data+table_end;

    var grandtotal_ = "<div class='grand'>"+"<b>"+document.getElementById("grand").innerHTML+"</b>s"+"</div>";
    var cgst_ = "<div class='grand'>"+document.getElementById("cgst").innerHTML+"</div>";
    var sgst_ = "<div class='grand'>"+document.getElementById("sgst").innerHTML+"</div>";
    var footer_ = "<div class='footer'>"+"Thank you!!"+"</div>";

    str=str+start+head+body_start+banner_+date_+table_+cgst_+sgst_+grandtotal_+footer_+body_end+end;
    return str;

}

function makeTable(){
        str="";
    for(var i=0;i<maxCount;i++){

        p_name_ = document.getElementById(columns[i]).childNodes[3].innerHTML;
        price_ = document.getElementById(columns[i]).childNodes[5].innerHTML;
        units_=document.getElementById(columns[i]).childNodes[7].innerHTML;
        line_p_=document.getElementById(columns[i]).childNodes[9].innerHTML;

        s = "<td>"+p_name_+"</td>"+"<td>"+price_+"</td>"+"<td>"+units_+"</td>"+"<td>"+line_p_+"</td>";
        start = "<tr id="+cols[i]+">";
        end = "</tr>";
        str = str+ start + s + end;
    }
    return str;
}


