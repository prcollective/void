import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorner from "./RoundedCorner";
import Button from "./Button";
const Story = () => {
    const frameRef = useRef(null);
    const handleMouse = () => {
        const element = frameRef.current;
        gsap.to(element, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.3,
            ease: "power1.inOut",
        });
    };
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, {
            rotateX,
            rotateY,
            duration: 0.3,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };
    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50" >
            <div className="flex size-full flex-col items-center py-10 pb-24" >
                <p className="font-general text-sm uppercase md:text-[10px]" >
                    the multiversal ip world
                </p>
                <div className="relative size-full" >
                    <AnimatedTitle
                        title="The st<b>o</b>ry of <br/> hidden real<b>m</b>"
                        sectionId="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container" >
                        <div className="story-img-mask" >
                            <div className="story-img-content" >
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouse}
                                    onMouseUp={handleMouse}
                                    onMouseEnter={handleMouse}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain" />

                            </div>

                        </div>
                        <RoundedCorner />

                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end" >
                    <div className="flex h-full w-fit flex-col items-center md:items-start" >
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start" >
                            Where the ordinary meets the extraordinary. We are going to take you on a journey through the hidden realm of the multiversal IP world.
                        </p>
                        <Button id="realm-btn" title="discover prologue" containerClass="mt-5" />

                    </div>

                </div>

            </div>
        </section>
    )
};

export default Story;
