export function formatFundingLabel(goal, raised, status) {
  if (status === 'ongoing' && (parseFloat(goal) <= 0 || !goal)) {
    return 'Ongoing — active program';
  }
  const g = parseFloat(goal || 0);
  const r = parseFloat(raised || 0);
  const pct = g > 0 ? Math.round((r / g) * 100) : 0;
  return `${pct}% funded — $${r.toLocaleString()} of $${g.toLocaleString()}`;
}
