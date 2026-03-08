import AcademicLayout from "@/layouts/AcademicLayout";
import { FileDown } from "lucide-react";

const CV = () => {
  return (
    <AcademicLayout>
      <h1 className="text-2xl mb-4">Curriculum Vitae</h1>
      <p className="mb-6">
        You can download a PDF copy of my CV below, or view the highlights on this page.
      </p>

      <a
        href="/files/cv.pdf"
        download
        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mb-8"
      >
        <FileDown size={16} />
        Download CV (PDF)
      </a>

      <section className="mt-6">
        <h2 className="text-xl mb-3">Education</h2>
        <ul className="space-y-3">
          <li>
            <p className="font-semibold">Ph.D. in Computer Science</p>
            <p className="text-sm text-muted-foreground">University Name, 2021 – Present</p>
            <p className="text-sm">Advisor: Prof. Advisor Name</p>
          </li>
          <li>
            <p className="font-semibold">M.S. in Computer Science</p>
            <p className="text-sm text-muted-foreground">University Name, 2018 – 2020</p>
          </li>
          <li>
            <p className="font-semibold">B.S. in Mathematics</p>
            <p className="text-sm text-muted-foreground">College Name, 2014 – 2018</p>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl mb-3">Experience</h2>
        <ul className="space-y-3">
          <li>
            <p className="font-semibold">Research Intern</p>
            <p className="text-sm text-muted-foreground">Lab Name, Summer 2025</p>
            <p className="text-sm">Worked on large language model alignment and evaluation.</p>
          </li>
          <li>
            <p className="font-semibold">Teaching Assistant</p>
            <p className="text-sm text-muted-foreground">University Name, Fall 2022 – Spring 2024</p>
            <p className="text-sm">CS 101: Introduction to Computer Science</p>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl mb-3">Awards</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>University Fellowship, 2025–2026</li>
          <li>Best Paper Award, Workshop on NLP, 2024</li>
          <li>Dean's List, College Name, 2014–2018</li>
        </ul>
      </section>
    </AcademicLayout>
  );
};

export default CV;
