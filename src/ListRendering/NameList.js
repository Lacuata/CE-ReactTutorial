import React from "react";
import Person from "./Person";
const NameList = () => {
  //   const names = ["Ciaoo", "Wency", "Diana"];  // this is array of string
  //   const ages = [23, 24, 25]; // array of number
  const profile = [
    //array of person ojb
    {
      name: "Ciaoo",
      age: 23,
      gender: "M",
    },
    {
      name: "Wency",
      age: 24,
      gender: "M",
    },
    {
      name: "Diana",
      age: 24,
      gender: "Female",
    },
  ];

  const PersonData = [
    {
      id: 1,
      name: "Ciaoo",
      age: 24,
      skill: "Dancing",
    },
    {
      id: 2,
      name: "Diana",
      age: 24,
      skill: "Dancing",
    },
    {
      id: 2,
      name: "Diana",
      age: 24,
      skill: "Dancing",
    },
  ];

  const PersonList = PersonData.map((person, i) => (
    <Person person={person} key={i} />
  ));

  return (
    <div>
      {/* using normal */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
      {/* using forEach */}

      {/* using map */}
      {/* {names.map((name, i) => (
        <h2 key={i}>{name}</h2>
      ))} */}

      {/* using filter return new array if the condition is true add it to new array if false don't  */}
      {/* {ages.filter((age) => age > 23)} */}

      {/* combination between filter and map if person.age > 23 it's and name === Diana and gender is Female is gonna add to new array and called it using map to show which profile returned and if'ts true */}

      {/* using object array */}
      {profile
        .filter((person) => person.age > 23)
        .filter((person) => person.name === "Diana")
        .filter((person) => person.gender === "Female")
        .map((person, i) => (
          <h1 key={i}>
            {person.name} is {person.age}years old and {person.gender}
          </h1>
        ))}

      <div>{PersonList}</div>
    </div>
  );
};

export default NameList;
