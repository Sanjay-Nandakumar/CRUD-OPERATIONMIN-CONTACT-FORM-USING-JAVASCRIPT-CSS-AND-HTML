//FUNCTION DECLARATION
var crudAppObj;
document.addEventListener("DOMContentLoaded", function (event) {
    debugger
    crudAppObj = new crudApp();
    crudAppObj.createTable();
});

//FUNCTION DEFINITION
class crudApp {
        public static State: string[];
        public static col: any[];
        public static Persons: {
                [x: string]: any;
                ID: string;
                Name: string;
                Mobile: string;
                State: string;
                Email: string;
                DOB: string;
        }[];


        Persons = [
                {
                        ID: '1',
                        Name: 'Sanjay Kumar',
                        Mobile: '7907420261',
                        State: 'Kerala',
                        Email: 'sanjay123@gmail.com',
                        DOB: '1996-03-17',
                },
                {
                        ID: '2',
                        Name: 'Aravind Ravichandran',
                        Mobile: '8075316409',
                        State: 'Tamilnadu',
                        Email: 'aravind123@gmail.com',
                        DOB: '1996-02-27',
                },
                {
                        ID: '3',
                        Name: 'Mohammed Yusuf',
                        Mobile: '9747407835',
                        State: 'Andhrapradesh',
                        Email: 'mohammed123@gmail.com',
                        DOB: '1996-04-23',
                }
        ]

        State = [
                'Andhra Pradesh',
                'Arunachal Pradesh',
                'Assam',
                'Bihar',
                'Chhattisgarh',
                'Goa',
                'Gujarat',
                'Haryana',
                'Himachal Pradesh',
                'Jammu & Kashmir',
                'Jharkhand',
                'Karnataka',
                'Kerala',
                'Madhya Pradesh',
                'Maharashtra',
                'Manipur',
                'Meghalaya',
                'Mizoram',
                'Nagaland',
                'Odisha',
                'Punjab',
                'Rajasthan',
                'Sikkim',
                'Tamil Nadu',
                'Telangana',
                'Tripura',
                'Uttarakhand',
                'Uttar Pradesh',
                'West Bengal'
        ];
        col = [];

        public createTable = function () {
//                 console.log("sanjay");

                // EXTRACT VALUE FOR TABLE HEADER.
                for (var i = 0; i < this.Persons.length; i++) {
                        for (var key in this.Persons[i]) {
                                if (this.col.indexOf(key) === -1) {
                                        this.col.push(key);
                                }
                        }
                }

                // CREATE A TABLE.

                var table: HTMLTableElement;
                table = document.createElement('table');
                table.setAttribute('id', 'personsTable'); // SET TABLE ID.
                var tr: HTMLTableRowElement;
                tr = table.insertRow(-1); // CREATE A ROW (FOR HEADER).
                for (var h = 0; h < this.col.length; h++) {
                        // ADD TABLE HEADER.
                        var th: HTMLTableHeaderCellElement;
                        th = document.createElement('th');
                        th.innerHTML = this.col[h].replace('_', ' ');
                        tr.appendChild(th);
                }

                var th: HTMLTableHeaderCellElement;
                th = document.createElement('th');
                th.innerHTML = "Create/Update";
                tr.appendChild(th);
                var th1: HTMLTableHeaderCellElement;
                th1 = document.createElement('th');
                th1.innerHTML = "Delete";
                tr.appendChild(th1);

                // ADD ROWS USING JSON DATA.
                //Static values

                for (var i = 0; i < this.Persons.length; i++) {
                        var tr: HTMLTableRowElement;
                        tr = table.insertRow(-1); // CREATE A NEW ROW.
                        for (var j = 0; j < this.col.length; j++) {
                                var tabCell = tr.insertCell(-1);
                                tabCell.innerHTML = this.Persons[i][this.col[j]];
                        }
                        // DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.
                        this.td = document.createElement('td');



                        // *** CANCEL OPTION.
                        tr.appendChild(this.td);
                        var lblCancel: HTMLLabelElement;
                        lblCancel = document.createElement('label');
                        lblCancel.innerHTML = 'x';
                        lblCancel.setAttribute('onclick', 'Cancel(this)');
                        lblCancel.setAttribute('style', 'display:none;');
                        lblCancel.setAttribute('title', 'Cancel');
                        lblCancel.setAttribute('id', 'lbl' + i);
                        this.td.appendChild(lblCancel);




                        // *** SAVE.
                        tr.appendChild(this.td);
                        var btSave: HTMLInputElement;
                        btSave = document.createElement('input');
                        btSave.setAttribute('type', 'button'); // SET ATTRIBUTES.
                        btSave.setAttribute('value', 'Save');
                        btSave.setAttribute('id', 'Save' + i);
                        btSave.setAttribute('style', 'display:none;');
                        btSave.setAttribute('onclick', 'Save(this)'); // ADD THE BUTTON's 'onclick' EVENT.
                        this.td.appendChild(btSave);




                        // *** UPDATE.
                        tr.appendChild(this.td);
                        var btUpdate: HTMLInputElement;
                        btUpdate = document.createElement('input');
                        btUpdate.setAttribute('type', 'button'); // SET ATTRIBUTES.
                        btUpdate.setAttribute('value', 'Update');
                        btUpdate.setAttribute('id', 'Edit' + i);
                        btUpdate.setAttribute('style', 'background-color:#44CCEB;');
                        btUpdate.setAttribute('onclick', 'Update(this)'); // ADD THE BUTTON's 'onclick' EVENT.
                        this.td.appendChild(btUpdate);





                        // *** DELETE.
                        this.td = document.createElement('th');
                        tr.appendChild(this.td);
                        var btDelete: HTMLInputElement;
                        btDelete = document.createElement('input');
                        btDelete.setAttribute('type', 'button'); // SET INPUT ATTRIBUTE.
                        btDelete.setAttribute('value', 'Delete');
                        btDelete.setAttribute('style', 'background-color:#ED5650;');
                        btDelete.setAttribute('onclick', 'Delete(this)'); // ADD THE BUTTON's 'onclick' EVENT.
                        this.td.appendChild(btDelete);
                }






                // ADD A ROW AT THE END WITH BLANK TEXTBOXES AND A DROPDOWN LIST (FOR NEW ENTRY).
                tr = table.insertRow(1); // CREATE THE LAST ROW.
                for (var j = 0; j < this.col.length; j++) {
                        var newCell = tr.insertCell(-1);
                        if (j >= 1) {



                                if (j == 3) { // WE'LL ADD A DROPDOWN LIST AT THE SECOND COLUMN (FOR State).
                                        var select = document.createElement('select');
                                        // CREATE AND ADD A DROPDOWN LIST.
                                        select.innerHTML = '<option value=""></option>';
                                        for (var k = 0; k < this.State.length; k++) {
                                                select.innerHTML = select.innerHTML + '<option value="' + this.State[k] + '">' + this.State[k] + '</option>';
                                        }
                                        select.setAttribute('id', 'select' + 3);
                                        newCell.appendChild(select);
                                }



                                if (j == 1) {
                                        var tBox = document.createElement('input'); // CREATE AND ADD A TEXTBOX.
                                        tBox.setAttribute('type', 'text');
                                        tBox.setAttribute('id', 'text1' + 1);
                                        newCell.appendChild(tBox);
                                }



                                if (j == 2) {
                                        var tBox = document.createElement('input'); // CREATE AND ADD A TEXTBOX.
                                        tBox.setAttribute('type', 'text');
                                        tBox.setAttribute('id', 'text2' + 2);
                                        newCell.appendChild(tBox);
                                }




                                if (j == 4) {
                                        var tBox = document.createElement('input'); // CREATE AND ADD A TEXTBOX.
                                        tBox.setAttribute('type', 'email');
                                        tBox.setAttribute('pattern', "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
                                        tBox.setAttribute('id', 'email' + 4);
                                        newCell.appendChild(tBox);
                                }



                                if (j == 5) {
                                        var tBox = document.createElement('input'); // CREATE AND ADD A TEXTBOX.
                                        tBox.setAttribute('type', 'date');
                                        tBox.setAttribute('id', 'date' + 5);
                                        newCell.appendChild(tBox);
                                }

                        }
                }



                var td: HTMLTableDataCellElement;
                this.td = document.createElement('td');
                tr.appendChild(this.td);
                var btNew = document.createElement('input');
                btNew.setAttribute('type', 'button'); // SET ATTRIBUTES.
                btNew.setAttribute('value', 'Create');
                btNew.setAttribute('id', 'New' + i);
                btNew.setAttribute('style', 'background-color:#207DD1;');
                btNew.setAttribute('onclick', 'CreateNew(this)'); // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btNew);
                var div = document.getElementById('container');
                div.innerHTML = '';
                div.appendChild(table); // ADD THE TABLE TO THE WEB PAGE.
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = " ";

        }


}

    // ****** OPERATIONS START.


    // CANCEL.
    var Cancel = function (oButton) {
        // HIDE THIS BUTTON.
    
        oButton.setAttribute('style', 'display:none; float:none;');
        let activeRow: HTMLTableRowElement;
        activeRow = oButton.parentNode.parentNode.rowIndex;
        // HIDE THE SAVE BUTTON.
        var btSave: HTMLElement;
        btSave = document.getElementById('Save' + (Number(activeRow) - 2));
        btSave.setAttribute('style', 'display:none;');
        // SHOW THE UPDATE BUTTON AGAIN.
        var btUpdate: HTMLElement;
        btUpdate = document.getElementById('Edit' + (Number(activeRow) - 2));
        btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');
        var tab: any = document.getElementById('personsTable')
        tab=tab.rows[Number(activeRow)];
        for (var i = 0; i < 6; i++) {
            var td = tab.getElementsByTagName("td")[i];
            td.innerHTML = crudAppObj.Persons[(Number(activeRow) - 2)][crudAppObj.col[i]];
        }
    }





    // EDIT DATA.
    var Update : any=function (oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
       var tab: any = document.getElementById('personsTable');
        tab=tab.rows[Number(activeRow)];
        // SHOW A DROPDOWN LIST WITH A LIST OF CATEGORIES.
        for (var i = 1; i < 6; i++) {

            if (i == 3) {
                var td = tab.getElementsByTagName("td")[i];
                var ele = document.createElement('select'); // DROPDOWN LIST.
                ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
                for (var k = 0; k < crudAppObj.State.length; k++) {
                    ele.innerHTML = ele.innerHTML + '<option value="' + crudAppObj.State[k] + '">' + crudAppObj.State[k] + '</option>';
                }
                td.innerText = '';
                td.appendChild(ele);
                td.setAttribute('id', '1233');

            }


            if (i == 5) {
                var td = tab.getElementsByTagName("td")[i];
                let ele: HTMLElement;
                ele = document.createElement('input'); // TEXTBOX.
                ele.setAttribute('type', 'date');
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
                td.setAttribute('id', '1235');
            }




            if (i == 4) {
                var td = tab.getElementsByTagName("td")[i];
                let   ele: HTMLElement;
                ele = document.createElement('input'); // TEXTBOX.
                ele.setAttribute('type', 'email');
                ele.setAttribute('pattern', "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
                td.setAttribute('id', '1234');
            }



            if (i == 1) {
                var td = tab.getElementsByTagName("td")[i];
                let ele: HTMLElement;
                ele = document.createElement('input'); // TEXTBOX.
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
                td.setAttribute('id', '1231');
            }




            if (i == 2) {
                var td = tab.getElementsByTagName("td")[i];
                let ele: HTMLElement;
                ele = document.createElement('input'); // TEXTBOX.
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
                td.setAttribute('id', '1232');
            }



            if (i == 6) {
                var td = tab.getElementsByTagName("td")[i];
                let   ele: HTMLElement;
                ele = document.createElement('input'); // TEXTBOX.
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', td.innerText);
                td.innerText = '';
                td.appendChild(ele);
                td.setAttribute('id', '1236');
            }

        }

        var lblCancel = document.getElementById('lbl' + (Number(activeRow) - 2));
        lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');
        var btSave = document.getElementById('Save' + (Number(activeRow)- 2));
        btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');// HIDE THIS BUTTON.
        oButton.setAttribute('style', 'display:none;');

    };



    // DELETE DATA.
    var Delete = function (oButton) {
        alert("Do you want to delete the record ?");
        var activeRow = oButton.parentNode.parentNode.rowIndex;
        crudAppObj.Persons.splice((activeRow - 2), 1); // DELETE THE ACTIVE ROW.
        crudAppObj.createTable();
        var x = document.getElementById("snackbar3");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000); // REFRESH THE TABLE.
    };



    // SAVE DATA.

    var Save = function (oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
       var tab: any = document.getElementById('personsTable');
      tab=tab.rows[Number(activeRow)];;
 
        // UPDATE Persons ARRAY WITH VALUES.
        for (var i = 1; i <6; i++) {
            if (i == 1) {
                var td = tab.getElementsByTagName("td")[i];// CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                if (td.childNodes[0].value == '') {
                    alert("Name is a mandatory field");
                    break;
                }
                else if (td.childNodes[0].value != '') {
                    crudAppObj.Persons[(Number(activeRow) - 2)][crudAppObj.col[i]] = td.childNodes[0].value; // SAVE THE VALUE.
                    crudAppObj.createTable();
                    var x = document.getElementById("snackbar2");
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000); // REFRESH THE TABLE.
                }
            }


            if (i == 2) {
                var phoneno1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
                var phoneno2 = /^\d{10}$/;
                var td = tab.getElementsByTagName("td")[i];
                if (((td.childNodes[0].value).match(phoneno1)) && (td.childNodes[0].value).match(phoneno2)) {
                    crudAppObj.Persons[(Number(activeRow) - 2)][crudAppObj.col[i]] = td.childNodes[0].value;
                    crudAppObj.createTable();
                    var x = document.getElementById("snackbar2");
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000); // REFRESH THE TABLE.
                }
                else {
                    alert("Provide a valid Mobile number with out any alphabets & should contain 10 digits");
                    break;
                }
            }


            if (i == 4) {
                var td = tab.getElementsByTagName("td")[i];
                crudAppObj.Persons[(Number(activeRow) - 2)][crudAppObj.col[i]] = td.childNodes[0].value;
                crudAppObj.createTable();
                var x = document.getElementById("snackbar2");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000); // REFRESH THE TABLE.
            }''
if (i == 3) {
                var td = tab.getElementsByTagName("td")[i];
                crudAppObj.Persons[(Number(activeRow) - 2)][crudAppObj.col[i]] = td.childNodes[0].value;
                crudAppObj.createTable();
                var x = document.getElementById("snackbar2");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 3000); // REFRESH THE TABLE.
            }

        }

    }


    // CREATE NEW.;
      var CreateNew = function (oButton) {
//         console.log("Entered CreateNew");
        var activeRow = oButton.parentNode.parentNode.rowIndex;
       var tab: any = document.getElementById('personsTable');
       tab=tab.rows[Number(activeRow)];

        var obj:any=[];
          var col:any= [];
        // ADD NEW VALUE TO Persons ARRAY.
        for (var i = 1; i <6; i++) {
            var td = tab.getElementsByTagName("td")[i];
            if (i == 5) {
                td.setAttribute('type', 'date');
            }



            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT' || td.childNodes[0].getAttribute('type') == 'date' || td.childNodes[0].getAttribute('type') == 'email') { // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                var txtVal = td.childNodes[0].value;
                if (td.childNodes[0].getAttribute('type') == 'date') {
                     obj[crudAppObj.col[i]] = txtVal.trim();
                }


                if (td.childNodes[0].tagName == 'SELECT') {
                    obj[crudAppObj.col[i]] = txtVal.trim();
                }



                if (td.childNodes[0].getAttribute('type') == 'email') {
                     obj[crudAppObj.col[i]] = txtVal.trim();
                }



                if (td.childNodes[0].getAttribute('type') == 'text' && (td.childNodes[0].id == "text11")) {
                    if (txtVal != '') {
                        obj[crudAppObj.col[i]] = txtVal.trim();
                    } else {
                        obj = '';
                        alert('Name is a mandatory field');
                        break;
                    }
                }




                if (td.childNodes[0].getAttribute('type') == 'text' && (td.childNodes[0].id == "text22")) {
                    var phoneno1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
                    var phoneno2 = /^\d{10}$/;
                    if (((txtVal.match(phoneno1))) && (txtVal.match(phoneno2))) {
                       obj[crudAppObj.col[i]] = txtVal.trim();
                    } else {
                      obj = '';
                        alert('Provide a valid Mobile number with out any alphabets & should contain 10 digits');
                        break;
                    }
                }

            }

        }


       obj[ crudAppObj.col[0]] = crudAppObj.Persons.length + 1; // NEW ID.
          if (Object.keys(obj).length > 0) { // CHECK IF OBJECT IS NOT EMPTY.
        crudAppObj.Persons.push(obj); // PUSH (ADD) DATA TO THE JSON ARRAY.
         crudAppObj.createTable();
        }

    }
    // ****** OPERATIONS END.