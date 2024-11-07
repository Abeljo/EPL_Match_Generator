// const fs = require('fs');

// // List of 40 names
// const names = [
//     "Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7", "Team8", 
//     "Team9", "Team10", "Team11", "Team12", "Team13", "Team14", "Team15", 
//     "Team16", "Team17", "Team18", "Team19", "Team20", "Team21", "Team22", 
//     "Team23", "Team24", "Team25", "Team26", "Team27", "Team28", "Team29", 
//     "Team30", "Team31", "Team32", "Team33", "Team34", "Team35", "Team36", 
//     "Team37", "Team38", "Team39", "Team40",
// ];

// // Function to shuffle the list of names
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Function to randomly distribute names into three groups
// function createGroups(names) {
//     shuffleArray(names); // Shuffle the names

//     const groupA = [];
//     const groupB = [];
//     const groupC = [];

//     for (let i = 0; i < names.length; i++) {
//         if (i < 14) {
//             groupA.push(names[i]);
//         } else if (i < 27) {
//             groupB.push(names[i]);
//         } else {
//             groupC.push(names[i]);
//         }
//     }

//     return { groupA, groupB, groupC };
// }

// // Function to generate matches within a group
// function generateMatches(group) {
//     const matches = [];
//     for (let i = 0; i < group.length; i++) {
//         for (let j = i + 1; j < group.length; j++) {
//             matches.push([group[i], group[j]]);
//         }
//     }
//     return matches;
// }

// // Function to split matches into matchweeks
// // Group A has 14 teams -> 7 games per week
// // Group B and C have 13 teams -> 6 games per week
// function generateMatchWeeks(matches, teamsPerWeek) {
//     const weeks = [];
//     let currentWeek = [];
//     const teamsPlayedThisWeek = new Set();

//     for (let i = 0; i < matches.length; i++) {
//         const [team1, team2] = matches[i];

//         // Check if either team has already played this week
//         if (!teamsPlayedThisWeek.has(team1) && !teamsPlayedThisWeek.has(team2)) {
//             currentWeek.push([team1, team2]);
//             teamsPlayedThisWeek.add(team1);
//             teamsPlayedThisWeek.add(team2);
//         }

//         // If the current week has the desired number of games, start a new week
//         if (currentWeek.length === teamsPerWeek) {
//             weeks.push(currentWeek);
//             currentWeek = [];
//             teamsPlayedThisWeek.clear();
//         }
//     }

//     return weeks;
// }

// // Generate groups
// const groups = createGroups(names);

// // Generate matches for each group
// const matchesGroupA = generateMatches(groups.groupA);
// const matchesGroupB = generateMatches(groups.groupB);
// const matchesGroupC = generateMatches(groups.groupC);

// // Generate matchweeks for each group
// const matchWeeksGroupA = generateMatchWeeks(matchesGroupA, 7); // 7 games per matchweek for Group A
// const matchWeeksGroupB = generateMatchWeeks(matchesGroupB, 6); // 6 games per matchweek for Group B
// const matchWeeksGroupC = generateMatchWeeks(matchesGroupC, 6); // 6 games per matchweek for Group C

// // Create the JSON structure for the groups and matchweeks
// const jsonData = {
//     groups: [
//         {
//             name: "Group A",
//             totalClubs: groups.groupA.length,
//             teams: groups.groupA,
//             matches: {
//                 totalMatches: matchesGroupA.length,
//                 matchweeks: matchWeeksGroupA
//             }
//         },
//         {
//             name: "Group B",
//             totalClubs: groups.groupB.length,
//             teams: groups.groupB,
//             matches: {
//                 totalMatches: matchesGroupB.length,
//                 matchweeks: matchWeeksGroupB
//             }
//         },
//         {
//             name: "Group C",
//             totalClubs: groups.groupC.length,
//             teams: groups.groupC,
//             matches: {
//                 totalMatches: matchesGroupC.length,
//                 matchweeks: matchWeeksGroupC
//             }
//         }
//     ]
// };

// // Write the JSON data to a file
// fs.writeFileSync('matches.json', JSON.stringify(jsonData, null, 2), 'utf8');

// console.log('Team groups, matches, and matchweeks have been written to matches.json file.');




// const fs = require('fs');

// // List of 40 names
// const names = [
//     "Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7", "Team8", 
//     "Team9", "Team10", "Team11", "Team12", "Team13", "Team14", "Team15", 
//     "Team16", "Team17", "Team18", "Team19", "Team20", "Team21", "Team22", 
//     "Team23", "Team24", "Team25", "Team26", "Team27", "Team28", "Team29", 
//     "Team30", "Team31", "Team32", "Team33", "Team34", "Team35", "Team36", 
//     "Team37", "Team38", "Team39", "Team40"
// ];

// // Function to shuffle the list of names
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Function to randomly distribute names into three groups
// function createGroups(names) {
//     shuffleArray(names); // Shuffle the names

//     const groupA = [];
//     const groupB = [];
//     const groupC = [];

//     for (let i = 0; i < names.length; i++) {
//         if (i < 14) {
//             groupA.push(names[i]);
//         } else if (i < 27) {
//             groupB.push(names[i]);
//         } else {
//             groupC.push(names[i]);
//         }
//     }

//     return { groupA, groupB, groupC };
// }

// // Function to generate matches within a group
// function generateMatches(group) {
//     const matches = [];
//     for (let i = 0; i < group.length; i++) {
//         for (let j = i + 1; j < group.length; j++) {
//             matches.push([group[i], group[j]]);
//         }
//     }
//     return matches;
// }

// // Improved function to generate matchweeks ensuring one game per team per week
// function generateMatchWeeks(matches, totalTeams) {
//     const weeks = [];
//     let currentWeek = [];
//     const scheduledTeams = new Set();

//     for (const match of matches) {
//         const [team1, team2] = match;

//         // Check if either team is already scheduled this week
//         if (!scheduledTeams.has(team1) && !scheduledTeams.has(team2)) {
//             currentWeek.push(match);
//             scheduledTeams.add(team1);
//             scheduledTeams.add(team2);
//         }

//         // If the current week is full, push it to weeks and start a new week
//         if (currentWeek.length === Math.floor(totalTeams / 2)) {
//             weeks.push(currentWeek);
//             currentWeek = [];
//             scheduledTeams.clear();
//         }
//     }

//     // Push any remaining matches to the last week
//     if (currentWeek.length > 0) {
//         weeks.push(currentWeek);
//     }

//     return weeks;
// }


// // Generate groups
// const groups = createGroups(names);

// // Generate matches for each group
// const matchesGroupA = generateMatches(groups.groupA);
// const matchesGroupB = generateMatches(groups.groupB);
// const matchesGroupC = generateMatches(groups.groupC);

// // Generate matchweeks for each group ensuring one game per team per week
// const matchWeeksGroupA = generateMatchWeeks(matchesGroupA, groups.groupA.length);
// const matchWeeksGroupB = generateMatchWeeks(matchesGroupB, groups.groupB.length);
// const matchWeeksGroupC = generateMatchWeeks(matchesGroupC, groups.groupC.length);

// // Create the JSON structure for the groups and matchweeks
// const jsonData = {
//     groups: [
//         {
//             name: "Group A",
//             totalClubs: groups.groupA.length,
//             teams: groups.groupA,
//             matches: {
//                 totalMatches: matchesGroupA.length,
//                 matchweeks: matchWeeksGroupA
//             }
//         },
//         {
//             name: "Group B",
//             totalClubs: groups.groupB.length,
//             teams: groups.groupB,
//             matches: {
//                 totalMatches: matchesGroupB.length,
//                 matchweeks: matchWeeksGroupB
//             }
//         },
//         {
//             name: "Group C",
//             totalClubs: groups.groupC.length,
//             teams: groups.groupC,
//             matches: {
//                 totalMatches: matchesGroupC.length,
//                 matchweeks: matchWeeksGroupC
//             }
//         }
//     ]
// };

// // Write the JSON data to a file
// try {
//     fs.writeFileSync('matches.json', JSON.stringify(jsonData, null, 2), 'utf8');
//     console.log('Team groups, matches, and matchweeks have been written to matches.json file.');
// } catch (error) {
//     console.error('Error writing to file:', error);
// }

const fs = require('fs');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGroups(names) {
    shuffleArray(names);
    const groupA = names.slice(0, 14);
    const groupB = names.slice(14, 27);
    const groupC = names.slice(27);
    return { groupA, groupB, groupC };
}

function generateMatches(group) {
    const matches = [];
    for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
            matches.push([group[i], group[j]]);
        }
    }
    return matches;
}

function distributeMatches(matches, totalMatchweeks, gamesPerWeek) {
    const matchweeks = Array.from({ length: totalMatchweeks }, () => []);
    const unplacedMatches = [];

    for (let i = 0; i < totalMatchweeks; i++) {
        if (matches[i]) {
            matchweeks[i].push(matches[i]);
        }
    }

    for (let i = totalMatchweeks; i < matches.length; i++) {
        const match = matches[i];
        let placed = false;

        for (let week = 0; week < totalMatchweeks; week++) {
            const weekTeams = new Set(matchweeks[week].flatMap(match => match));
            if (!match.some(team => weekTeams.has(team)) && matchweeks[week].length < gamesPerWeek) {
                matchweeks[week].push(match);
                placed = true;
                break;
            }
        }

        if (!placed) {
            unplacedMatches.push(match);
        }
    }

    return { matchweeks, unplacedMatches };
}

const names = [
    "Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7", "Team8",
    "Team9", "Team10", "Team11", "Team12", "Team13", "Team14", "Team15",
    "Team16", "Team17", "Team18", "Team19", "Team20", "Team21", "Team22",
    "Team23", "Team24", "Team25", "Team26", "Team27", "Team28", "Team29",
    "Team30", "Team31", "Team32", "Team33", "Team34", "Team35", "Team36",
    "Team37", "Team38", "Team39", "Team40"
];

const groups = createGroups(names);
const matchesGroupA = generateMatches(groups.groupA);
const matchesGroupB = generateMatches(groups.groupB);
const matchesGroupC = generateMatches(groups.groupC);

const { matchweeks: matchweeksGroupA, unplacedMatches: ungroupedMatchesA } = distributeMatches(matchesGroupA, 13, 7);
const { matchweeks: matchweeksGroupB, unplacedMatches: ungroupedMatchesB } = distributeMatches(matchesGroupB, 12, 6);
const { matchweeks: matchweeksGroupC, unplacedMatches: ungroupedMatchesC } = distributeMatches(matchesGroupC, 12, 6);

const jsonData = {
    groups: [
        {
            name: "Group A",
            totalClubs: groups.groupA.length,
            teams: groups.groupA,
            matches: {
                totalMatches: matchesGroupA.length,
                matchweeks: matchweeksGroupA,
                ungrouped_matches: ungroupedMatchesA
            }
        },
        {
            name: "Group B",
            totalClubs: groups.groupB.length,
            teams: groups.groupB,
            matches: {
                totalMatches: matchesGroupB.length,
                matchweeks: matchweeksGroupB,
                ungrouped_matches: ungroupedMatchesB
            }
        },
        {
            name: "Group C",
            totalClubs: groups.groupC.length,
            teams: groups.groupC,
            matches: {
                totalMatches: matchesGroupC.length,
                matchweeks: matchweeksGroupC,
                ungrouped_matches: ungroupedMatchesC
            }
        },
        {
            name: "Ungrouped Teams",
            totalClubs: 0,
            teams: [],
            matches: {
                totalMatches: ungroupedMatchesA.length + ungroupedMatchesB.length + ungroupedMatchesC.length,
                matchweeks: [ungroupedMatchesA, ungroupedMatchesB, ungroupedMatchesC]
            }
        }
    ]
};

const jsonDataString = JSON.stringify(jsonData, null, 2);
fs.writeFileSync('matches.json', jsonDataString);

console.log("\nMatchweeks data has been exported to 'matches.json'.");