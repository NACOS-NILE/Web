"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { galleryPhotos } from "@/data/content";
import { preloadImage } from "@/lib/utils";

const total = galleryPhotos.length;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

/*
  Photo grid with a full-screen viewer. The viewer uses the browser's
  built-in <dialog>, which handles focus, the Escape key and hiding the
  rest of the page from screen readers.
*/
export default function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastOpenedRef = useRef(0);
  const touchStartX = useRef<number | null>(null);

  const photo = openIndex === null ? null : galleryPhotos[openIndex];

  // Open or close the dialog to match the state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  // Load the neighbouring photos so next and previous appear instantly
  useEffect(() => {
    if (openIndex === null) return;

    preloadImage(galleryPhotos[(openIndex + 1) % total].full);
    preloadImage(galleryPhotos[(openIndex - 1 + total) % total].full);
  }, [openIndex]);

  const open = (index: number) => {
    lastOpenedRef.current = index;
    setOpenIndex(index);
  };

  const show = (step: number) => {
    setOpenIndex((current) =>
      current === null ? current : (current + step + total) % total
    );
  };

  // Runs for the close button, Escape and tapping outside the photo
  const handleClose = () => {
    setOpenIndex(null);
    triggerRefs.current[lastOpenedRef.current]?.focus();
  };

  const handleDialogClick = (event: ReactMouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") show(1);
    if (event.key === "ArrowLeft") show(-1);
  };

  const handleTouchStart = (event: ReactTouchEvent<HTMLDialogElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDialogElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;

    const dx = event.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 50) show(dx < 0 ? 1 : -1);
  };

  return (
    <>
      <div className="gallery-grid">
        {galleryPhotos.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              triggerRefs.current[index] = el;
            }}
            type="button"
            className="gallery-item"
            style={{ gridArea: item.id }}
            onClick={() => open(index)}
            aria-label={`View larger: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 50vw, 600px"
              style={{ objectPosition: item.position }}
            />
            <span className="gallery-caption">{item.caption}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={handleClose}
        onClick={handleDialogClick}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {photo && openIndex !== null && (
          <>
            <button
              type="button"
              className="lightbox-button lightbox-close"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close photo viewer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <figure className="lightbox-figure">
              <Image
                key={photo.full}
                src={photo.full}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="100vw"
              />
              <figcaption>
                <span className="lightbox-count">
                  {openIndex + 1} / {total}
                </span>
                {photo.caption}
              </figcaption>
            </figure>

            <button
              type="button"
              className="lightbox-button lightbox-prev"
              onClick={() => show(-1)}
              aria-label="Previous photo"
            >
              <ChevronIcon direction="left" />
            </button>

            <button
              type="button"
              className="lightbox-button lightbox-next"
              onClick={() => show(1)}
              aria-label="Next photo"
            >
              <ChevronIcon direction="right" />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
