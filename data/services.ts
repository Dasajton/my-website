import { Globe, Smartphone, ShoppingCart, Network } from "lucide-react";

export type Service = {
  icon: typeof Globe;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
};

export const services: Service[] = [
  {
    icon: Globe,
    titleDe: "Webentwicklung",
    titleEn: "Web Development",
    descriptionDe:
      "Moderne, performante Websites und Webanwendungen mit React, Next.js und aktuellen Technologien.",
    descriptionEn:
      "Modern, performant websites and web applications built with React, Next.js and current technologies.",
  },
  {
    icon: Smartphone,
    titleDe: "App-Entwicklung",
    titleEn: "App Development",
    descriptionDe:
      "Progressive Web Apps und mobile Anwendungen für verschiedene Plattformen.",
    descriptionEn:
      "Progressive web apps and mobile applications for various platforms.",
  },
  {
    icon: ShoppingCart,
    titleDe: "WordPress & WooCommerce",
    titleEn: "WordPress & WooCommerce",
    descriptionDe:
      "Einrichtung und Anpassung von WordPress-Websites mit Elementor und WooCommerce-Shops.",
    descriptionEn:
      "Setup and customization of WordPress websites with Elementor and WooCommerce shops.",
  },
  {
    icon: Network,
    titleDe: "Netzwerk & IT",
    titleEn: "Networking & IT",
    descriptionDe:
      "Netzwerkeinrichtung, Server-Konfiguration und IT-Beratung für kleine Unternehmen.",
    descriptionEn:
      "Network setup, server configuration and IT consulting for small businesses.",
  },
];
