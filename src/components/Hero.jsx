import { useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0%, 72% 0%, 88% 90%, 0% 95%)",
            borderRadius: "0 0 40% 10%",
        });

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0 0 0 0",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            }
        });
    });

    // Only one video file, no array/cycling
    const videoSrc = "videos/hero-1.mp4";

    const handleVideoLoaded = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden" >
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50" >
                    <div className="three-body" >
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75" >
                <video
                    src={videoSrc}
                    loop
                    muted
                    autoPlay
                    className="absolute left-0 top-0 z-10 size-full object-cover object-center"
                    onLoadedData={handleVideoLoaded}
                />
                <h1 className="font-robert-regular text-blue-100" >Play to earn platform.</h1>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75" >VOID GAMING</h1>
                <div className="absolute left-0 top-0 z-40 size-full" >
                    <div className="mt-24 px-5 sm:px-10" >
                        {/* <h1 className="special-font hero-heading text-blue-100" >VOID<b></b></h1> */}
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100" >Enter the Metagame Layer <br /> Unleash the play Economy</p>
                        <Button id='watch- trailer' title='Watch Trailer' leftIcon={<TiLocationArrow />} containerClass='bg-yellow-300 flex-center gap-1' />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black" >G<b>a</b>ming</h1>
        </div>
    )
};

export default Hero;
