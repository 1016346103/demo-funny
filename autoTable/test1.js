//table的行数和列数都未知
//table的内容自动生成
var arr = [["id","name","age","weight","height"],["1234","zyd1","18","90","155"],["1234","zyd1","18","90","155"],["1234","zyd1","18","90","155"],["1234","zyd1","18","90","155"],["1234","zyd1","18","90","155"]];


var fra = document.createDocumentFragment();
//创建表格
var autoTable = document.createElement("table");
autoTable.className += "autoTable";
fra.appendChild(autoTable);

//创建行列
var line = arr.length;//有几列
var row = arr[0].length;//有几行
var tr = new Array(line);
var td = new Array(row);
for(var i=0;i<line;i++){
    tr[i] = document.createElement("tr");
    autoTable.appendChild(tr[i]);
    for(var j=0;j<row;j++){
        td[j] = document.createElement("td");
        td[j].innerText = arr[i][j];
        tr[i].appendChild(td[j]);
        if(i==0){//第一行
            tr[i].style = "background-color:white";
            td[j].style = "";
        }
    }

}

//将表格加入
var area = document.getElementById("tableArea");//显示table的
area.appendChild(fra);