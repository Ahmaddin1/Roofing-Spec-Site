const certifications = [
  "GAF Certified",
  "Owens Corning Preferred",
  "BBB Accredited",
  "Google Guaranteed",
  "CertainTeed SELECT ShingleMaster",
];

export default function CertificateStrip() {
  return (
    <section className="overflow-hidden border-y border-[#DDE3ED] bg-white py-6">
      <div className="flex w-max animate-[certificate-marquee_30s_linear_infinite] motion-reduce:animate-none">
        {[0, 1, 2].map((copyIndex) => (
          <div key={copyIndex} className="flex min-w-max items-center">
            {certifications.map((item) => (
              <div
                key={`${copyIndex}-${item}`}
                className="flex items-center gap-4 px-6 text-sm font-semibold text-[#1B3A6B]"
              >
                <span className="whitespace-nowrap rounded-full border border-[#DDE3ED] bg-[#F5F7FA] px-4 py-2">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
