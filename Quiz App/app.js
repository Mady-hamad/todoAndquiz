const firebaseConfig = {
    apiKey: "AIzaSyAppUfjqwFDUZXIsGcrtZndyjTLkRgDJM4",
    authDomain: "quizapp-9a29d.firebaseapp.com",
    databaseURL: "https://quizapp-9a29d-default-rtdb.firebaseio.com",
    projectId: "quizapp-9a29d",
    storageBucket: "quizapp-9a29d.appspot.com",
    messagingSenderId: "1089697983835",
    appId: "1:1089697983835:web:c8dee0e2166881c014fe7e"
  };

  const app = firebase.initializeApp(firebaseConfig);

  console.log(firebase);



 


function checkAns(){
var name = document.getElementById('name')
var score = 0;
var rightAns = document.getElementById('q1-a1')
var q1_answer2 = document.getElementById('q1-a2')
var q1_answer3 = document.getElementById('q1-a3')
var q1_answer4 = document.getElementById('q1-a4')

if(rightAns.checked === true){

    score ++
    alert(' Q1 Answer is right!!!')
}
else{

    alert('Q1 Answer is wrong!')
}


var rightAns2 = document.getElementById('q2-a2')
var q2_answer2 = document.getElementById('q2-a1')
var q2_answer3 = document.getElementById('q2-a3')
var q2_answer4 = document.getElementById('q2-a4')

if(rightAns2.checked === true){
    score++
    alert('Q2 Answer is right!!!');
    
    
}
else{
    alert(' Q2 Answer is wrong!')
}



var rightAns3 = document.getElementById('q3-a4')
var q3_answer2 = document.getElementById('q3-a1')
var q3_answer3 = document.getElementById('q3-a3')
var q3_answer4 = document.getElementById('q3-a2')

if(rightAns3.checked === true){
    score++
    alert('Q3 Answer is right!!!');
    
    
}
else{
    alert(' Q3 Answer is wrong!')
}



var rightAns4 = document.getElementById('q4-a2')
var q4_answer2 = document.getElementById('q4-a1')
var q4_answer3 = document.getElementById('q4-a3')


if(rightAns4.checked === true){
    score++
    alert('Q4 Answer is right!!!');
    
    
}
else{
    alert(' Q4 Answer is wrong!')
}


alert("Your Score is" +  " " +  score++)



if(name.value === ""){
    alert("Please Enter Your Name!")
}
else{
    firebase.database().ref('name').set(name.value)
    firebase.database().ref('score').set(score)
    document.write("Your score is" + score + '/4')
    
}

}