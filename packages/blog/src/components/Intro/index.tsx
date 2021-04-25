import { useEffect } from "react";
import useStateCallback from "../../hooks/useStateCallback";
import { classnameFromList } from "../../utils/classnameFromList";

let bg = "/assets/blog/background/main_background.jpg";

const Intro = () => {
  const [isFullHeight, setIsFullHeight] = useStateCallback(true);

  useEffect(() => {
    setTimeout(() => setIsFullHeight(false), 1000);
  }, []);

  return (
    <section
      className={classnameFromList([
        "transition-all duration-500",
        isFullHeight ? "min-h-screen" : "min-h-0",
        "flex flex-1 flex-col",
        "md:flex-row md:justify-between",
        "p-10 md:px-25",
        "bg-gray-900 text-white",
        "items-center justify-center",
      ])}
      style={{
        backgroundImage: `url("${bg}")`,
      }}
    >
      <h1
        className={classnameFromList([
          "text-6xl",
          "font-bold",
          "tracking-tighter leading-tight",
        ])}
      >
        Frontize Blog
      </h1>
      <h4 className="text-lg">
        Get to know the making of{" "}
        <a
          href="https://github.com/AvKat/frontize.git"
          className="underline hover:text-green-300 duration-200 transition-colors"
        >
          frontize.
        </a>
      </h4>
    </section>
  );
};

export { Intro };
