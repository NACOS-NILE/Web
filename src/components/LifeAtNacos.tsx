import Image from "next/image";
import { galleryPhotos } from "@/data/content";
import { PhotoViewer } from "./PhotoViewer";

export function LifeAtNacos() {
  return (
    <section
      id="life"
      tabIndex={-1}
      className="life section-space"
      aria-labelledby="life-title"
    >
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">LIFE AT NACOS NILE</p>
          <div>
            <h2 id="life-title">
              The people.
              <br />
              <span className="muted-heading">The moments in between.</span>
            </h2>
            <p>
              From learning something new to a night out together.
              <br />A few moments from our community.
            </p>
          </div>
        </div>

        <div className="life-photos" role="region" aria-label="NACOS community photographs" tabIndex={0} data-reveal>
          {galleryPhotos.map((photo, index) => (
            <figure
              className={`${index === 0 ? "life-featured" : ""} ${index >= 3 ? "life-photo-extra" : ""}`}
              key={photo.src}
            >
              <div className="life-image">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={
                    index === 0
                      ? "(max-width: 600px) 86vw, (max-width: 900px) 90vw, 60vw"
                      : "(max-width: 600px) 86vw, (max-width: 900px) 44vw, 30vw"
                  }
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="life-mobile-cue mono" aria-hidden="true">
          <span>← SWIPE FOR MORE MOMENTS →</span>
        </div>

        <div className="life-bottom">
          <p>Real moments. Your community.</p>
          <PhotoViewer photos={galleryPhotos} />
        </div>

        <noscript>
          <p className="gallery-fallback">
            <a href={galleryPhotos[3].src}>
              View more photographs from the community ↗
            </a>
          </p>
        </noscript>
      </div>
    </section>
  );
}
