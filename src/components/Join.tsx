"use client";

import { Mail, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Join() {
  return (
    <section
      id="join"
      data-reveal
      className="reveal-section border-y border-border px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1360px] gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-[11px] text-primary">GET STARTED</p>
          <h2 className="mt-7 text-5xl font-light uppercase leading-[.9] tracking-[-0.04em] md:text-7xl">
            Initialize
            <br />
            <strong className="font-bold">your journey</strong>
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-8 text-muted-foreground">
            Ready to grow beyond the classroom? Join Nile University students learning, building and
            shaping the future together.
          </p>
          <div className="mt-12 space-y-7">
            <div className="flex gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Rocket className="text-primary" />
              </span>
              <div>
                <h3 className="font-bold">Membership</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Become an active NACOSite and access chapter activities.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Mail className="text-primary" />
              </span>
              <div>
                <h3 className="font-bold">Community</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Connect with us through the official Nile chapter community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <form
          className="rounded-2xl border border-border-strong bg-card p-7 md:p-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-10 md:grid-cols-2">
            <label className="font-mono text-[11px] text-primary">
              NAME
              <input
                className="mt-4 w-full border-b border-input bg-transparent py-3 font-sans text-base text-foreground outline-none focus:border-primary"
                placeholder="Your name"
              />
            </label>
            <label className="font-mono text-[11px] text-primary">
              EMAIL
              <input
                type="email"
                className="mt-4 w-full border-b border-input bg-transparent py-3 font-sans text-base text-foreground outline-none focus:border-primary"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-10 block font-mono text-[11px] text-primary">
            AREA OF STUDY
            <select className="mt-4 w-full border-b border-input bg-card py-3 font-sans text-base text-foreground outline-none focus:border-primary">
              <option>Select discipline...</option>
              <option>Computer Science</option>
              <option>Software Engineering</option>
              <option>Cyber Security</option>
              <option>Information Technology</option>
              <option>Information Systems</option>
              <option>Data Science</option>
            </select>
          </label>
          <label className="mt-10 block font-mono text-[11px] text-primary">
            GOALS
            <textarea
              className="mt-4 h-28 w-full resize-none border-b border-input bg-transparent py-3 font-sans text-base text-foreground outline-none focus:border-primary"
              placeholder="What would you like to achieve?"
            />
          </label>
          <Button className="mt-10 w-full" data-magnetic="0.08" variant="light">
            Request membership
          </Button>
        </form>
      </div>
    </section>
  );
}
