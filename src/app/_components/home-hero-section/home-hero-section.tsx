import Image from "next/image";
import { Button } from "../button";
import { IconArrowLeftFill } from "../icons/icons";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl dark:text-info xl:text-wxl">خوش آمدید ...</h3>
          <h1 className="text-3xl font-black gradient lg:text-3xl xl:text-5xl">
            مسیر سعود به قله های برنامه نویسی
          </h1>
          <p>
            {" "}
            هر جای مسیر برنامه نویسی که باشی، با همراهی استادهای باتجربه کلاسبن
            می تونی بدون محدودیت به قله های بالاتر صعود کنی. ما همیشه هواتونو
            داریم.
          </p>
          <div className="mt-45 flex gap-4 justify-center xl:justify-start">
            <Button variant="primary" size="large">
              دوره های ری اکت و نکست
              <IconArrowLeftFill fill="currentColor" />
            </Button>
            <Button variant="primary" size="large">
              مشاوره برنامه نویسی
            </Button>
          </div>
          <Image
            src="/images/frameworks.png"
            alt=""
            width={412}
            height={39}
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          width={702}
          height={5210}
          alt="کلاسبن"
        />
      </div>
    </section>
  );
};
