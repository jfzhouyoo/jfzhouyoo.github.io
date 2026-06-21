import { FileDown, ArrowLeft, ExternalLink, Github } from "lucide-react";
import { publications, AUTHOR_NAME, type Publication } from "@/data/publications";
import { awards } from "@/data/awards";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

/* ── Helper: render authors with Jinfeng Zhou bolded + markers ── */
const renderAuthors = (pub: Publication) => {
  const { authors, coFirst, corresponding } = pub;
  const parts = authors.split(AUTHOR_NAME);
  if (parts.length === 1) return <>{authors}</>;
  const markers = [coFirst && "†", corresponding && "*"].filter(Boolean).join("");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              <strong className="font-bold text-black">{AUTHOR_NAME}</strong>
              {markers && (
                <sup className="text-[9px] font-mono ml-px">{markers}</sup>
              )}
            </>
          )}
          {part}
        </span>
      ))}
    </>
  );
};

/* ── Layout primitives ── */
const Divider = () => <div className="border-t border-black/15 my-5" />;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/50 mb-3">
    {children}
  </h2>
);

/* ── Page ── */
const CVPage = () => {
  const hasCoFirst = publications.some((p) => p.coFirst);
  const hasCorresponding = publications.some((p) => p.corresponding);
  const hasMarkers = hasCoFirst || hasCorresponding;

  return (
    <div className="min-h-screen bg-[#f5f5f0] print:bg-white">
      {/* Control bar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-black/10 px-6 py-3 flex items-center justify-between">
        <a
          href="#/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-black/40 hover:text-black transition-colors duration-200"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white font-mono text-[11px] font-medium tracking-wider uppercase hover:bg-black/80 transition-colors duration-200"
        >
          <FileDown size={12} strokeWidth={1.5} />
          Print / Save as PDF
        </button>
      </div>

      {/* CV body */}
      <div className="mx-auto max-w-[780px] px-10 py-10 print:p-0 print:max-w-none">
        <div className="bg-white print:bg-transparent shadow-sm print:shadow-none p-12 print:p-0">

          {/* ── Header ── */}
          <div className="flex items-start justify-between gap-8 pb-6 border-b-2 border-black">
            <div>
              <h1 className="text-[2.2rem] font-bold tracking-tight leading-none text-black">
                {profile.name}
              </h1>
              <p className="mt-2 text-[14px] text-black/60">
                {profile.title} · {profile.department}
              </p>
              <p className="text-[14px] text-black/60">{profile.university}</p>
            </div>
            <div className="text-right text-[12px] text-black/55 space-y-0.5 flex-shrink-0">
              <p>
                <a href={`mailto:${profile.email}`} className="hover:underline">
                  {profile.email}
                </a>
              </p>
              <p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {profile.github.replace("https://", "")}
                </a>
              </p>
              <p>
                <a
                  href={profile.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Google Scholar
                </a>
              </p>
            </div>
          </div>

          {/* ── Research Interests ── */}
          <div className="mt-6">
            <SectionTitle>Research Interests</SectionTitle>
            <p className="text-[13.5px] text-black/80 leading-relaxed">
              {profile.researchInterests}
            </p>
          </div>

          <Divider />

          {/* ── Education ── */}
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-3.5">
              {profile.education.map((edu, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="font-mono text-[11px] text-black/40 tabular-nums flex-shrink-0 w-28 text-right mt-0.5">
                    {edu.period}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-black leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-[12.5px] text-black/60">{edu.institution}</p>
                    {edu.detail && (
                      <p className="text-[12px] text-black/45 italic">{edu.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Publications ── */}
          <div>
            <SectionTitle>Publications</SectionTitle>
            <ol className="space-y-3">
              {publications.map((pub, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-black/35 tabular-nums flex-shrink-0 w-5 text-right mt-0.5">
                    {i + 1}.
                  </span>
                  <div className="text-[12.5px] leading-relaxed text-black/75">
                    <span>{renderAuthors(pub)} </span>
                    <span className="font-semibold text-black">
                      &ldquo;{pub.title}&rdquo;
                    </span>{" "}
                    <span className="italic text-black/55">{pub.venueShort}.</span>{" "}
                    <a
                      href={pub.links[0]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/40 hover:text-black underline underline-offset-2 text-[11px] print:hidden"
                    >
                      [link]
                    </a>
                  </div>
                </li>
              ))}
            </ol>
            {hasMarkers && (
              <p className="mt-3 text-[11px] text-black/45 italic">
                {hasCoFirst && "† Equal contribution"}
                {hasCoFirst && hasCorresponding && " · "}
                {hasCorresponding && "* Corresponding author"}
              </p>
            )}
          </div>

          <Divider />

          {/* ── Projects ── */}
          {projects.length > 0 && (
            <>
              <div>
                <SectionTitle>Projects</SectionTitle>
                <div className="space-y-3">
                  {projects.map((p, i) => (
                    <div key={i} className="flex items-start gap-6">
                      <span className="font-mono text-[11px] text-black/40 tabular-nums flex-shrink-0 w-10 text-right mt-0.5">
                        {p.year ?? ""}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13.5px] font-semibold text-black leading-snug">
                            {p.title}
                          </p>
                          {p.github && p.github !== "#" && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black/35 hover:text-black print:hidden"
                              title="GitHub"
                            >
                              <Github size={12} strokeWidth={1.5} />
                            </a>
                          )}
                          {p.url && p.url !== "#" && (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black/35 hover:text-black print:hidden"
                              title="Project page"
                            >
                              <ExternalLink size={12} strokeWidth={1.5} />
                            </a>
                          )}
                        </div>
                        <p className="text-[12px] text-black/60 mt-0.5 leading-relaxed">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[9px] tracking-wider uppercase px-1.5 py-0.5 border border-black/15 text-black/45"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Divider />
            </>
          )}

          {/* ── Honors & Awards ── */}
          <div>
            <SectionTitle>Honors & Awards</SectionTitle>
            <div className="space-y-2.5">
              {awards.map((a, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="font-mono text-[11px] text-black/40 tabular-nums flex-shrink-0 w-10 text-right mt-0.5">
                    {a.year}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-black leading-snug">
                      {a.title}
                    </p>
                    <p className="text-[12px] text-black/50">{a.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CVPage;
