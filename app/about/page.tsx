import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About David Sajitz | Frontend Webdeveloper",
  description: "Frontend Webdeveloper",
};

export default function About() {
  return (
    <div>
      <h1 className="mb-5 text-3xl font-medium text-sky-500 dark:text-blue-700">
        Über Mich
      </h1>
      <div className="flex flex-col space-y-4">
        <p>
          Ich bin ein leidenschaftlicher Frontend Entwickler mit umfassenden
          Kenntnissen in modernen Web-Technologien. Derzeit absolviere ich einen
          Weiterbildungskurs für Web- und Softwareentwicklung beim Digital
          Career Institute, wo ich auch als Tutor und Nachhilfelehrer tätig bin.
        </p>
        <p>
          Mein Technologie-Stack umfasst unter anderem HTML, CSS/SCSS,
          TailwindCSS, JavaScript, TypeScript, React, Vue, NextJS, NuxtJS,
          NodeJS, Express, MongoDB, REST APIs und SQL. Mit meiner Expertise in
          diesen Bereichen strebe ich danach, intuitive und ansprechende
          Benutzererlebnisse zu schaffen, die sowohl ästhetisch ansprechend als
          auch funktional sind.
        </p>
        <p>
          Ich bin stets auf der Suche nach neuen Herausforderungen und
          Möglichkeiten, um meine Fähigkeiten weiterzuentwickeln und innovative
          Lösungen zu realisieren.
        </p>
      </div>
    </div>
  );
}
