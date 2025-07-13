import ay from "/src/assets/images/artisticyoga.png";
import dayx from "/src/assets/images/dayx.png";
import vitalco from "/src/assets/images/vitalco.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://artisticyoga.com/"
            img={ay}
            alt="Artistic Yoga"
            name="artistic yoga website"
            type="Frontend Development"
            year="2023"
            tools="ReactJs • Firebase • Bootstrap"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://dayx.ai/"
            img={dayx}
            alt="dayX"
            name="dayX"
            type="Frontend Development"
            year="2024"
            tools="Angular • Bootstrap • Gsap"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://vital-co.web.app/"
            img={vitalco}
            alt="vital co"
            name="vital co"
            type="Frontend Development"
            year="2025"
            tools="ReactJs • Firbase • Stripe • Bootstrap"
          />
        </div>

        {/* <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={ay}
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={dayx}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div> */}
      </div>
    </section>
  );
}
