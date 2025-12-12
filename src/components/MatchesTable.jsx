import React from "react";

function MatchesTable({ teams, matches, onResultChange }) {
  const getTeamName = id => teams.find(t => t.id === id)?.name ?? "Unknown";

  return (
    <>
     <h2>Gameweek 7</h2>
     <table className="table">
      <thead>
        <tr>
          <th>Home</th>
          <th></th>
          <th>Away</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {matches.slice(0,9).map(match => (
          <tr key={match.id}>
           
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
    <h2>Gameweek 8</h2>
      <table className="table">
      <thead>
        <tr>
         
          <th>Home</th>
          <th></th>
          <th>Away</th>
          <th>Result</th>
        </tr>
      </thead>
       <tbody>
        {matches.slice(9).map(match => (
          <tr key={match.id}>
           
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
    </>
   
  );
}

export default MatchesTable;
