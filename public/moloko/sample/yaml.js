// src/samples/yaml.ts
var yaml_default = `

#Comment: Student record
#Describes some characteristics and preferences
---
name: Martin D'vloper #key-value
age: 26
hobbies:
  - painting #first list item
  - playing_music #second list item
  - cooking #third list item
programming_languages:
  java: Intermediate
  python: Advanced
  javascript: Beginner
favorite_food:
  - vegetables: tomatoes
  - fruits:
      citrics: oranges
      tropical: bananas
      nuts: peanuts
      sweets: raisins

`;

export { yaml_default as default };
