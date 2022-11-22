//testing code to see if main.js is linked
console.log('main.js is running.')
//display current date and time on page
function myClock() {         
    setTimeout(function() {   
      const d = new Date();
      document.getElementById("dateContainer").innerHTML = `&#128198 Date: ${d.toLocaleDateString(
        'default', {weekday: 'short'})} ${d.toLocaleDateString()}`; 
      document.getElementById("clockContainer").innerHTML = `&#8986 Time: ${d.toLocaleTimeString()}`; 
      myClock();             
    }, 1000)
  }
  myClock();    


function resetErrors() {
  //empty error messages before validation start.
  let errorElement = document.querySelectorAll('.errorMsg');
  for (let i = 0; i < errorElement.length; ++i) {
      errorElement[i].innerHTML = '';
  }
}

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resetErrors();
  //declare variables
const taskName = document.getElementById("taskNameInput").value;
const taskNameError = document.getElementById("errorMsgTaskName")
const description = document.getElementById("taskDescriptionTextarea").value;
const descriptionError = document.getElementById("errorMsgDescription")
const assignedTo = document.getElementById('assignedToMultipleSelect')
const assignedToError =document.getElementById('errorMsgAssignedTo')
const taskStatus = document.getElementById("statusSelect")
const taskStatusError = document.getElementById("errorMsgStatus")
//date related variables
/*const dueDateError= document.getElementById('errorMsgDate')
let today = new Date().getTime();
let dueDateDay = document.getElementById("dateInput").value.getTime();*/

  //checkName;
  if(taskName.trim()=== ""||taskName.length< 3||taskName == null){
    taskNameError.innerHTML="*Task Name must be more than 3 characters."
    taskNameError.style.color = 'red'
  }
  //checkDescription;
  else if(description.trim()===""||taskName.length> 300||description == null){
    descriptionError.innerHTML="*Must not be blank; <br>*Maximum length: 300 characters."
    descriptionError.style.color = "red"
  }
  //checkAssigned to
  else if(assignedTo.selectedIndex == -1){
    assignedToError.innerHTML="*Must select at least one person."
    assignedToError.style.color="red"
  } 
  //check due date
  /*else if(dueDateDay ===''||dueDateDay == null ||dueDateDay < today) {
    dueDateError.innerHTML ="*Due date must not be empty.<br>* Due date must be set in the future."
    dueDateError.style.color='red'
  }*/
  //checkStatus;
  else if(taskStatus.selectedIndex == 0){
    taskStatusError.innerHTML="Status must be selected."
    taskStatusError.style.color="red"
  }
}, false)




