import { FiDownload } from "react-icons/fi";
import Title from "./common/Title";

export default function About() {
  return (
    <section className="flex flex-col items-center pt-[150px] pb-[250px]">
      <Title title="Profile" />
      <ul className="flex w-full gap-[30px] justify-between items-center">
        <li className="w-[30%]">
          <h3 className="text-30-b">About Me</h3>
          <p className="text-20-l my-10 ">
            I am a developer with over 3 years of experience in web development,
            with about 1 year of experience in backend development in addition
            to frontend. I also have experience collaborating with various
            teams, including a partnership with Alibaba in China. With this
            background, I can understand business logic from a broader
            perspective and efficiently execute tasks.
          </p>
          <button className="text-20-b flex items-center gap-[5px]">
            Download CV <FiDownload fontWeight={900} />
          </button>
        </li>
        <li>
          <img className="w-[350px] h-[350px] border" />
        </li>
        <li className="w-[30%]">
          <h3 className="text-30-b mb-10">Detail</h3>
          <ul>
            <li className="text-20-l">
              <p className="text-20-b">Name :</p>
              <p>Hyeji Choi</p>
            </li>
            <li className="text-20-l  mt-[10px]">
              <p className="text-20-b">Skills :</p>
              <p>React.js, Next.js, Vue.js, Javascript, Nginx, Springboot</p>
            </li>
            <li className="text-20-l mt-[10px]">
              <p className="text-20-b">Language :</p>
              <p>English, Chinese, Korean</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
