import { RevealOnScroll } from "../RevealOnScroll"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect } from "react"
import ProjectCard from "../ProjectCard"
import { projectData } from "../projectData"

function SwiperForceUpdate() {
    const swiper = useSwiper();

    useEffect(() => {
        const handleResize = () => swiper.update();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [swiper])

    return null;
}

export const Projects = () => {
    return <section id="projects" className="w-full px-4 py-16 md:py-12 lg:py-12 overflow-x-hidden">
        <RevealOnScroll>
            <div className="w-full max-w-8xl mx-auto">   
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable:true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        className="!overflow-visible"
                    >
                        <SwiperForceUpdate />
                        {projectData.map((project, i) => (
                            <SwiperSlide key={i}>
                                <ProjectCard {...project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </RevealOnScroll>
    </section>
}
