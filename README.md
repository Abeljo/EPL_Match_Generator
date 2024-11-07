Football Schedule Generator

Made By Abel Yosef aka AbelJo

This repository contains a complete code for generating matches for both the Premier League and higher leagues.

Usage

For Premier League

- Enter the list of teams participating.
- The program will automatically shuffle the teams to ensure random drawing.
- After shuffling, the program will loop through the teams and create new games   by combining 2 teams from the iterative loop.
- It will then generate matchweeks by dividing the games generated into 10 games.
- The program will check if a team from one game has already played and then add that game to other weeks to ensure the uniqueness of games and randomness for fair play.

For Higher League

- Enter the list of teams.
- The teams will be divided into 3 groups.
- The logic here is the same as the Premier League.

To generate the match schedule:

- Use Python files.
- Use the JS file to run the server and copy the generated file to the data folder.
- Feel free to explore and modify the code as needed!

Want to see some demo?
- clone this repo
- first run "python Hl3generator.py"
- then copy the generated "schedule.json" to data folder
finally...
- run "node server.js"
- open Browser and use this link to check it out http://localhost:3000

Done!!!