import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icons from "../../components/icons/Icons";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
    const slides = [
        {
            image: "/home/xiva-3.jpg",
            title: t("home.hero.title1"),
        },
        {
            image: "/home/xiva-1.jpg",
            title: t("home.hero.title2"),
        },
        {
            image: "/home/xiva-2.jpg",
            title: t("home.hero.title3"),
        },
    ];
    return (
        <div className='bg-lightBG dark:bg-lightGR mx-auto py-5 px-5'>
            <Swiper
                modules={[Navigation, Pagination]}
                effect='fade'
                fadeEffect={{
                    crossFade: true,
                }}
                speed={10}
                slidesPerView={1}
                navigation={{
                    prevEl: ".museum-prev",
                    nextEl: ".museum-next",
                }}
                pagination={{
                    el: ".museum-pagination",
                    clickable: true,
                }}
                loop={true}
                className='museum-swiper mx-auto max-w-300 h-80 md:h-130 rounded-2xl'
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.image}
                        className='bg-cover bg-center bg-no-repeat'
                        style={{
                            backgroundImage: `url("${slide.image}")`,
                        }}
                    >
                        <div className='relative min-h-full w-full'>
                            <div className='absolute inset-0 bg-black/40' />
                            <div className='absolute flex flex-col justify-center text-white bottom-5 left-5 sm:bottom-10 sm:left-10 right-10'>
                                <h1 className='font-medium text-2xl md:text-3xl lg:text-[40px] uppercase'>
                                    {slide.title}
                                </h1>
                                <div className='mt-2 flex items-center gap-2'>
                                    <div className='h-0.5 w-10 rounded-full bg-white'></div>

                                    {Icons.location}
                                    <p className='text-base :text-lg'>
                                        {t("home.hero.location")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='mx-auto mt-5 flex w-full max-w-60 sm:max-w-80 items-center justify-center gap-5 sm:gap-8'>
                <button
                    type='button'
                    className='museum-prev flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary dark:border-[#C5A66B] bg-inherit dark:bg-primary text-primary dark:text-white shadow-md transition duration-300  hover:bg-hLight dark:hover:bg-[#D6B16D] hover:shadow-lg '
                    aria-label='Previous slide'
                >
                    <span className='text-5xl mb-2 font-medium'>‹</span>
                </button>

                <div className='museum-pagination  flex items-center justify-center gap-2'></div>
                <button
                    type='button'
                    className='museum-next flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary dark:border-[#C5A66B] bg-inherit dark:bg-primary text-primary dark:text-white shadow-md transition duration-300  hover:bg-hLight dark:hover:bg-[#D6B16D] hover:shadow-lg'
                    aria-label='Next slide'
                >
                    <span className='text-5xl mb-2 font-medium'>›</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
