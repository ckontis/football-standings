import React, { useState } from "react";
import { TEAMS } from "./data/teams";
import { INITIAL_MATCHES } from "./data/matches";
import { useStandings } from "./hooks/useStandings";
import MatchesTable from "./components/MatchesTable";
import StandingsTable from "./components/StandingsTable";
import "./styles/app.css";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const standings = useStandings(TEAMS, matches);

  const handleScoreChange = (matchId, homeGoals, awayGoals) => {
  setMatches(prev =>
    prev.map(m =>
      m.id === matchId ? { ...m, homeGoals, awayGoals } : m
    )
  );
};

  return (
    <div className="app">
      <div className="layout">
        <section className="layout-left">
         
          <MatchesTable
            teams={TEAMS}
            matches={matches}
            onScoreChange={handleScoreChange}
          />
        </section>

        <section className="layout-right">
          <h2>Standings</h2>
          <p style={{ color: 'green', fontSize: '14px', fontStyle: 'italic' }}>Teams with a green background will qualify for the next round, along with all teams on 10+ points before last gameweek, and Bayer Leverkusen.</p>
          <StandingsTable standings={standings} />
        </section>
      </div>

     <Analytics/>
    </div>
  );
}

export default App;
