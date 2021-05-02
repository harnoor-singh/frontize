import { Container } from "./Container";
import { classnameFromList } from "../lib/classnameFromList";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3
            className={classnameFromList([
              "text-4xl lg:text-5xl",
              "font-bold text-center",
              "tracking-tighter leading-tight",
              "mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
              "lg:text-left",
            ])}
          >
            The frontize blog.
          </h3>
          <div
            className={classnameFromList([
              "flex flex-col lg:flex-row",
              "justify-center items-center",
              "lg:pl-4 lg:w-1/2",
            ])}
          >
            <a
              href="https://www.github.com/AvKat/frontize.git"
              className={classnameFromList([
                "bg-black hover:bg-white",
                "text-white hover:text-black",
                "transition-colors duration-200",
                "border border-black",
                "font-bold",
                "mx-3 mb-6 lg:mb-0",
                "py-3 px-12 lg:px-8",
              ])}
            >
              Visit on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
