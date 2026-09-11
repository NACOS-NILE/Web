import CommunityLink from "@/components/CommunityLink";
import { ArrowUpRightIcon, SocialIcon } from "@/components/icons";
import { COMMUNITY_JOIN_URL, SOCIAL_LINKS } from "@/data/content";
import { isPlaceholderLink } from "@/lib/utils";

export default function Community() {
  return (
    <section className="community scroll-reveal" id="community">
      <div className="container community-inner">
        <div className="community-copy">
          <div className="eyebrow light">
            <span />
            JOIN THE COMMUNITY
          </div>

          <h2>
            Build. Learn.
            <br />
            <em>Connect.</em>
          </h2>

          <p>
            Your place in the NACOS community starts here. Follow the
            chapter, find your people and stay close to what is
            happening.
          </p>

          <CommunityLink
            href={
              isPlaceholderLink(COMMUNITY_JOIN_URL)
                ? "#membership"
                : COMMUNITY_JOIN_URL
            }
            className="button button-light"
          >
            Join the Community
            <span>→</span>
          </CommunityLink>
        </div>

        <div className="community-links">
          {SOCIAL_LINKS.map((link) => (
            <CommunityLink key={link.type} href={link.href}>
              <SocialIcon type={link.type} />
              <span>{link.label}</span>
              {isPlaceholderLink(link.href) ? (
                <span className="community-link-soon">Coming soon</span>
              ) : (
                <ArrowUpRightIcon />
              )}
            </CommunityLink>
          ))}
        </div>
      </div>
    </section>
  );
}
