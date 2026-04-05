import React, { useEffect, useState } from 'react';

const particleOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 40,
    detectRetina: true,
    particles: {
        number: {
            value: 10,
            density: { enable: true, area: 1200 }
        },
        color: {
            value: ['#D4A373', '#CCD5AE', '#E9EDC9']
        },
        opacity: {
            value: 0.14
        },
        size: {
            value: { min: 1, max: 2.4 }
        },
        move: {
            enable: true,
            speed: 0.16,
            direction: 'none',
            outModes: {
                default: 'out'
            }
        },
        links: {
            enable: false
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: false
            },
            onClick: {
                enable: false
            },
            resize: true
        }
    }
};

const AmbientParticles = () => {
    const [isReady, setIsReady] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [particlesModule, setParticlesModule] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const pointerQuery = window.matchMedia('(pointer: fine)');
        const updatePreference = () => {
            setIsEnabled(!mediaQuery.matches && pointerQuery.matches);
        };

        updatePreference();

        mediaQuery.addEventListener('change', updatePreference);
        pointerQuery.addEventListener('change', updatePreference);

        return () => {
            mediaQuery.removeEventListener('change', updatePreference);
            pointerQuery.removeEventListener('change', updatePreference);
        };
    }, []);

    useEffect(() => {
        if (!isEnabled) {
            return undefined;
        }

        let isMounted = true;

        Promise.all([
            import('@tsparticles/react'),
            import('@tsparticles/slim')
        ]).then(async ([reactModule, slimModule]) => {
            if (!isMounted) {
                return;
            }

            await reactModule.initParticlesEngine(async (engine) => {
                await slimModule.loadSlim(engine);
            });

            if (isMounted) {
                setParticlesModule(() => reactModule.default);
                setIsReady(true);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [isEnabled]);

    if (!isEnabled || !isReady || !particlesModule) {
        return null;
    }

    const ParticlesComponent = particlesModule;

    return <ParticlesComponent className="ambient-particles" options={particleOptions} />;
};

export default AmbientParticles;
