// trait option
function traitGender(people) {
  var gender = promptFor ("Enter Gender Here. Option Are Male, Female or M, F.")
  switch (gender){
    case ("Male"):
    return gender;
    case ("Female"):
    return gender;
    case ("M"):
    return gender;
    case ("F"):
    return gender;
    default:
    alert ("Sorry please enter a gender");
    traitGender();
    break;
  }
}
function traitDateOfBirth(people) {
    var birthDay = promptFor ("Enter the date of birth. ex: MM/DD/YEAR");
}
function traitOccupation(people) {
    var occupation = promptFor ("Enter occupation. ex: assistant")
}
function traitID(people) {
    var id = promptFor ("Enter the ID Number Here. It should be 9 number long.")
}
function traitEyeColor(people) {
    var eyeColor = promptFor ("What is the person eye color?")
}