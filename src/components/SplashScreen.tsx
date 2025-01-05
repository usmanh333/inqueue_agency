import { useState, useEffect } from 'react';

const SplashScreen = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => {
                setShowSplash(false);
            }, 3700);
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);

    useEffect(() => {
        if (videoEnded) {
            setTimeout(() => setShowSplash(false), 3700);
        }
    }, [videoEnded]);

    if (!showSplash) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <video
                src="/videos/Loading_Screen.mp4"
                autoPlay
                muted
                loop={!videoEnded}
                className="w-full h-full object-cover sm:object-contain"
                onEnded={() => setVideoEnded(true)}
            ></video>
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 50;
                }

                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 768px) {
                    video {
                        object-fit: contain;
                    }
                }

                @media (orientation: portrait) {
                    video {
                        object-fit: contain;
                    }
                }

                @media (orientation: landscape) {
                    video {
                        object-fit: cover;
                    }
                }
            `}</style>
        </div>
    );
};

export default SplashScreen;
