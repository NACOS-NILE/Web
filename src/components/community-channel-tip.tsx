"use client";

import { useId, useState } from "react";
import { Tooltip } from "@base-ui/react/tooltip";

export function CommunityChannelTip({
  name,
  href,
  logoHtml,
}: {
  name: string;
  href: string;
  logoHtml: string;
}) {
  const popupId = useId();
  const [open, setOpen] = useState(false);
  const describedBy = open ? popupId : undefined;
  const tipText = href ? name : `${name} · Coming soon`;
  const icon = (
    <span
      className="chapter-community-logo"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: logoHtml }}
    />
  );

  return (
    <Tooltip.Root open={open} onOpenChange={(value) => setOpen(value)}>
      {href ? (
        <Tooltip.Trigger
          delay={80}
          render={
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} (opens in a new tab)`}
              aria-describedby={describedBy}
              className="t-tt-trigger"
            />
          }
        >
          {icon}
        </Tooltip.Trigger>
      ) : (
        <Tooltip.Trigger
          delay={80}
          render={
            <button
              type="button"
              aria-disabled="true"
              aria-label={`${name}: coming soon`}
              aria-describedby={describedBy}
              className="chapter-community-pending t-tt-trigger"
            />
          }
        >
          {icon}
        </Tooltip.Trigger>
      )}
      <Tooltip.Portal>
        <Tooltip.Positioner
          side="top"
          align="center"
          sideOffset={8}
          collisionPadding={12}
          collisionAvoidance={{ side: "flip", align: "shift", fallbackAxisSide: "none" }}
          className="community-tip-positioner"
        >
          <Tooltip.Popup id={popupId} role="tooltip" className="community-tip">{tipText}</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
