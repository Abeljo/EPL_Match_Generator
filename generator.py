import random
import json

# List of 40 names (teams)
names = [
    "Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7", "Team8", 
    "Team9", "Team10", "Team11", "Team12", "Team13", "Team14", "Team15", 
    "Team16", "Team17", "Team18", "Team19", "Team20", "Team21", "Team22", 
    "Team23", "Team24", "Team25", "Team26", "Team27", "Team28", "Team29", 
    "Team30", "Team31", "Team32", "Team33", "Team34", "Team35", "Team36", 
    "Team37", "Team38", "Team39", "Team40"
]

# Function to shuffle the list of names
def shuffle_array(array):
    random.shuffle(array)

# Function to randomly distribute names into three groups
def create_groups(names):
    shuffle_array(names)  # Shuffle the names
    groupA, groupB, groupC = names[:14], names[14:27], names[27:]
    return {'groupA': groupA, 'groupB': groupB, 'groupC': groupC}

# Function to generate matches within a group
def generate_matches(group):
    matches = []
    for i in range(len(group)):
        for j in range(i + 1, len(group)):
            matches.append([group[i], group[j]])
    return matches

# Function to distribute matches across multiple matchweeks
def distribute_matches(matches, total_matchweeks, games_per_week):
    matchweeks = [[] for _ in range(total_matchweeks)]
    unplaced_matches = []

    # Step 1: Sequentially assign the first matches to each matchweeks
    for i in range(total_matchweeks):
        if matches[i]:
            matchweeks[i].append(matches[i])
            print(f"Match {matches[i]} placed in week {i + 1}")

    # Step 2: Distribute the remaining matches
    for i in range(total_matchweeks, len(matches)):
        match = matches[i]
        placed = False

        for week in range(total_matchweeks):
            week_teams = set(team for match in matchweeks[week] for team in match)
            # Check if both teams are unique in this matchweeks and if there's room for more games
            if not any(team in week_teams for team in match) and len(matchweeks[week]) < games_per_week:
                matchweeks[week].append(match)
                placed = True
                print(f"Match {match} placed in week {week + 1}")
                break

        if not placed:
            print(f"Could not place match {match}. Adding to unplaced matches.")
            unplaced_matches.append(match)

    # Step 3: Force placement for unplaced matches
    if unplaced_matches:
        print("\nAttempting to force place remaining unplaced matches.")
        for match in unplaced_matches:
            placed = False
            for week in range(total_matchweeks):
                week_teams = set(team for match in matchweeks[week] for team in match)
                # If both teams are not already in this matchweek, place the match here
                if not any(team in week_teams for team in match):
                    matchweeks[week].append(match)
                    placed = True
                    print(f"Force placing match {match} in week {week + 1}")
                    break

            if not placed:
                print(f"Could not force place match {match}, something went wrong.")
    return matchweeks, unplaced_matches

# Create groups
groups = create_groups(names)

# Generate matches for each group
matches_groupA = generate_matches(groups['groupA'])
matches_groupB = generate_matches(groups['groupB'])
matches_groupC = generate_matches(groups['groupC'])

# Distribute matches across matchweeks for each group
matchweeks_groupA, ungrouped_matches_A = distribute_matches(matches_groupA, 13, 7)
matchweeks_groupB, ungrouped_matches_B = distribute_matches(matches_groupB, 12, 6)
matchweeks_groupC, ungrouped_matches_C = distribute_matches(matches_groupC, 12, 6)

# Create JSON structure with "Ungrouped Teams"
json_data = {
    "groups": [
        {
            "name": "Group A",
            "totalClubs": len(groups['groupA']),
            "teams": groups['groupA'],
            "matches": {
                "totalMatches": len(matches_groupA),
                "matchweeks": matchweeks_groupA,
                "ungrouped_matches": ungrouped_matches_A
            }
        },
        {
            "name": "Group B",
            "totalClubs": len(groups['groupB']),
            "teams": groups['groupB'],
            "matches": {
                "totalMatches": len(matches_groupB),
                "matchweeks": matchweeks_groupB,
                "ungrouped_matches": ungrouped_matches_B
            }
        },
        {
            "name": "Group C",
            "totalClubs": len(groups['groupC']),
            "teams": groups['groupC'],
            "matches": {
                "totalMatches": len(matches_groupC),
                "matchweeks": matchweeks_groupC,
                "ungrouped_matches": ungrouped_matches_C
            }
        },
        {
            "name": "Ungrouped Teams",
            "totalClubs": 0,
            "teams": [],
            "matches": {
                "totalMatches": len(ungrouped_matches_A) + len(ungrouped_matches_B) + len(ungrouped_matches_C),
                "matchweeks": [ungrouped_matches_A, ungrouped_matches_B, ungrouped_matches_C]
            }
        }
    ]
}

# Write the JSON data to a file
with open('matches.json', 'w') as json_file:
    json.dump(json_data, json_file, indent=4)

print("\nMatchweeks data has been exported to 'matches.json'.")
