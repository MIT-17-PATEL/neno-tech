"use client"
import GalleryData from '@/assets/jsonData/widgets/GalleryWidgetData.json'
import Link from 'next/link';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GalleryWidget = () => {
    return (
        <>
            <div
                className="sidebar-item gallery p-4 rounded-4 mb-4"
                style={{
                    background: "rgba(255, 255, 255, 0.035)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.25)"
                }}
            >
                <h4
                    className="title fw-bold mb-3 pb-2"
                    style={{
                        color: "#ffffff",
                        fontSize: "17px",
                        letterSpacing: "-0.01em",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                >
                    Gallery
                </h4>
                <div className="sidebar-info">
                    <ul className="p-0 m-0 list-unstyled d-flex flex-wrap gap-2">
                        <PhotoProvider
                            speed={() => 800}
                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                        >
                            {GalleryData.map(gallery =>
                                <li key={gallery.id} className='widget-gallery' style={{ width: "calc(33.333% - 6px)", margin: 0 }}>
                                    <div className="single position-relative rounded-3 overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                        <Image
                                            src={`/assets/img/blog/${gallery.thumb}`}
                                            alt="Gallery Preview"
                                            width={400}
                                            height={400}
                                            className="w-100 h-100"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <Link href="#" scroll={false} className='widget-link'>
                                            <PhotoView src={`/assets/img/blog/${gallery.thumb}`}>
                                                <span className="widget-icon">
                                                    <i className="fas fa-plus"></i>
                                                </span>
                                            </PhotoView>
                                        </Link>
                                    </div>
                                </li>
                            )}
                        </PhotoProvider>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default GalleryWidget;
