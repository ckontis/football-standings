import React from "react";

function MatchesTable({ teams, matches, onResultChange }) {
  const getTeamName = id => teams.find(t => t.id === id)?.name ?? "Unknown";

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Home</th>
          <th></th>
          <th>Away</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {matches.map(match => (
          <tr key={match.id}>
            <td>{match.id}</td>
            <td>{getTeamName(match.homeTeamId)}</td>
            <td>vs</td>
            <td>{getTeamName(match.awayTeamId)}</td>
            <td>
              <select
                value={match.result}
                onChange={e =>
                  onResultChange(match.id, e.target.value)
                }
              >
                <option value="">-</option>
                <option value="1">1 (Home win)</option>
                <option value="X">X (Draw)</option>
                <option value="2">2 (Away win)</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MatchesTable;
