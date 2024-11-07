import random

teams = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 'Team9', 'Team10',
         'Team11', 'Team12', 'Team13', 'Team14', 'Team15', 'Team16', 'Team17', 'Team18', 'Team19', 'Team20']

matches_per_week = 10
weeks = len(teams) - 1

for week in range(weeks):
    print(f"Week {week + 1}:")
    random.shuffle(teams)  # Shuffle the teams for each week
    matches = list(zip(teams[::2], teams[1::2]))  # Pair teams for matches

    for match in matches:
        print(f"{match[0]} vs {match[1]}")
    print()