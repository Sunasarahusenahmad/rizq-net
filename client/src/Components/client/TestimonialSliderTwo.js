import { colours } from "../../Utils/Colours";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';

const TestimonialSliderTwo = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    const [swiperReady, setSwiperReady] = useState(false);
  
    useEffect(() => {
      if (prevRef.current && nextRef.current) {
        setSwiperReady(true);
      }
    }, [prevRef.current, nextRef.current]);

    const testimonials = [
        {
          id: 1,
          text: 'Webestica helped us create a stunning website that reflects our brand perfectly. Their attention to detail and understanding of our requirements were exceptional. We were particularly impressed with their ability to deliver on time and exceed expectations.',
          name: 'Nix Maxwell',
          avatar: '../../../resources/images/testimonial/avatar-1.jpg',
        },
        {
          id: 2,
          text: 'Their services exceeded our expectations, delivering top-notch solutions. The team was professional, responsive, and provided continuous support throughout the project. We are truly grateful for their dedication and expertise, and we look forward to working with them again.',
          name: 'Jane Doe',
          avatar: '../../../resources/images/testimonial/avatar-2.jpg',
        },
        {
          id: 3,
          text: 'Professional, creative, and dedicated to ensuring our success. Their innovative approach to web development and their willingness to go the extra mile made all the difference in our project. We highly recommend their services to anyone looking for quality work.',
          name: 'John Smith',
          avatar: '../../../resources/images/testimonial/avatar-3.jpg',
        },
    ]; 

  return (
    <>
        <div className="row items-center">
            <div className="xl-4">
                <h3 className="mb-4 client-review-title">Why our customers love Rizqnet Solutions</h3>
                <p className="client-review-desc mb-2">50+ Users rated us <span className="text-warning fw-bold">4.5</span> out of 5.</p>
                <div className="flex gap-3 relative mt30">
                    {/* Custom Previous Button */}
                    <button ref={prevRef} className="btn btn-white border btn-prev-next rounded-circle mb-0">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path>
                        </svg>
                    </button>
                    {/* Custom Next Button */}
                    <button ref={nextRef} className="btn btn-white border btn-prev-next rounded-circle mb-0">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="xl-8">
                <Swiper  slidesPerView={2}
                loop={true}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                className="mySwiper testimonial-slider-two"
                breakpoints={{
                    280: {
                    slidesPerView: 1,
                    },
                    320: {
                    slidesPerView: 1,
                    },
                    479: {
                    slidesPerView: 2,
                    }
                }}>
                {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                    <div className="card card-body card-dark-bg padding30">
                        <div className="icon-lg rounded" style={{ backgroundColor: 'rgba(255, 193, 0, 0.1)'}}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" fill={colours.primary} role="img" focusable="false" className="testimonial-icon">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"></path>
                            </svg>
                        </div>
                        <div className="body-content pt30">
                            <p className="heading-color fw-normal">{testimonial.text}</p>
                            <ul className="list-inline mt30">
                                {[...Array(5)].map((_, i) => (
                                <li className="list-inline-item me-1" key={i}>
                                    <svg
                                        stroke={colours.primary}
                                        fill={colours.primary}
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        height="18"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                    </svg>
                                </li>
                                ))}
                            </ul>
                            <div className="p-0 testimonial-card-footer mt20">
                                <div className="flex items-center">
                                    <div className="avatar avatar-sm me-2">
                                        <img
                                            className="avatar-img rounded"
                                            src={testimonial.avatar}
                                            alt="avatar"
                                            />
                                    </div>
                                    <p className="mb-0">By {testimonial.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </>
  );
};

export default TestimonialSliderTwo;
