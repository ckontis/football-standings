import { useMemo } from "react";
import { calculateStandings } from "../utils/standings";

export function useStandings(teams, matches) {
  return useMemo(
    () => calculateStandings(teams, matches),
    [teams, matches]
  );
}
