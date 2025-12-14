import React from "react";

function MatchesTable({ teams, matches, onScoreChange  }) {
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
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {matches.slice(0,9).map(match => (
          <tr key={match.id}>
           
            <td>{getTeamName(match.homeTeamId)}</td>
            <td>vs</td>
            <td>{getTeamName(match.awayTeamId)}</td>
            <td>
                 <div className="score-wrapper">
    <div className="score-box">
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            Math.max(0, (match.homeGoals ?? 0) - 1),
            match.awayGoals ?? 0
          )
        }
      >
        -
      </button>
      <span className="score-value">{match.homeGoals ?? 0}</span>
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            (match.homeGoals ?? 0) + 1,
            match.awayGoals ?? 0
          )
        }
      >
        +
      </button>
    </div>

    <span className="score-separator">:</span>

    <div className="score-box">
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            match.homeGoals ?? 0,
            Math.max(0, (match.awayGoals ?? 0) - 1)
          )
        }
      >
        -
      </button>
      <span className="score-value">{match.awayGoals ?? 0}</span>
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            match.homeGoals ?? 0,
            (match.awayGoals ?? 0) + 1
          )
        }
      >
        +
      </button>
    </div>
  </div>
   
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
         <th>Score</th>
        </tr>
      </thead>
       <tbody>
        {matches.slice(9).map(match => (
          <tr key={match.id}>
           
            <td>{getTeamName(match.homeTeamId)}</td>
            <td>vs</td>
            <td>{getTeamName(match.awayTeamId)}</td>
            <td>
                 <div className="score-wrapper">
    <div className="score-box">
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            Math.max(0, (match.homeGoals ?? 0) - 1),
            match.awayGoals ?? 0
          )
        }
      >
        -
      </button>
      <span className="score-value">{match.homeGoals ?? 0}</span>
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            (match.homeGoals ?? 0) + 1,
            match.awayGoals ?? 0
          )
        }
      >
        +
      </button>
    </div>

    <span className="score-separator">:</span>

    <div className="score-box">
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            match.homeGoals ?? 0,
            Math.max(0, (match.awayGoals ?? 0) - 1)
          )
        }
      >
        -
      </button>
      <span className="score-value">{match.awayGoals ?? 0}</span>
      <button
        type="button"
        className="score-btn"
        onClick={() =>
          onScoreChange(
            match.id,
            match.homeGoals ?? 0,
            (match.awayGoals ?? 0) + 1
          )
        }
      >
        +
      </button>
    </div>
  </div>
            </td>
          </tr>
        ))}
         </tbody>
    </table>
    </>
   
  );
}

export default MatchesTable;
