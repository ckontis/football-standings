import React, { useState } from "react";
import { TEAMS } from "./data/teams";
import { INITIAL_MATCHES } from "./data/matches";
import { useStandings } from "./hooks/useStandings";
import MatchesTable from "./components/MatchesTable";
import StandingsTable from "./components/StandingsTable";
import "./styles/app.css";

function App() {
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const standings = useStandings(TEAMS, matches);

  const handleResultChange = (matchId, result) => {
    setMatches(prev =>
      prev.map(m => (m.id === matchId ? { ...m, result } : m))
    );
  };

  return (
    <div className="app">
      <div className="layout">
        <section className="layout-left">
          <h2>Matches (1 / X / 2)</h2>
          <MatchesTable
            teams={TEAMS}
            matches={matches}
            onResultChange={handleResultChange}
          />
        </section>

        <section className="layout-right">
          <h2>Standings</h2>
          <StandingsTable standings={standings} />
        </section>
      </div>

     
    </div>
  );
}

export default App;
