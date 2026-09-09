import FooterV2 from "../footer/FooterV2";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <div className="bg-dark text-light inner-page-dark-canvas min-vh-100 position-relative">
            {/* Ambient Radial Glow Accents matching homepage */}
            <div className="page-ambient-glow page-glow-blue" aria-hidden="true" />
            <div className="page-ambient-glow page-glow-purple" aria-hidden="true" />
            <div className="page-ambient-glow page-glow-cyan" aria-hidden="true" />

            <main className="position-relative inner-page-main" style={{ zIndex: 1, paddingTop: "90px" }}>
                {children}
            </main>
            <FooterV2 sectionClass="bg-dark text-light" />
        </div>
    );
};

export default LayoutV1;
