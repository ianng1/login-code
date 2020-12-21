# login-code

This project should provide a simple login/authentication system that uses JWT to authenticate requests and maintain signin status instead of having to pull stuff using POST/GET all the time. Right now, the login/signup doesn't redirect to anywhere except a blank page, but we can try wiring it up to some existing code later, it shouldn't be super difficult.

You'll need to create a MongoDB database to connect to it; I recommend using cloud.mongodb.com. Once you've made a MongoDB instance, you'll need to connect it to the code. In the login-server/index.js file, there's a variable called mongoUri. The current string in there is for my MongoDB, and it won't work for yours. You'll need to make a new one and put in the connection link yourself. If you need help with that just ping me on Teams and I'll do it.

You'll also need to have Axios installed (you can just use ```npm install axios``` if I remember correctly. Once you've installed it, you can run ngrok http 2000 to connect to ya port. 2000 is the port I used for mine; if you want to use a different port number, you'll have to change that to ngrok http ```<port number>```, and in ```login-server/index.js``` you'll have to change the app listener port to whatever number you want. Once you've connected to Axios, there should be a link that pops up in your terminal. Copy-paste that into ```login-proj/src/api/api.js``` and change baseURL to whatever link that is. 

There's also a solid amount of npm installs that you have to do. Running npm install should take care of most of them. If any don't work, use ```sudo npm install <package-name>``` to install them. If react-navigation-screens is giving you issues, follow the advice in here: https://github.com/react-navigation/react-navigation/issues/6594. If there are any other issues, again, just message me on Teams.

Also, I didn't bother uploading all the regular React Native stuff, like the package.json file and everything in node_modules. This is just the main code that runs the program. You'll have to install all the other stuff yourself (recommend using the Expo project generator.)
