import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/temp.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              I am an frontend developer with more than 3 years of experience, based in
              Mumbai, India.
              <br></br>
              <br></br>I enjoy creating things that live on the internet. 
              My interest in Web Development started back in when I decided to try Designing and Creating custom Website — 
              and it taught me a lot about HTML & CSS! 😎
              <br></br>
              <br></br>
              {/* When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design on{" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                YouTube 📸
              </a> */}
               Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more then willing to follow my fascinations wherever they take me.. I'm a fast learner, able to pick up new skills and juggle different projects and roles with relative areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
