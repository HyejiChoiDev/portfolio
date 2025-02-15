"use client";

import { useRouter } from "next/navigation";
import {
  DEBUNK_ADMIN,
  DEBUNK_WECHAT,
  WAPLAT_B2B_ADMIN,
  WAPLAT_B2B_WEBVIEW,
  WAPLAT_CHECK_WEBVIEW,
  WEBSITES,
} from "../types/constants";
import Title from "./common/Title";
import { motion } from "framer-motion";
import { useState } from "react";
import { LuMoveRight } from "react-icons/lu";

export default function Projects() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <section id="project" className="flex flex-col gap-[50px] py-[150px]">
      <Title title="Project" />
      <div className="flex w-full justify-between">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handleClick("/projects/waplat-b2b-webview")}
          className="w-[40%] h-[400px] rounded-[50px] flex items-center justify-center cursor-pointer  transition-shadow duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(/assets/image/waplat-b2b-01.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <motion.h3
            initial={{ x: 0 }}
            animate={{ x: isHovered ? -20 : 0 }} // 왼쪽으로 이동
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-30-b flex items-center gap-2"
          >
            WAPLAT B2B Webview
          </motion.h3>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }} // 오른쪽으로 등장
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-xl top-[2px]"
          >
            <LuMoveRight size={20} />
          </motion.span> */}
        </div>
        <div
          onClick={() => handleClick("/projects/waplat-check-webview")}
          className="w-[55%] h-[400px] rounded-[50px] flex items-center justify-center cursor-pointe bg-[#e6f1ff]  transition-shadow duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(/assets/image/waplat-02.png)`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <h3 className="text-30-b">WAPLAT Check Webview</h3> */}
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div
          onClick={() => handleClick("/projects/waplat-b2b-admin")}
          className="w-[30%] h-[400px] rounded-[50px] flex items-center justify-center cursor-pointer bg-[#f2f6fc]  transition-shadow duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(/assets/image/waplat-admin-01.png)`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          onClick={() => handleClick("/projects/debunk-admin")}
          className="w-[30%] h-[400px] rounded-[50px] flex items-center justify-center cursor-pointer  transition-shadow duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(/assets/image/debunk-01.avif)`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          onClick={() => handleClick("/projects/debunk-wechat")}
          className="w-[30%] h-[400px] rounded-[50px] flex items-center justify-center cursor-pointer bg-[#f2f3f7]  transition-shadow duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(/assets/image/debunk-02.png)`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="flex w-full">
        <div
          onClick={() => handleClick("/projects/websites")}
          className="w-[100%] h-[400px] rounded-[50px] flex items-center justify-center cursor-pointer  transition-shadow duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(/assets/image/wooparoo-02.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
}
