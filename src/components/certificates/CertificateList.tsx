"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { certificates } from "@/data/portfolio";
import { Award, BadgeCheck, FileText } from "lucide-react";
import Image from "next/image";

export function CertificateList() {
  return (
    <section className="space-y-6">
      <FadeIn>
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Award className="h-6 w-6 text-[#FFD700]" />
          Certifications
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <FadeIn key={cert.credentialId} delay={0.06 * i}>
            <article className="group h-full overflow-hidden rounded-lg border border-gray-700 bg-gray-900 transition-colors duration-300 hover:border-[#FFD700]/40">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cert.title} certificate (PDF)`}
                className="relative block aspect-[842/595] overflow-hidden border-b border-gray-800 bg-white"
              >
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>

              <div className="space-y-3 p-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="text-sm text-[#FFD700]">{cert.issuer}</p>
                  <p className="mt-1 text-sm text-gray-500">Issued {cert.date}</p>
                </div>

                <p className="break-all font-[family-name:var(--font-mono)] text-xs text-gray-600">
                  ID: {cert.credentialId}
                </p>

                <div className="flex flex-wrap gap-4 pt-1 text-sm">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#FFD700]"
                  >
                    <FileText className="h-4 w-4" />
                    View certificate
                  </a>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#FFD700] hover:underline"
                    >
                      <BadgeCheck className="h-4 w-4" />
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
