/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  switch(searchType){
    case 'yes':
      searchByName(people);
      break;
    case 'no':
      displayTraits(people)
      break;
    default:
      app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			displayPerson(person);
			break;
		case "family":
      displaySpouse(getSpouse(person, people));
      displaykids(getChildren(person, people));
      displaySibling(getSibling(person, people));
      displayParents(getParents(person, people));
			break;
		case "descendants":
			//Still Need Todo
			break;
		case "restart":
			app(people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(person, people); // ask again
	}
}

function searchByName(people) {
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  filterByName(firstName, lastName, people);
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person) {
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "gender: " + person.gender + "\n";
  personInfo += "dob: " + person.dob + "\n";
  personInfo += "height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n";
  personInfo += "eyeColor: " + person.eyeColor + "\n";
  personInfo += "occupation: " + person.occupation + "\n";
  alert(personInfo);
}

// family list
function displaySpouse(person) {
  if (person) {
  var personFamily = "Spouse: " + person.firstName + " " + person.lastName + "\n";
  alert(personFamily);
  }
  else {
    alert("No Spouse");
  }
}
function displaykids(person) {
  var personKids = "";
  for (i = 0; i < person.length; i++) {
    personKids += "Children: " + person[i].firstName + " " + person[i].lastName + "\n";
  }
  alert(personKids);
}
function displaySibling(person) {
  var personSibs = "";
  for (i = 0; i < person.length; i++) {
    personSibs += "Siblings: " + person[i].firstName + " " + person[i].lastName + "\n";
  }
  alert(personSibs);
}
function displayParents(person) {
  var personParents = "";
  for (i = 0; i < person.length; i++) {
    personParents += "Parents: " + person[i].firstName + " " + person[i].lastName + "\n";
  }
  alert(personParents);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question);
  } while(!response /*|| !valid(response)*/);
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return false; // default validation only
}

// get trait
function displayTraits(people) {

    alert("Please answer the following questions, if you do not know the answer please leave blank");

    var personHeight = prompt("What is the person's height? ex: 75");
    var personWeight = prompt("How much does the person weigh? Ex: 165");
    var personGender = prompt("What gender is the person that you are looking for, 'male' or 'female'?");
    var personEyeColor = prompt("What is the persons eye color?");
    var personOccupation = prompt("What is the persons occupation? Ex: doctor");


    var getTraitsList = getTraits(personHeight, personWeight, personGender, personEyeColor,personOccupation, people);
    var selectedPerson = pickPerson(getTraitsList);
    mainMenu(selectedPerson, people);
}
function getTraits(height,weight,gender,eyeColor,occupation, people) {
  return people.filter(function(person) {
    if (height && person.height !=height) {
      return false;
    }
    if (weight && person.weight != weight) {
      return false;
    }
    if (gender && person.gender != gender) {
      return false;
    }
    if (eyeColor && person.eyeColor != eyeColor) {
      return false;
    }
    if (occupation && person.occupation != occupation) {
      return false;
    }
    return true;
  });
}
function pickPerson(getTraitsList) {
  var tratisFilter="";
  for (var i=0; i < getTraitsList.length; i++) {
    tratisFilter += (" Person: " + getTraitsList[i].firstName + " " + getTraitsList[i].lastName + ",");
  }
  alert(tratisFilter);
  return getTraitsList[0];
}

function displayPickPerson (firstName,lastName) {
  alert("Person: " + " " + tratisFilter);
}