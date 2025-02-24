"use client";

import Image from "next/image";
import navBook from "../assets/nav-icons/nav-book.png";
import navBoard from "../assets/nav-icons/nav-board.png";
import navHat from "../assets/nav-icons/nav-hat.png";
// import navHatBlue from "../assets/nav-icons/nav-hat-blue.png";
import navPresentation from "../assets/nav-icons/nav-presentation.png";
// import navSetting from "../assets/nav-icons/nav-settings.png";
import navThought from "../assets/nav-icons/nav-thought.png";

import { useEffect, useState } from "react";

export default function SubNav() {
  const [hostName, setHostName] = useState("");

  useEffect(() => {
    const env = process.env.NODE_ENV;
    const computedHostName =
      env === "development"
        ? "http://localhost:3000"
        : `https://${window.location.hostname}`;
    setHostName(computedHostName);
  }, []);

  return (
    <section
      className="w-full hidden sm:flex my-8 mt-12"
      data-id="a891bf7"
      data-element_type="section"
    >
      <div className="container mx-auto flex justify-between">
        <div className="w-1/7">
          <div className="text-center text-xs lg:text-base font-inherit">
            <figure className="wp-caption">
              <a href={`${hostName}/circulars`}>
                <Image
                  src={navBook.src}
                  title="book"
                  alt="book"
                  width={48}
                  height={48}
                  className="inline-block align-middle w-12 mb-2"
                />
              </a>
              <figcaption className="widget-image-caption wp-caption-text mt-2 text-red-700 font-bold">
                Circulars
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="w-1/7">
          <div className="text-center text-xs lg:text-base font-inherit">
            <figure className="wp-caption">
              <a href={`${hostName}/alumni/`} rel="nofollow">
                <Image
                  src={navBoard.src}
                  title="education"
                  alt="education"
                  width={48}
                  height={48}
                  className="inline-block align-middle w-12 mb-2"
                />
              </a>
              <figcaption className="widget-image-caption wp-caption-text mt-2 text-red-700 font-bold">
                Message to Alumni
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="w-1/7">
          <div className="text-center text-xs lg:text-base font-inherit">
            <figure className="wp-caption">
              <a
                href="https://www.youtube.com/watch?v=Hyn3Y_-Un7Y"
                target="_blank"
              >
                <Image
                  src={navHat.src}
                  title="online-learning"
                  alt="online-learning"
                  width={48}
                  height={48}
                  className="inline-block align-middle w-12 mb-2"
                />
              </a>
              <figcaption className="widget-image-caption wp-caption-text mt-2 text-red-700 font-bold">
                Documentary
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="w-1/7">
          <div className="text-center text-xs lg:text-base font-inherit">
            <figure className="wp-caption">
              <a
                href="https://www.youtube.com/watch?v=9j_Y68ryRjY"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src={navThought.src}
                  title="idea"
                  alt="idea"
                  width={48}
                  height={48}
                  className="inline-block align-middle w-12 mb-2"
                />
              </a>
              <figcaption className="widget-image-caption wp-caption-text mt-2 text-red-700 font-bold">
                Our Founder
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="w-1/7">
          <div className="text-center text-xs lg:text-base font-inherit">
            <figure className="wp-caption">
              <a href={`${hostName}/admissions/`}>
                <Image
                  src={navPresentation.src}
                  title="gears"
                  alt="gears"
                  width={48}
                  height={48}
                  className="inline-block align-middle w-12 mb-2"
                />
              </a>
              <figcaption className="widget-image-caption wp-caption-text mt-2 text-red-700 font-bold">
                Admissions
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
