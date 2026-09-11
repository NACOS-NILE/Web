import {
  MessageCircle,
  Phone,
  Send,
  Globe,
  Camera,
  Briefcase,
} from "lucide-react";

const socials = [
  {
    name: "Discord",
    icon: MessageCircle,
    description: "Join our server for real-time discussions, study rooms, and community updates.",
    href: "#",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    description: "Stay informed with announcements, event reminders, and quick updates.",
    href: "#",
  },
  {
    name: "Telegram",
    icon: Send,
    description: "Connect with fellow members and receive instant community notifications.",
    href: "#",
  },
  {
    name: "X (Twitter)",
    icon: Globe,
    description: "Follow us for tech insights, event highlights, and community news.",
    href: "#",
  },
  {
    name: "Instagram",
    icon: Camera,
    description: "Behind-the-scenes moments, event photos, and community stories.",
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Briefcase,
    description: "Professional networking, career opportunities, and alumni connections.",
    href: "#",
  },
];

export default function Community() {
  return (
    <section id="community" className="section-padding bg-white" aria-label="Community">
      <div className="container-nacos">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Stay Connected</p>
          <h2 className="section-heading text-balance">
            Join the conversation.
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            NACOS Nile is more than an association — it{"'"}s a community.
            Connect with us across platforms and become part of something
            bigger.
          </p>
        </div>

        {/* Social links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="group flex items-start gap-4 p-6 border border-gray-200 rounded-sm hover:border-nacos-300 hover:bg-nacos-50/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-nacos-50 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-nacos-100 transition-colors duration-300">
                  <Icon size={18} className="text-nacos-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-nacos-900 mb-1 group-hover:text-nacos-600 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {social.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}