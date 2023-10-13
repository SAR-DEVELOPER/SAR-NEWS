import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"


export default function SidePostSlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                className="sidePost-active"
            >
                <SwiperSlide className="sidePost__item">
                    <div className="widget sidebar-widget">
                        <div className="tgAbout-me">
                            <div className="tgAbout-thumb">
                                <img src="/assets/img/others/about_shella.png" alt="me" />
                            </div>
                            <div className="tgAbout-info">
                                <p className="intro">Hi there, I’m <br/><span>Shella Dwinanda</span></p>
                                <span className="designation">Content Writer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="sidePost__item">
                    <div className="widget sidebar-widget">
                        <div className="tgAbout-me">
                            <div className="tgAbout-thumb">
                                <img src="/assets/img/others/about_janu.png" alt="me" />
                            </div>
                            <div className="tgAbout-info">
                                <p className="intro">Hi there, I’m <br/><span>Januarsyah Dwi Priyono</span></p>
                                <span className="designation">Copywriter</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="sidePost__item">
                    <div className="widget sidebar-widget">
                        <div className="tgAbout-me">
                            <div className="tgAbout-thumb">
                                <img src="/assets/img/others/about_aldio.png" alt="me" />
                            </div>
                            <div className="tgAbout-info">
                                <p className="intro">Hi there, I’m <br/><span>Aldio Misky M.</span></p>
                                <span className="designation">Editor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="sidePost__item">
                    <div className="widget sidebar-widget">
                        <div className="tgAbout-me">
                            <div className="tgAbout-thumb">
                                <img src="/assets/img/others/about_alfaza.png" alt="me" />
                            </div>
                            <div className="tgAbout-info">
                                <p className="intro">Hi there, I’m <br/><span>Alfaza Ranggana</span></p>
                                <span className="designation">Web Administrator</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>




                {/* <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post02.jpg")', width: 300 }}>
                    <div className="sidePost__content">
                        <Link href="/blog" className="tag">Travel</Link>
                        <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="sidePost__item" style={{ backgroundImage: 'url("/assets/img/category/side_post03.jpg")', width: 300 }}>
                    <div className="sidePost__content">
                        <Link href="/blog" className="tag">Gaming</Link>
                        <h5 className="title tgcommon__hover"><Link href="/blog/1">Tips for helping to make an your startup a success</Link></h5>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </>
    )
}
