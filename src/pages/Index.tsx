import AcademicLayout from "@/layouts/AcademicLayout";

const Index = () => {
  return (
    <AcademicLayout>
      <section>
        <h1 className="text-2xl mb-4">About</h1>
        <p className="mb-4">
          I am a Ph.D. candidate in the Department of Computer Science at{" "}
          <a href="#">University Name</a>, advised by{" "}
          <a href="#">Prof. Advisor Name</a>. My research focuses on{" "}
          <strong>machine learning</strong>, <strong>natural language processing</strong>, and{" "}
          <strong>computational social science</strong>.
        </p>
        <p className="mb-4">
          Prior to my doctoral studies, I received my M.S. in Computer Science from University Name
          (2020) and my B.S. in Mathematics from College Name (2018).
        </p>

        <h2 className="text-xl mt-8 mb-3">Research Interests</h2>
        <ul className="list-disc list-inside space-y-1 text-foreground/90">
          <li>Machine Learning &amp; Deep Learning</li>
          <li>Natural Language Processing</li>
          <li>Computational Social Science</li>
          <li>Fairness &amp; Interpretability in AI</li>
        </ul>

        <h2 className="text-xl mt-8 mb-3">News</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-muted-foreground font-medium">[Mar 2026]</span>{" "}
            Paper accepted at ACL 2026!
          </li>
          <li>
            <span className="text-muted-foreground font-medium">[Jan 2026]</span>{" "}
            Started as a research intern at Lab Name.
          </li>
          <li>
            <span className="text-muted-foreground font-medium">[Sep 2025]</span>{" "}
            Awarded the University Fellowship for 2025–2026.
          </li>
        </ul>
      </section>
    </AcademicLayout>
  );
};

export default Index;
