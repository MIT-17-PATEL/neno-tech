import FooterV2 from "../footer/FooterV2";
import { AmbientBackgroundOrbs } from "../animation/FramerMotionSystem";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <div className="bg-dark text-light inner-page-dark-canvas min-vh-100 position-relative">
            {/* Ambient Radial Glow Accents with slow pulsing/floating animation */}
            <AmbientBackgroundOrbs />

            <main className="position-relative inner-page-main" style={{ zIndex: 1, paddingTop: "90px" }}>
                {children}
            </main>
            <FooterV2 sectionClass="bg-dark text-light" />
        </div>
    );
};

export default LayoutV1;
