import { useState } from "react";

import Button from "../components/Elements/Button";

import BoxImage from "../components/Elements/BoxImage";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

import DogHero from "../assets/images/doghero.png";

import KittyVideo from "../assets/images/kitty-video.png";
import PlayCircle from "../assets/images/icons/play-circle.png";
import CatBottom from "../assets/images/cat-stack-bottom.png";
import CatMiddle from "../assets/images/cat-stack-middle.png";
import CatTop from "../assets/images/cat-stack-top.png";

import AnimalTrace from "../assets/images/animal-trace.png";
import CatLeft from "../assets/images/cat-stack-left.png";
import CatCenter from "../assets/images/cat-stack-center.png";
import CatRight from "../assets/images/cat-stack-right.png";
import FunnyDog from "../assets/images/funny-dog-flyer.png";

import AdoptTutorial from "../assets/images/adopt-tutorial.png";

import NextLeft from "../assets/images/icons/next-left.png";
import NextRight from "../assets/images/icons/next-right.png";

import { tutorials, testimonies } from "../contants";

export default function LandingPage() {
  let fragmentStep = Math.ceil(tutorials.length / 2);
  let [currentStep, setCurrentStep] = useState(0);

  const nextStep = (limitStep, increment) => {
    if (currentStep == limitStep) setCurrentStep(0);
    else setCurrentStep(currentStep + increment);
  };

  let [currentTesti, setCurrentTesti] = useState(0);

  const nextTesti = (limitTesti, increment) => {
    if (currentTesti == limitTesti) setCurrentTesti(0);
    else setCurrentTesti(currentTesti + increment);
  };

  const prevTesti = (decrement) => {
    if (currentTesti == 0) setCurrentTesti(testimonies.length - 1);
    else setCurrentTesti(currentTesti - decrement);
  };

  return (
    <>
      <Header />

      <div className="content mb-10 flex flex-col gap-28 relative px-[80px]">
        <section className="jumbotron flex justify-between mt-[46px]">
          <div className="text-jumbotron w-[580px]">
            <div className="text-5xl font-semibold leading-normal mb-2 py-2">
              Find Your Perfect Companion and have endless joy at{" "}
              <span className="font-bold text-primary">Pawsome</span>
              <span className="font-bold">!</span>
            </div>
            <div className="text-2xl font-medium mb-14 text-zinc-500/80">
              Explore our wide selection of loving pets and start a lifetime of
              cherished memories.
            </div>

            <div className="w-[366px] inline-flex gap-6">
              <Button
                type="button"
                outerClassName="text-white"
                borderColor="primary"
                btnClassName="bg-primary hover:bg-hoverPrimary text-lg font-semibold leading-[21px] py-4 px-10"
              >
                Find Pet
              </Button>
              <Button
                type="button"
                outerClassName="text-primary hover:text-white"
                borderColor="primary"
                btnClassName="hover:bg-primary text-lg font-semibold leading-[21px] py-4 px-10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hero">
            <BoxImage
              borderRadius="rounded-[80px]"
              className="w-[470px] h-[470px] ps-10 relative"
            >
              <img
                src={DogHero}
                alt="doghero.png"
                className="w-[400px] h-[516px] absolute bottom-0"
              />
            </BoxImage>
          </div>
        </section>

        <section className="flyer-primary flex justify-between items-center gap-[30px]">
          <div className="video-box relative">
            <BoxImage
              borderRadius="rounded-[40px]"
              className="w-[170px] h-[170px] relative overflow-hidden"
            >
              <img
                src={KittyVideo}
                alt="kitty-video.png"
                className="relative"
              />
            </BoxImage>
            <BoxImage
              borderRadius="rounded-full overflow-hidden"
              bgColor="bg-white"
              className="absolute right-[-10px] top-[-10px]"
            >
              <img
                src={PlayCircle}
                alt="play-circle.png"
                className="w-11 h-11"
              />
            </BoxImage>
          </div>

          <div className="flyer-label w-[770px] h-[132px] text-center">
            <div className="text-xl text-primary">Why adopting?</div>
            <div className="text-[32px] font-bold">
              Experience the power of compassion and change a life by adopting a
              furry friend today.
            </div>
          </div>

          <div className="cat-stack w-[170px] h-[134px] relative">
            <BoxImage
              borderRadius="rounded-xl"
              className="absolute shadow-lg top-0 overflow-hidden w-[85px] h-[85px]"
            >
              <img src={CatBottom} alt="cat-bottom.png" className="relative" />
            </BoxImage>
            <BoxImage
              borderRadius="rounded-xl"
              className="absolute shadow-lg bottom-0 left-7 overflow-hidden w-[85px] h-[85px]"
            >
              <img src={CatMiddle} alt="cat-middle.png" className="relative" />
            </BoxImage>
            <BoxImage
              borderRadius="rounded-xl"
              className="absolute shadow-lg bottom-5 right-0 overflow-hidden w-[85px] h-[85px]"
            >
              <img src={CatTop} alt="cat-top.png" className="relative" />
            </BoxImage>
          </div>
        </section>

        <section className="flyer-secondary h-[253px] border-radius rounded-[64px] shadow bg-gradient-to-br from-amber-300 via-amber-300 to-orange-400 flex">
          <BoxImage
            borderRadius="rounded-sm"
            bgColor="bg-transparent"
            className="overflow-hidden h-60 flex justify-center pl-8"
          >
            <img
              src={AnimalTrace}
              alt="animal-trace.png"
              className="relative"
            />
          </BoxImage>
          <div className="flyer-secondary-center w-[699px] flex flex-col justify-center gap-24">
            <div className="cat-stack relative mx-auto w-[180px]">
              <BoxImage
                borderRadius="rounded-[40px]"
                bgColor="bg-white"
                className="absolute overflow-hidden w-[78px]"
              >
                <img src={CatLeft} alt="cat-stack-left.png" />
              </BoxImage>
              <BoxImage
                borderRadius="rounded-[40px]"
                bgColor="bg-white"
                className="absolute left-12 overflow-hidden w-[78px]"
              >
                <img src={CatCenter} alt="cat-stack-center.png" />
              </BoxImage>
              <BoxImage
                borderRadius="rounded-[40px]"
                bgColor="bg-white"
                className="absolute left-24 overflow-hidden w-[78px]"
              >
                <img src={CatRight} alt="cat-stack-right.png" />
              </BoxImage>
            </div>
            <div className="flyer-label text-center">
              <div className="text-white text-[32px] font-extrabold leading-[48px]">
                More than 200+ pets ready to be your companion!
              </div>
            </div>
          </div>
          <BoxImage
            borderRadius="rounded-none"
            bgColor="bg-transparent"
            className="w-80 h-[480px] flex justify-center absolute right-[100px]"
          >
            <img
              src={FunnyDog}
              alt="funny-dog-flyer.png"
              className="absolute top-[-145px]"
            />
          </BoxImage>
        </section>

        <section className="adopt-tutorial h-[271px] flex">
          <BoxImage
            borderRadius="rounded-none"
            bgColor="bg-transparent"
            className="w-[271px]"
          >
            <img
              src={AdoptTutorial}
              alt="adopt-tutorial.png"
              className="relative"
            />
          </BoxImage>

          <div className="adopt-tutorial-text flex flex-col gap-6">
            <div className="adopt-tutorial-title w-[470px] text-stone-700 text-4xl font-bold leading-[54px] ml-[30px]">
              The process of adoption in Pawsome!
            </div>
            <div className="adopt-tutorial-content flex flex-row gap-6 justify-start items-center">
              <div className="adopt-tutorial-steps w-[834px] overflow-hidden relative">
                <div
                  className={`carousel-tutorial w-[804px] flex flex-row justify-start items-start transition ease-out duration-75`}
                  style={{
                    transform: `translateX(-${
                      currentStep * 100 + currentStep * 4.5
                    }%)`,
                  }}
                >
                  <div
                    className={`carousel-tutorial w-[${
                      fragmentStep * 804
                    }px] flex justify-start items-start transition ease-out duration-75`}
                  >
                    {tutorials.map((step, index) => {
                      return (
                        <div
                          key={index}
                          className="adopt-tutorial-step w-[390px] flex flex-col gap-2 ml-[30px]"
                        >
                          <p className="text-primary text-xl font-light leading-[30px]">
                            {step.order}
                          </p>
                          <p className="text-stone-700 text-2xl font-bold leading-9">
                            {step.highlight}
                          </p>
                          <p className="text-stone-500 text-base font-normal leading-normal">
                            {step.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="adopt-next flex justify-center items-center w-[70px] h-[70px]">
                <Button
                  type="button"
                  outerClassName="text-white hover:text-black"
                  borderColor="primary"
                  btnClassName="w-full h-full bg-primary hover:bg-hoverPrimary text-base leading-normal"
                  onClick={() => nextStep(2, 1)}
                >
                  <img
                    src={NextRight}
                    alt="next-right.png"
                    className="relative"
                  />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="testimony h-[370px] relative overflow-hidden">
          <div className="testimony-content w-[1210px] flex justify-between overflow-hidden">
            <div
              className="carousel-testimony w-full flex gap-[20px] transition ease-in duration-75"
              style={{
                transform: `translateX(-${currentTesti * 100}%)`,
                transition: "opacity 1s ease-in-out",
              }}
            >
              {testimonies.map((testi, index) => {
                return (
                  <div
                    className="box-testimony flex gap-[10px] transition ease-in duration-75"
                    style={{
                      transition: "opacity 1s ease-in-out",
                      opacity: currentTesti === index ? 1 : 0,
                    }}
                    key={index}
                  >
                    <div className="testimony-text w-[810px] flex flex-col gap-[30px]">
                      <div className="testimony-text-tittle w-[470px] text-stone-700 text-4xl font-medium leading-[54px]">
                        Meet{" "}
                        <span className="text-primary font-bold">
                          {testi.name}
                        </span>{" "}
                        a happy pet owner!
                      </div>
                      <div className="testimony-text-content text-stone-500 text-2xl font-light leading-9">
                        {testi.text}
                      </div>
                    </div>
                    <BoxImage
                      borderRadius="rounded-[80px]"
                      bgColor="bg-transparent"
                      className="overflow-hidden w-[370px]"
                    >
                      <img src={testi.imageSource} alt={testi.imageAlt} />
                    </BoxImage>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="testimony-button absolute bottom-0 w-[86px] flex gap-6">
            <Button
              type="button"
              outerClassName="text-white hover:text-black"
              borderColor="primary"
              btnClassName="w-6 h-6 bg-primary hover:bg-hoverPrimary text-base leading-normal"
              onClick={() => prevTesti(1)}
            >
              <img src={NextLeft} alt="next-left.png" className="relative" />
            </Button>
            <Button
              type="button"
              outerClassName="text-white hover:text-black"
              borderColor="primary"
              btnClassName="w-6 h-6 bg-primary hover:bg-hoverPrimary text-base leading-normal"
              onClick={() => nextTesti(testimonies.length - 1, 1)}
            >
              <img src={NextRight} alt="next-right.png" className="relative" />
            </Button>
          </div>
        </section>

        <section className="flyer-third h-56 flex flex-col items-center gap-8">
          <div className="flyer-label w-[770px] h-[132px] text-stone-700 flex flex-col gap-1 text-center">
            <div className="text-2xl text-primary">
              Already made up your mind?
            </div>
            <div className="text-[32px]">
              <p className="font-black">
                Ready to adopt? Take the next step and give a deserving pet a
                loving home.
              </p>
            </div>
          </div>
          <div className="inline-flex justify-center gap-6">
            <Button
              type="button"
              outerClassName="text-white"
              borderColor="primary"
              btnClassName="w-[170px] bg-primary hover:bg-hoverPrimary text-base font-semibold tracking-wide leading-normal py-[18px]"
            >
              Find pet now
            </Button>
            <Button
              type="button"
              outerClassName="w-[170px] text-primary hover:text-white"
              borderColor="primary"
              btnClassName="w-[170px] hover:bg-primary text-base font-semibold tracking-wide leading-normal py-[18px]"
            >
              Discuss with us
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
