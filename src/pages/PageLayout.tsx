import { ReactNode } from "react";


interface IPageLayout {
  title: string;
  children: ReactNode;
}


function PageLayout({
  title,
  children,
}: IPageLayout)
{
  return (
    <>
      <header className="mb-12 mt-4 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
      </header>

      <main className="container mx-auto">
        {children}
      </main>
    </>
  );
}


export default PageLayout;
