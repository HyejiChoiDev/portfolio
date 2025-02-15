import Image from "next/image";

export default function Main() {
  return (
    <section className="flex flex-col items-center min-h-[700px] h-[100vh] mt-[-120px] justify-center">
      <Image
        priority
        width={500}
        height={500}
        alt="hello"
        src={"/assets/image/hello.gif"}
        className="mt-[-200px]"
      />
      <p className="text-70-b">welcome to my</p>
      <p className="text-70-b mb-10">Portfolio!</p>
      <span className="text-40-l">Hyeji Choi</span>
      <span className="text-18-l">Frontend Developer</span>
    </section>
  );
}
