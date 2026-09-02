"use client";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ScrollUpBtn from './ScrollUpBtn';

const Dependency = () => {

    useEffect(() => {

        // Dynamically import Bootstrap JS to avoid SSR issues
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .catch((err) => {
                console.error('Bootstrap loading error:', err);
            });

    }, []);

    return (
        <>
            <ToastContainer />
            <ScrollUpBtn />
        </>
    );
};

export default Dependency;