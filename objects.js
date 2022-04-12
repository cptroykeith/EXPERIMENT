const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100
  };
  console.log(person);
  console.log(person.name);
  console.log(person["name"]); // same as the line above; definitely prefer using the other one


  //we can also have functions in obects
  const person1 = {
    name: "Brian",
    ageRange: "25-35"
  };
  const person2 = {
    name: "Jack",
    ageRange: "65-75"
  };
  
  function suggestMusic(person) {
    if (person.ageRange === "25-35") {
      console.log("We think you'll like Daft Punk your crazy millenial.");
    } else if (person.ageRange === "65-75") {
      console.log(
        "You're obviously going to like Johnny Cash. He walks the line."
      );
    } else {
      console.log(
        "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
      );
    }
  }
  
  suggestMusic(person1);
  suggestMusic(person2);