// 01************************
function info(){
let userName = document.getElementById('name').value;
var fatherName = document.getElementById('fatherName').value;
var email = document.getElementById('email').value;
var number = document.getElementById('no').value;
document.write('Name : '+userName+'<br>')
document.write('Fathername: '+fatherName+'<br>')
document.write('Email: '+email+'<br>')
document.write('Number :'+number+'<br>')
};

// 02***************************
function readMoreOf(){
    var description='reiciendis, saepe optio nisi dolorum in repellat suscipit itaque aliquid ea iusto quasi blanditiis illum ex nam, officia ipsam neque doloribus';
    var pera=document.getElementById('pera');
    pera.innerHTML += description
};

// 03****************************
let table = document.getElementById('recordTable')

function addRecord(){
    let studentName = document.getElementById('stdName')
    let studentClass = document.getElementById('stdClass')
    let row = document.createElement('tr')
    let nametd = document.createElement('td')
    let classtd = document.createElement('td')
    let edittd = document.createElement('td')
    let deletetd = document.createElement('td')
    let nameText = document.createTextNode(studentName.value)
    let classText = document.createTextNode(studentClass.value)
    let editBtn = document.createElement('button')
    let editText = document.createTextNode("Edit")
    editBtn.setAttribute('onclick','editRecord(this)')
    editBtn.appendChild(editText)
    let delBtn = document.createElement('button')
    let delText = document.createTextNode("Delete")
    delBtn.setAttribute('onclick','deleteRecord(this)')
    delBtn.appendChild(delText)
    
    nametd.appendChild(nameText)
    classtd.appendChild(classText)
    edittd.appendChild(editBtn)
    deletetd.appendChild(delBtn)
    row.appendChild(nametd)
    row.appendChild(classtd)
    row.appendChild(edittd)
    row.appendChild(deletetd)
    table.appendChild(row)

    studentName.value = ""
    studentClass.value = ""
}

function editRecord(e){
    let val = e.parentNode.parentNode.firstChild.innerText
    let newVal = prompt("Edit your record",val)
    let classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
    let newClass = prompt("Edit your Class",classval)
    e.parentNode.parentNode.firstChild.innerText = newVal
    e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
}

function deleteRecord(e){
    e.parentNode.parentNode.remove()
};
