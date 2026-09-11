export default function DisciplineGraphic({ index }: { index: number }) {
  if (index === 0) return <svg className="discipline-art art-wave" viewBox="0 0 320 150" aria-hidden="true"><path d="M-10 118 C42 18 88 160 145 70 S246 24 338 64"/><path d="M-10 132 C55 48 94 176 160 88 S258 43 338 82"/><path d="M-10 144 C58 82 114 170 174 108 S274 70 338 101"/></svg>;
  if (index === 1) return <svg className="discipline-art art-cube" viewBox="0 0 220 180" aria-hidden="true"><path d="M110 18 188 59 110 101 32 59Z M32 59v76l78 40 78-40V59 M110 101v74 M70 39l78 41v76 M150 39 72 80v76"/></svg>;
  if (index === 2) return <svg className="discipline-art art-lock" viewBox="0 0 220 180" aria-hidden="true"><path d="M65 78V58a45 45 0 0 1 90 0v20 M47 78h126v94H47z M110 106v37 M87 78V58a23 23 0 0 1 46 0v20"/><circle cx="110" cy="106" r="7"/></svg>;
  if (index === 3) return <svg className="discipline-art art-points" viewBox="0 0 300 150" aria-hidden="true">{Array.from({length:42},(_,i)=><circle key={i} cx={15+(i%14)*21} cy={125-Math.sin(i*.75)*28-Math.floor(i/14)*28} r={(i%3)+1}/>)}</svg>;
  if (index === 4) return <svg className="discipline-art art-sphere" viewBox="0 0 210 180" aria-hidden="true"><circle cx="108" cy="90" r="67"/><ellipse cx="108" cy="90" rx="27" ry="67"/><path d="M45 69h126M41 97h134M53 124h110M108 23v134"/></svg>;
  return <svg className="discipline-art art-lines" viewBox="0 0 300 170" aria-hidden="true">{Array.from({length:9},(_,i)=><path key={i} d={`M${15+i*16} 170 L${180+i*16} 5`}/>)}</svg>;
}
