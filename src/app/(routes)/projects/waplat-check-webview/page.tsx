export default function WaplatCheckWebview() {
  return (
    <section className="flex flex-col items-center my-[150px]">
      <div className="h-[500px] flex items-center gap-20 justify-center">
        <div className="w-[30%] flex flex-col">
          <p className="text-20-b">Medication & Hospital Record Management</p>
          <h3 className="text-50-b leading-[1.2] mt-2 mb-4">
            Waplat Check Webview
          </h3>
          <p className="text-18-l">
            Waplat Check helps users remember to take their medication on time
            by providing reminders. It also analyzes data more accurately and
            displays it on the screen. Users can check details such as which
            medication has the lowest adherence rate and which doses were
            missed.
          </p>
        </div>
        <span className="block max-w-[500px] w-[60%] h-full border" />
      </div>

      <div className="my-[200px] w-full max-w-[700px] flex flex-col items-center">
        <h4 className="text-40-b mb-[50px] text-center">Project Environment</h4>
        <ul className="flex flex-col gap-8 w-full">
          {[
            {
              title: "Core",
              content: "React, TypeScript, Next.js 13.4.9 App Router",
            },
            {
              title: "State Management",
              content: "Context API, zustand, react-query",
            },
            { title: "Styling", content: "Tailwind" },
            { title: "Package Manager", content: "npm" },
            { title: "Build", content: "Webpack" },
            { title: "CI/CD", content: "PM2, Jenkins, NHN Cloud" },
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <h5 className="text-20-b">{item.title}</h5>
              <p className="text-18-l text-gray-700">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
