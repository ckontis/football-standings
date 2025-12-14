export function calculateStandings(teams, matches) {
  const table = new Map();

  teams.forEach(team => {
    table.set(team.id, {
      teamId: team.id,
      name: team.name,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: team.initialPoints ?? 0,
      gd: team.gd ?? 0
    });
  });


matches.forEach(match => {
    const { homeGoals, awayGoals } = match;

    // treat undefined/empty as "not played"
    if (
      homeGoals === null || homeGoals === undefined ||
      awayGoals === null || awayGoals === undefined
    ) return;

    const homeRow = table.get(match.homeTeamId);
    const awayRow = table.get(match.awayTeamId);

    homeRow.played += 1;
    awayRow.played += 1;

    homeRow.goalsFor     += homeGoals;
    homeRow.goalsAgainst += awayGoals;
    awayRow.goalsFor     += awayGoals;
    awayRow.goalsAgainst += homeGoals;

    homeRow.gd = (homeRow.gd ?? 0) + (homeGoals - awayGoals);
    awayRow.gd = (awayRow.gd ?? 0) + (awayGoals - homeGoals);

    if (homeGoals > awayGoals) {
      homeRow.wins += 1;
      homeRow.points += 3;
      awayRow.losses += 1;
    } else if (awayGoals > homeGoals) {
      awayRow.wins += 1;
      awayRow.points += 3;
      homeRow.losses += 1;
    } else {
      homeRow.draws += 1;
      awayRow.draws += 1;
      homeRow.points += 1;
      awayRow.points += 1;
    }
  });

  return Array.from(table.values()).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if ((b.gd ?? 0) !== (a.gd ?? 0)) return (b.gd ?? 0) - (a.gd ?? 0);
    return a.name.localeCompare(b.name);
  });
}
