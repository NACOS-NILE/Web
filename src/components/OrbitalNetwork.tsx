import { Arrow } from "./Arrow";
import { NetworkGraphic } from "./NetworkGraphic";

export function OrbitalNetwork() {
  return (
    <div className="hero-art orbital-network">
      <div className="art-top mono">
        <span>THE NACOS NETWORK</span>
        <span>CONNECTED AT NILE</span>
      </div>
      <NetworkGraphic moving />
      <div className="art-caption">
        <p>
          Different disciplines.
          <br />
          <strong>One community.</strong>
        </p>
        <a href="#disciplines" aria-label="Explore computing disciplines">
          <Arrow diagonal />
        </a>
      </div>
    </div>
  );
}
