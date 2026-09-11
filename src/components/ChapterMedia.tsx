"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const TIKTOK_PROFILE = "https://www.tiktok.com/@nacosnileuni";
const INSTAGRAM_PROFILE = "https://www.instagram.com/nacosnileuni";

export function ChapterMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [embedReady, setEmbedReady] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "420px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!nearViewport) return;

    const node = frameRef.current;
    if (!node) return;

    const markReadyWhenFrameAppears = () => {
      if (node.querySelector("iframe")) {
        setEmbedReady(true);
        observer.disconnect();
      }
    };

    const observer = new MutationObserver(markReadyWhenFrameAppears);
    observer.observe(node, { childList: true, subtree: true });

    const initialCheck = window.requestAnimationFrame(markReadyWhenFrameAppears);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(initialCheck);
    };
  }, [nearViewport]);

  return (
    <section
      ref={sectionRef}
      id="media"
      className="chapter-media section-pad"
      aria-labelledby="media-title"
    >
      <div className="section-shell">
        <div className="media-heading-v5">
          <div>
            <p className="eyebrow">06 / Chapter media</p>
            <h2 id="media-title">FROM CAMPUS TO YOUR FEED.</h2>
          </div>
          <p>
            A snapshot of NACOS Nile on campus, with direct access to the
            chapter&apos;s official Instagram and TikTok channels.
          </p>
        </div>

        <div className="media-platform-grid-v5">
          <article className="instagram-panel-v5" aria-labelledby="gallery-title">
            <div className="media-platform-head-v5 gallery-head-v6">
              <div>
                <span>Official chapter photography</span>
                <strong id="gallery-title">Community moments</strong>
              </div>
              <Image src="/logo.svg" alt="NACOS Nile" width={34} height={34} />
            </div>

            <div className="instagram-mosaic-v5" aria-label="NACOS Nile community gallery">
              <div className="instagram-photo-v5 instagram-photo-main-v5">
                <Image
                  src="/gallery/community-moment-01.webp"
                  alt="NACOS Nile students at a STEM-A-SCHOOL campus activity"
                  fill
                  sizes="(max-width: 960px) 100vw, 46vw"
                />
              </div>
              <div className="instagram-photo-v5 instagram-photo-secondary-v5">
                <Image
                  src="/gallery/community-moment-02.webp"
                  alt="NACOS Nile students gathered at a computing event at Nile University"
                  fill
                  sizes="(max-width: 960px) 100vw, 46vw"
                />
              </div>
            </div>

            <a
              className="instagram-open-v5"
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/brand-icons/instagram.svg"
                alt=""
                aria-hidden="true"
                width={448}
                height={512}
                className="instagram-brand-icon-v5"
              />
              <span>
                <small>Official Instagram</small>
                <strong>@nacosnileuni</strong>
              </span>
              <b aria-hidden="true">↗</b>
            </a>
          </article>

          <article className="media-feed-v4 tiktok-panel-v5" aria-labelledby="tiktok-title">
            <div className="media-feed-head-v4">
              <div>
                <span>Official TikTok</span>
                <strong id="tiktok-title">@nacosnileuni</strong>
              </div>
              <Image
                src="/brand-icons/tiktok.svg"
                alt="TikTok"
                width={448}
                height={512}
                className="tiktok-brand-icon-v5"
              />
            </div>

            <div
              ref={frameRef}
              className="tiktok-frame-v4 tiktok-frame-v5"
              aria-live="polite"
              aria-busy={!embedReady}
            >
              {!embedReady && (
                <div className="tiktok-loading-v5" role="status">
                  <div className="tiktok-loader-mark-v5" aria-hidden="true">
                    <Image
                      src="/brand-icons/tiktok.svg"
                      alt=""
                      aria-hidden="true"
                      width={448}
                      height={512}
                      className="tiktok-loader-icon-v5"
                    />
                    <span />
                  </div>
                  <strong>Loading the official TikTok feed</strong>
                  <small>@nacosnileuni</small>
                  <div className="tiktok-loader-bars-v5" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              )}

              {nearViewport && (
                <>
                  <blockquote
                    className="tiktok-embed"
                    cite={TIKTOK_PROFILE}
                    data-unique-id="nacosnileuni"
                    data-embed-type="creator"
                    data-embed-from="oembed"
                    style={{ maxWidth: "560px", minWidth: "288px", width: "100%" }}
                  >
                    <section>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`${TIKTOK_PROFILE}?refer=creator_embed`}
                      >
                        @nacosnileuni
                      </a>
                    </section>
                  </blockquote>
                  <Script
                    id="nacos-tiktok-embed-v5"
                    src="https://www.tiktok.com/embed.js"
                    strategy="afterInteractive"
                  />
                </>
              )}
            </div>

            <a className="tiktok-open-v5" href={TIKTOK_PROFILE} target="_blank" rel="noreferrer">
              <span>Open TikTok</span>
              <b aria-hidden="true">↗</b>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
