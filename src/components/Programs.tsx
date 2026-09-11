import ProgramList from "@/components/ProgramList";

export default function Programs() {
  return (
    <section className="programs section scroll-reveal" id="programs">
      <div className="container">
        <div className="programs-heading">
          <div>
            <div className="eyebrow">
              <span />
              WHAT WE DO
            </div>

            <h2>
              Learn.
              <br />
              <em>Build. Connect.</em>
            </h2>
          </div>

          <p>
            From the first line of code to the next big opportunity, we
            create practical spaces to learn, experiment and grow
            together.
          </p>
        </div>

        <ProgramList />
      </div>
    </section>
  );
}
