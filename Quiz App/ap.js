const firebaseConfig = {
    apiKey: "AIzaSyB_xRL7hTPLkQHYIKVlPoHwvAm5aTdAYgo",
    authDomain: "todo-app-7a84d.firebaseapp.com",
    databaseURL: "https://todo-app-7a84d-default-rtdb.firebaseio.com",
    projectId: "todo-app-7a84d",
    storageBucket: "todo-app-7a84d.appspot.com",
    messagingSenderId: "374771784618",
    appId: "1:374771784618:web:3f8ae5802bcd397b08a9d3",
    measurementId: "G-W7QWQXD92W"
  };


  var app = firebase.initializeApp(firebaseConfig);


console.log(firebase)






var list = document.getElementById('list')


firebase.database().ref('todos').on('child_added' , function(data){


     var li = document.createElement('li')
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)


//creatinf del button
var DELbtn = document.createElement('button')
var delText = document.createTextNode('DELETE')


DELbtn.setAttribute('class' , 'btn')

DELbtn.setAttribute('id' , data.val().key)
DELbtn.setAttribute('onclick' , 'deleteItem(this)')
DELbtn.appendChild(delText)


//edit utton

var EDITbtn = document.createElement('button')
var editText= document.createTextNode("EDIT")
console.log(EDITbtn)
EDITbtn.appendChild(editText)

li.appendChild(EDITbtn)
EDITbtn.setAttribute('class' , 'btn')
EDITbtn.setAttribute('id' , data.val().key)
EDITbtn.setAttribute('onclick' , 'editItem(this)')






li.appendChild(DELbtn)
    list.appendChild(li)


})


function addtodo(){
    var todo_Item = document.getElementById('todo-item');

var key = firebase.database().ref('todos').push().key

 var database = firebase.database().ref('todos').push().key



var todo = {
    value: todo_Item.value,
    key: key
}


firebase.database().ref('todos').child(key).set(todo)



   

    

    // todo_Item.value = ""
    // console.log(li)

}


function deleteItem(e){

firebase.database().ref('todos').child(e.id).remove()


    e.parentNode.remove()


}




function deleteAll(){

    list.innerHTML = ""



}


function editItem(e){



   var val =  e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter edit value" , val)


   var todoEdit = {

    value: val,
    key: e.id
   }

firebase.database().ref('todos').child(e.id).set(todoEdit)

//    console.log(editValue)

e.parentNode.firstChild.nodeValue = editValue;

}
