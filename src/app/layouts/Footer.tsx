import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-[100px] pb-[250px]">
      <p className="text-40-b">Let's connect</p>
      <p className="text-20-l">
        Feel free to reach out anytime! I'm always here. 👋
      </p>
      <ul className="flex gap-[30px] my-[30px]">
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={50} />
          </a>
        </li>
        <li>
          <a href="mailto:huizhi1667@gmail.com" aria-label="Send an Email">
            <MdOutlineEmail size={50} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/huizhi1667"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Profile"
          >
            <FaGithubSquare size={50} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
