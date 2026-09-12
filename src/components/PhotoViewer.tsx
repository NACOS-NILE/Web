"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryPhoto } from "@/data/content";
import { Arrow } from "./Arrow";
export function PhotoViewer({ photos }: { photos: GalleryPhoto[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const [failed, setFailed] = useState(false);
  const photo = photos[index];
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const change = (direction: number) => {
    setIndex(
      (current) => (current + direction + photos.length) % photos.length,
    );
    setFailed(false);
  };
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      change(deltaX > 0 ? -1 : 1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };
  const open = () => {
    if (!dialog.current) return;
    setIndex(0);
    setFailed(false);
    setOpened(true);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
  };
  const restore = () => {
    document.body.style.overflow = previousOverflow.current;
    setOpened(false);
    trigger.current?.focus({ preventScroll: true });
  };
  return (
    <>
      <button
        ref={trigger}
        className="button button-blue gallery-trigger"
        type="button"
        onClick={open}
      >
        View Photos <Arrow diagonal />
      </button>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-labelledby="photo-dialog-title"
        onClose={restore}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            change(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            change(-1);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="photo-viewer">
          <div className="photo-toolbar">
            <h2 id="photo-dialog-title">Life at NACOS Nile</h2>
            <button
              type="button"
              className="photo-close"
              onClick={() => dialog.current?.close()}
              aria-label="Close photo gallery"
              autoFocus
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          {opened && (
            <div
              className="photo-stage"
              key={photo.src}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {failed ? (
                <p role="status">
                  This photo couldn’t load. Try the next photo or close the
                  gallery.
                </p>
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="90vw"
                  priority
                  onError={() => setFailed(true)}
                />
              )}
            </div>
          )}
          <div className="photo-caption">
            <button
              type="button"
              onClick={() => change(-1)}
              aria-label="Previous photo"
            >
              ←
            </button>
            <div aria-live="polite" aria-atomic="true">
              <p>{photo.caption}</p>
              <span>
                {index + 1} / {photos.length}
              </span>
            </div>
            <button
              type="button"
              onClick={() => change(1)}
              aria-label="Next photo"
            >
              →
            </button>
          </div>
        </div>
      </dialog>
      <noscript>
        <style>{`.gallery-trigger{display:none}`}</style>
      </noscript>
    </>
  );
}
