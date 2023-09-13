import React from "react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import SlideUp from "../SlideUp";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import talent2022 from "../../../public/certificates/talent2022.png";

const experience = [
  {
    company: "alfatech S.A. de C.V",
    from: "September 2020",
    to: "December 2020",
    position: "Frontend lead developer",
    location: "juarez, MX (remote)",
    description: [
      "Guided the web development team on a project from scratch, suggested the MEVN stack.",
      "Implemented and managed an agile methodology.",
      "Designed UI elements and helped the UX side",
      "Tested, coded, reviewed and delivered software on-time and acknowledged by the company",
    ],
  },
];

const CertificatesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <section id="experience" className="bg-stone-900">
      <div className="my-auto pb-12 md:py-32 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <h1 className="text-white font-bold text-4xl mb-20 md:mb-12">
          Courses & Certificates
          <hr className="w-6 h-1 my-4 bg-red-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 justify-centerr align-middle md:py-4 text-left">
          <Tab.Group>
            <Tab.List className="flex gap-4">
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-red-500 text-white font-bold p-5 outline-none"
                        : "bg-red-400 text-black font-bold p-5 outline-none"
                    }
                  >
                    Web Development
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-red-500 text-white font-bold p-5 outline-none"
                        : "bg-red-400 text-black font-bold p-5 outline-none"
                    }
                  >
                    UX/UI Design
                  </button>
                )}
              </Tab>
              <Tab className="outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-red-500 text-white font-bold p-5 outline-none"
                        : "bg-red-400 text-black font-bold p-5 outline-none"
                    }
                  >
                    Hackathons
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>
                <button onClick={() => setIsOpen(true)}>Preview Images</button>
                {isOpen && (
                  <Lightbox
                    imageTitle={"Certificado"}
                    imageCaption={"Certificado"}
                    mainSrc={talent2022}
                    onCloseRequest={() => setIsOpen(false)}
                  />
                )}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
