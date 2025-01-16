import { AnimatedTitle } from "./AnimatedTitle";
import Button from "./Button";

type ImageClipBoxProps = {
  src: string;
  clipClass: string;
};

const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);
const Contact = () => {
  return (
    <div className="my-20 min-h-96 w-screen px-10" id="contact">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
          />
        </div>
        <div className="absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            containerClass="special-font mt-10 w-full font-zentry text-5xl leading-[.9] md:text-[6rem]"
            title="Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
