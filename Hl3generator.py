import random
from itertools import combinations
import json

teams = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 'Team9', 'Team10',
         'Team11', 'Team12', 'Team13', 'Team14', 'Team15', 'Team16', 'Team17', 'Team18', 'Team19', 'Team20',
         'Team21', 'Team22', 'Team23', 'Team24', 'Team25', 'Team26', 'Team27', 'Team28', 'Team29', 'Team30',
         'Team31', 'Team32', 'Team33', 'Team34', 'Team35', 'Team36', 'Team37', 'Team38', 'Team39', 'Team40']

# Divide teams into groups of 14, 13, and 13
group1 = teams[:14]
group2 = teams[14:27]
group3 = teams[27:]

groups = {'Group A': group1, 'Group B': group2, 'Group C': group3}

weeks = {'Group A': 14, 'Group B': 12, 'Group C': 12}
games_per_week = {'Group A': 7, 'Group B': 6, 'Group C': 6}

schedule = {}

for group, teams in groups.items():
    group_schedule = {}
    
    for week in range(weeks[group]):
        matches_this_week = []
        remaining_matches = list(combinations(teams, 2))
        random.shuffle(remaining_matches)
        
        week_schedule = []
        for _ in range(games_per_week[group]):
            match = None
            for potential_match in remaining_matches:
                if all(team not in matches_this_week for team in potential_match):
                    match = potential_match
                    break
            if match:
                matches_this_week.append(match)
                remaining_matches = [m for m in remaining_matches if set(m).isdisjoint(set(match))]
                week_schedule.append({'Team1': match[0], 'Team2': match[1]})
        
        group_schedule[f"Week {week + 1}"] = week_schedule
    
    schedule[group] = group_schedule

# Export schedule to a JSON file
with open('schedule.json', 'w') as f:
    json.dump(schedule, f, indent=4)

print("Schedule exported to 'schedule.json'.")