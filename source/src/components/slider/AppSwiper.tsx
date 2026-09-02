"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    Autoplay,
    Navigation,
    Pagination,
    Keyboard,
    FreeMode,
} from "swiper/modules";

import type { SwiperProps } from "swiper/react";


interface SlideItem {
    id: string | number;
    content: ReactNode;
}

interface AppSwiperProps extends SwiperProps {
    items: SlideItem[];

    autoplayModule?: boolean;
    navigationModule?: boolean;
    paginationModule?: boolean;
    keyboardModule?: boolean;
    freeModeModule?: boolean;
}

const AppSwiper = ({
    items,

    autoplayModule,
    navigationModule,
    paginationModule,
    keyboardModule,
    freeModeModule,

    ...props
}: AppSwiperProps) => {
    const modules = [];

    if (autoplayModule) modules.push(Autoplay);
    if (navigationModule) modules.push(Navigation);
    if (paginationModule) modules.push(Pagination);
    if (keyboardModule) modules.push(Keyboard);
    if (freeModeModule) modules.push(FreeMode);

    return (
        <Swiper modules={modules} {...props}>
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    {item.content}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AppSwiper;