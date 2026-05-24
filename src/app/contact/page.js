import ContactPageContent from "@/components/contact/ContactPageContent";
import { city } from "@/data/services";

export const metadata = {
  title: `Contact Summit Roofing Co. | Free Roof Inspection in ${city}`,
  description:
    "Contact Summit Roofing Co. to request your free roof inspection in Austin. Reach our team by phone, email, or form for fast local service.",
};

export default function ContactPage() {
  return (
    <div className="-mt-24 bg-white md:-mt-26">
      <ContactPageContent />
    </div>
  );
}
