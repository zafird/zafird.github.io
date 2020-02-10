var idVal = 0;
var name
var about;
var url;
var storage = -1;

function addArtist(){

  if(document.getElementById("form").style.display === "none"){
    document.getElementById("form").style.display = "block";
    if(storage == 0){
    document.getElementById("addButton").style.display="block";
    }
  }
  else{

  nameBox = document.createElement("INPUT");
  nameBox.setAttribute("type", "text");
  nameBox.setAttribute("placeholder", "Artist Name");
  nameBox.setAttribute("id", "nameBox");
  nameBox.setAttribute("maxlength", "40");

  aboutBox = document.createElement("INPUT");
  aboutBox.setAttribute("type", "text");
  aboutBox.setAttribute("placeholder", "About artist");
  aboutBox.setAttribute("id", "aboutBox");
  aboutBox.setAttribute("maxlength", "40");

  urlBox = document.createElement("INPUT");
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
  if(storage == 0){
    name = document.getElementById("nameBox").value;
    about = document.getElementById("aboutBox").value;
    url = document.getElementById("urlBox").value;
  }

  var idNum = idVal;
  var tempName = name;

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

  const person = {
    nameIs: name,
    aboutIs: about,
    urlIs: url,
  }

  console.log(idVal.toString());
 window.localStorage.setItem("artist"+ idVal, JSON.stringify(person));  //fix

 //window.localStorage.idVal = JSON.stringify(person);  

  deleteBtn.textContent = 'Delete';
  
  document.getElementById("form").reset();
  document.getElementById("form").style.display="none";
  if(storage == 0){
    document.getElementById("addButton").style.display="none";
  }

  deleteBtn.addEventListener("click", function(){deletePerson(idNum, tempName)})
}

function deletePerson(id, perName){
  var person = document.getElementById(id);
  // var aPerson = document.getElementById(id);
  // var aPersonInfo = aPerson.getElementById("info");
  // var aPersonName = aPersonInfo.getElementById("name");
  // var aName = aPersonName.innerHTML;

  
  window.localStorage.removeItem("artist" + id);
  person.parentNode.removeChild(person);
  console.log(window.localStorage);

}



function getStorage(){
  let person = JSON.parse(window.localStorage.getItem('user'));
  let personName = person.nameIs;
  let personAbout = person.aboutIs;
  let personURL = person.urlIs;

  name = personName;
  about = personAbout;
  url = personURL;
  //document.getElementById("nameBox").value = personName;
  //document.getElementById("aboutBox").value = personAbout;
  //document.getElementById("urlBox").value = personURL;
  //console.log(name);
  storage = 1;
  add();

  storage = 0;

}

document.addEventListener('readystatechange', event => {

  if (event.target.readyState === "complete") {
      getStorage();
  }

});

function searchArtists() {
	var textbox = document.getElementById("input");
	//var listbox = document.getElementById("list-box");

	var name = input.value;

	for (var i = 0; i < idVal; i++) {
		// if (!artistNames[i].includes(nameSearched)) {
      var person = document.getElementById(id);
      var name = person.getElementById(name);
      //if(!)
			//var listItem = document.getElementById(artistNames[i]);
			//listItem.style.display = "none";
  //}
	}
}