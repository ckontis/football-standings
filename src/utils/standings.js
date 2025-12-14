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
      points: team.initialPoints ?? 0,
      gd: team.gd
    });
  });


  matches.forEach(match => {
    if (!match.result) return;

    const homeRow = table.get(match.homeTeamId);
    const awayRow = table.get(match.awayTeamId);

    homeRow.played += 1;
    awayRow.played += 1;

    if (match.result === "1") {
      homeRow.wins += 1;
      homeRow.points += 3;
      awayRow.losses += 1;
    } else if (match.result === "2") {
      awayRow.wins += 1;
      awayRow.points += 3;
      homeRow.losses += 1;
    } else if (match.result === "X") {
      homeRow.draws += 1;
      awayRow.draws += 1;
      homeRow.points += 1;
      awayRow.points += 1;
    }
  });

  return Array.from(table.values()).sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    if (b.gd !== a.gd) {
      return b.gd - a.gd;
    }
    return a.name.localeCompare(b.name);
  });
}
