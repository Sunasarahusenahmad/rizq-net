import { colours } from "../../Utils/Colours";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
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
        <div className="mb-5 lg-6">
            <span className="bg-light rounded-3 px-3 py-2">💖 Good review from clients</span>
            <h3 className="my-4 common-title">See how we've helped our clients succeed</h3>
            <p className="mb20 font-bold">More than 10+ agencies using Rizqnet</p>
            <Swiper  slidesPerView={2}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper mt30"
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
                <div className="bg-transparent h-100 testimonial-card">
                    <div className="p-0 testimonial-card-body">
                    <ul className="list-inline mb-3">
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
                    <p className="heading-color fw-normal">{testimonial.text}</p>
                    </div>
                    <div className="p-0 testimonial-card-footer mt10">
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
            </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="position-relative xl-5 lg-6 sm-10 testimonial-img">
            <img src={`../../../resources/images/testimonial/testimonial-1.jpg`} className="rounded" alt="testimonial-img" />
            <figure className="testimonial-arrow">
                <svg width="144" height="166" viewBox="0 0 144 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-mode" d="M113.199 50.9244C112.596 46.339 111.938 41.4066 111.26 36.313C112.477 36.3608 113.16 36.4563 113.239 37.7452C113.369 39.8372 113.688 41.9264 113.989 44.0007C114.229 45.6329 114.566 47.2491 114.897 49.0506C117.03 47.6646 117.874 46.1495 117.754 43.8625C117.641 41.7025 118.148 39.5274 118.187 37.3447C118.221 35.5034 117.932 33.6609 117.853 31.811C117.829 31.3058 118.035 30.7983 118.146 30.2141C119.83 30.6233 119.847 31.8334 119.855 32.9165C119.897 35.9832 119.846 39.0464 119.837 42.1101C119.837 42.3492 119.859 42.5836 119.875 42.8375C122.111 41.9771 122.784 40.9163 122.955 38.5496C123.128 36.2147 123.525 33.8969 123.718 31.5671C123.824 30.3267 123.712 29.0814 123.71 27.8129C125.609 27.9977 125.795 28.2023 125.63 29.7908C125.378 32.1883 125.114 34.5929 124.879 37.0052C124.83 37.4706 124.935 37.945 124.983 38.5602C126.484 38.2771 127.287 37.8324 127.854 36.2239C128.914 33.2062 129.092 30.0932 129.676 27.0238C129.805 26.33 129.876 25.621 130.006 24.6052C130.829 24.9658 131.427 25.2262 131.756 25.364C131.26 28.4149 130.848 31.1862 130.345 33.9443C130.06 35.5121 130.568 36.5179 131.95 37.3262C134.454 38.8228 136.874 40.4429 139.316 42.0169C139.513 42.1411 139.64 42.3718 139.879 42.6526C139.608 43.091 139.335 43.5392 139.074 43.9802C138.723 43.8885 138.454 43.8806 138.277 43.7615C136.522 42.5855 134.718 41.4798 133.055 40.1926C130.88 38.5119 128.793 38.5274 126.425 40.2157C128.777 43.1693 132.676 43.9498 135.203 46.7932C134.962 47.1564 134.722 47.5196 134.379 48.0328C130.718 46.4208 127.533 44.1018 124.116 41.5972C122.968 42.721 121.793 43.8689 120.334 45.3063C123.046 46.8053 125.495 48.1525 127.944 49.4997C128.508 49.8134 129.18 50.0307 129.603 50.4843C129.954 50.8566 130.013 51.5061 130.36 52.4906C125.841 51.569 122.873 48.6621 118.973 47.2059C118.045 48.2834 117.073 49.4117 115.864 50.8104C118.379 51.9876 120.706 53.0846 123.041 54.1525C123.403 54.32 123.991 54.2241 124.184 54.4824C124.526 54.9254 124.654 55.5513 124.866 56.0952C124.383 56.2703 123.817 56.6835 123.432 56.562C122.211 56.1702 121.037 55.6033 119.87 55.0487C117.99 54.1518 116.123 53.2063 114.36 52.3401C101.683 64.3771 98.5715 79.9025 96.6302 95.9314C98.838 96.7685 100.8 97.4687 102.733 98.2442C105.629 99.3964 107.415 101.766 109.175 104.159C112.643 108.818 113.566 114.173 113.972 119.829C114.177 122.71 112.879 124.366 111.236 126.109C109.163 128.301 106.714 129.781 103.514 129.432C100.468 129.093 98.4789 127.419 97.3542 124.631C95.5645 120.203 95.1947 115.523 95.0572 110.83C94.951 107.372 95.1356 103.918 95.1638 100.464C95.1655 99.8203 95.0939 99.1779 95.0524 98.4603C93.7898 97.9119 92.5297 98.0709 91.25 98.2249C85.6593 98.8938 80.6937 101.275 75.9535 104.068C71.1493 106.907 66.5711 110.117 63.3385 114.833C62.6662 115.811 62.0884 116.865 61.467 117.888C63.1573 118.673 64.6318 119.526 66.2098 120.063C68.5452 120.85 70.6979 122.058 72.4806 123.605C73.9072 124.84 74.7815 126.794 75.68 128.536C76.2551 129.643 76.4419 130.96 76.7886 132.183C77.2903 134.009 76.8058 135.265 75.2357 136.33C70.9711 139.217 66.3749 137.516 63.3267 134.515C59.5648 130.819 57.9099 126.354 58.8783 121.056C58.9376 120.75 58.8995 120.418 58.9114 119.735C56.044 119.827 53.2131 119.7 50.4457 120.047C39.6355 121.399 29.0725 123.678 19.2226 128.607C15.317 130.558 11.2246 132.149 7.23048 133.921C6.44252 134.266 5.70244 134.707 4.77628 135.182C8.44174 136.14 11.7953 137.017 15.2073 137.909C15.1894 139.172 14.7731 139.729 13.5952 139.494C12.8832 139.349 12.1639 139.192 11.4442 139.077C8.9676 138.71 6.49146 138.301 4.00173 138.025C2.4322 137.853 0.871129 137.809 0.406275 135.723C2.35553 129.622 4.3726 123.342 6.45539 116.85C7.20773 117.119 7.83587 117.346 8.51997 117.597C6.46861 122.933 3.95908 127.911 3.54167 133.809C5.90092 132.753 8.06434 131.728 10.2659 130.797C16.6519 128.122 22.9218 125.094 29.4786 122.921C35.9446 120.777 42.5734 118.966 49.4688 118.565C51.1413 118.462 52.8063 118.149 54.486 118.058C56.0899 117.978 57.7044 118.058 59.7423 118.071C62.8516 111.556 68.2989 106.775 74.7006 103.044C80.9918 99.378 87.3981 95.9081 95.2331 96.3353C95.5427 94.036 95.8141 91.6437 96.1881 89.2573C97.7904 78.8668 100.196 68.7487 106.203 59.9151C108.283 56.8625 110.728 54.0824 113.199 50.9244ZM96.5665 98.087C96.4799 99.374 96.3642 100.414 96.3387 101.468C96.1764 107.745 95.9505 114.026 97.1035 120.252C97.2721 121.2 97.4403 122.19 97.8642 123.039C98.8148 124.94 99.834 126.817 102.03 127.662C106.876 129.521 112.689 124.576 112.545 120.547C112.401 116.675 112.304 112.824 110.609 109.19C107.868 103.339 103.835 99.1664 96.5665 98.087ZM60.8018 120.073C59.5762 123.526 60.0775 126.827 61.4557 129.921C62.583 132.46 64.8013 134.173 67.2834 135.436C69.8578 136.743 72.7973 136.534 74.5229 134.834C74.9303 134.431 75.3948 133.69 75.2872 133.225C74.4812 129.616 73.8495 125.938 70.0607 123.897C67.1494 122.325 64.3622 120.557 60.8018 120.073Z" fill="#202124"></path>
                </svg>
            </figure>
        </div>
        </div>
    </>
  );
};

export default TestimonialSlider;
