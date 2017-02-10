/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/

function filterByName(firstName, lastName, people){
var info = 0;
	for ( i = 0; i < people.length; i++) {
		if(firstName === people[i].firstName && lastName === people[i].lastName) {
				info ++;
				break;
		}
	}
	
	if ( info > 0) {
		mainMenu(people[i],people);
	}
	else if ( info === 0) {
		mainMenu(0,people);
	}
}

function getSpouse(person, people){
	for (var i = 0; i < people.length; i++) {
		if (person.id == people[i].currentSpouse) {
	        return people[i];
	    }
	}
}
function getChildren(person, people) {
  var children = people.filter(function (family) {
    return family.parents.includes(person.id);
  });
  console.log(children);
  return children;
}

//function getDescendants(person, people){}