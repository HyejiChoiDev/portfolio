export default function WaplatB2BWebview() {
  return (
    <section className="flex flex-col items-center my-[150px]">
      <div className="h-[500px] flex items-center gap-20 justify-center">
        <div className="w-[30%] flex flex-col">
          <p className="text-20-b">A well-aging platform</p>
          <h3 className="text-50-b leading-[1.2] mt-2 mb-4">
            Waplat B2B Webview
          </h3>
          <p className="text-18-l">
            Seniors can use a smartphone to access wellness, health, and leisure
            content, while caregivers can conveniently check on their well-being
            through the admin system.
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
            { title: "State Management", content: "Context API" },
            { title: "Styling", content: "Tailwind, shadcn" },
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
