import AcademicSidebar from "@/components/AcademicSidebar";

const AcademicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AcademicSidebar />
      <main className="flex-1 lg:ml-72 px-6 py-8 lg:px-12 lg:py-10 max-w-3xl">
        {children}
      </main>
    </div>
  );
};

export default AcademicLayout;
