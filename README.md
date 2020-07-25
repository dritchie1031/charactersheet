# Character Sheet App

![GitHub issues](https://img.shields.io/github/issues/dritchie1031/charactersheet?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/dritchie1031/charactersheet?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dritchie1031/charactersheet?style=plastic)

Welcome to my Character Sheet App!! I'll come up with a new name when the project gets closer to completion, but right now a descriptive title is fine. This is a character sheet app for D&D 5th edition, where you can store your character's information on your computer with a clean interface and intuitive mechanics. I know there are several of these out there already, but none of them have really satisfied me with either a clunky UI or forcing payment for content to put in your character sheet. This won't have any 5e content built into it, but it allows you to input your own content. 

## Features

### Multiple Pages with easy navigation

There are four pages in the app: Character, Background, Spells, and Inventory. The spells page is removed if you're not a caster. Bottom navigation is used to easy traversal through the pages. 

### Editor View

Sometimes you need to go in and make major changes to your sheet. But, you don't want to do this most of the time. So, we have an editor view that lets you make major changes. The display view still has buttons and components that allow you to modify HP, Hit Dice, and other resources, so that you don't have to go into editor view for every little change.

### Import/Export to JSON

This feature isn't developed yet, but it's coming soon. I want you to be able to export your character's data to JSON, so you can have it on your computer and import it later to load your character. For the time being this will be the only way to save your character, but don't worry, that will be addressed! 

### Specific Menus: Combat, Social, and Exploration

Once again, not developed yet, but I want an easy menu for players to look at for combat, social, and exploration encounters. That way, you don't have to spend all of your time flipping back and forth between your spell and features. At some point, I want to include a tag feature that allows you to tag certain class features as combat, social, and/or exploration related, so you can get a truly comprehensive menu for your encounter's needs.

## Roadmap

The app isn't even in its beta yet, but I already have some plans for the future.

### Cloud Storage

I am looking at google's Cloud Firebase services for authentication and storing your character's data in the cloud! 

### Offline Capabilities

Despite the cloud functionality, I also want to make sure that this app works offline. Most of it is front end, so the JSON import/export already provides some offline functionality. But, if I decide to use Cloud Firestore, I can configure it to work offline, and I intend to use IndexedDB and LocalStorage to give it even better offline functionality.

### Mobile App

At some point, I want to allow this to work as a mobile app, not just an electron app. It's possible that I'm shooting myself in the foot by not making it mobile compatible from the start, but hopefully not!

## Installation

Coming soon!

## Contributing

This is currently a personal project that I'm using to practice several important concepts and technologies, so I won't be taking outside pull requests for the time being. However, I may open it up once I get further into the application. And, if you have any tips/suggestions/questions/comments, feel free to let me know.

## License

This app is distributed under GPLv3. 

Electron, Node.js, and Material-UI are MIT-licensed.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).