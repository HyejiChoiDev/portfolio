export default function WaplatB2BAdmin() {
  return (
    <section className="flex flex-col items-center my-[150px]">
      <div className="h-[500px] flex items-center gap-20 justify-center">
        <div className="w-[30%] flex flex-col">
          <p className="text-20-b">A well-aging platform</p>
          <h3 className="text-50-b leading-[1.2] mt-2 mb-4">Waplat Admin</h3>
          <p className="text-18-l">
            Waplat Public Admin enables caregivers to easily monitor the
            real-time health data and status of their assigned users. I
            developed all frontend of this admin platform and implemented a
            responsive design to ensure compatibility with mobile devices.
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
            { title: "State Management", content: "Zustand, react-query" },
            { title: "Styling", content: "MUI" },
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
