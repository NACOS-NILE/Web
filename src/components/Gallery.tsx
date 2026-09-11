import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY } from "@/data/content";

export default function Gallery() {
  return (
    <section className="gallery section scroll-reveal" id="gallery">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="eyebrow light">
              <span />
              GALLERY
            </div>

            <h2>
              One night.
              <br />
              <em>Many colours.</em>
            </h2>
          </div>

          <p>
            Moments from {GALLERY.event}, the NACOS Nile dinner and awards
            night. Tap or click any photo to see it larger.
          </p>
        </div>

        <GalleryGrid />

        <p className="gallery-credit">Photos by {GALLERY.photographer}</p>
      </div>
    </section>
  );
}
