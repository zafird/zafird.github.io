var idVal = 0;

function addArtist(){

  if(document.getElementById("form").style.display === "none"){
    document.getElementById("form").style.display = "block";
    document.getElementById("addButton").style.display="block";
  }
  else{

  var nameBox = document.createElement("INPUT");
  nameBox.setAttribute("type", "text");
  nameBox.setAttribute("placeholder", "Artist Name");
  nameBox.setAttribute("id", "nameBox");
  nameBox.setAttribute("maxlength", "40");

  let aboutBox = document.createElement("INPUT");
  aboutBox.setAttribute("type", "text");
  aboutBox.setAttribute("placeholder", "About artist");
  aboutBox.setAttribute("id", "aboutBox");
  aboutBox.setAttribute("maxlength", "40");

  let urlBox = document.createElement("INPUT");
  urlBox.setAttribute("type", "text");
  urlBox.setAttribute("placeholder", "Image url");
  urlBox.setAttribute("id", "urlBox");


  document.getElementById("form").appendChild(nameBox);
  document.getElementById("form").appendChild(aboutBox);
  document.getElementById("form").appendChild(urlBox);

  let addButton = document.createElement("BUTTON");
  addButton.setAttribute("id", "addButton");

  document.getElementById("container").appendChild(addButton);
  document.getElementById("addButton").textContent = 'Add';
  addButton.addEventListener("click", add);
  }

}


function add(){
  var name = document.getElementById("nameBox").value;
  var about = document.getElementById("aboutBox").value;
  var url = document.getElementById("urlBox").value;

  var idNum = idVal;
  

  let newPerson = document.createElement("DIV");
  newPerson.setAttribute("class", "person");
  newPerson.setAttribute("id", idNum);

  let newName = document.createElement("DIV");
  newName.setAttribute("id", "name");

  let aboutPerson = document.createElement("DIV");
  aboutPerson.setAttribute("id", "about");

  
  let urlPerson = document.createElement("DIV");
  let pic = document.createElement("IMG");
  pic.setAttribute("src", url); //"https://randomuser.me/api/portraits/med/women/7.jpg"
  urlPerson.setAttribute("id", "pic");
  urlPerson.appendChild(pic);


  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.setAttribute("id", "delete");


  let infoPerson = document.createElement("DIV");
  infoPerson.setAttribute("id", "info");

  document.getElementById("artists").appendChild(newPerson);
  

  newPerson.appendChild(urlPerson);
  
  infoPerson.appendChild(newName);
  
  infoPerson.appendChild(aboutPerson); 
  infoPerson.appendChild(deleteBtn);
  
  newPerson.appendChild(infoPerson);
  idVal++;

  newName.textContent = name;
  aboutPerson.textContent = about;

  let user = {
    // name: String(document.getElementById("nameBox").value),
    // about: String(document.getElementById("aboutBox").value)
    name: 'bob',
    about: 'dylan'
  }

  fetch('/all', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
   })
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
   })
   .catch((err) => console.log(err))

  deleteBtn.textContent = 'Delete';
  

  document.getElementById("form").reset();
  document.getElementById("form").style.display="none";
  document.getElementById("addButton").style.display="none";

  deleteBtn.addEventListener("click", function(){deletePerson(idNum)})
}

function deletePerson(id){
  var person = document.getElementById(id);
  person.parentNode.removeChild(person);

}