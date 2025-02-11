import Title from "./common/Title";

export default function Projects() {
  return (
    <section className="flex flex-col gap-[50px] my-[150px]">
      <Title title="Projects" />
      <div className="flex w-full justify-between">
        <div
          className="w-[55%] h-[400px] border rounded-[50px]"
          style={{
            backgroundImage: `url(/assets/image/PSD_6.jpg`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          WAPLAT - 공공 웹뷰
        </div>
        <div className="w-[40%] h-[400px] border rounded-[50px]">
          WAPLAT - 체크 웹뷰
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[30%] h-[400px] border rounded-[50px]">
          WAPLAT - 공공 어드민
        </div>
        <div className="w-[30%] h-[400px] border rounded-[50px]">
          디벙크 해외송금 - 어드민
        </div>
        <div className="w-[30%] h-[400px] border rounded-[50px]">
          디벙크 해외송금 - 위쳇 미니 프로그램
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[100%] h-[400px] border rounded-[50px]">
          우파루, 한게임포커, 아이씨비
        </div>
      </div>
    </section>
  );
}
