import React from "react";

function StandingsTable({ standings }) {

  const filtered = standings.filter(row => row.teamId >= 1 && row.teamId <= 11 || row.teamId > 26);

  // if you also want to limit to 11 rows, you can still slice:
  // const visibleStandings = filtered.slice(0, 11);
  const visibleStandings = filtered;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
          <th>GD</th>
        </tr>
      </thead>
      <tbody>
        {visibleStandings.map((row, index) => (
          <tr key={row.teamId} className={index < 5 ? "qualified-row" : ""}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.played}</td>
            <td>{row.wins}</td>
            <td>{row.draws}</td>
            <td>{row.losses}</td>
            <td style={{ fontSize: '18px' }}>{row.points}</td>
            <td>{row.gd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StandingsTable;
