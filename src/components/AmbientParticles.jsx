import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const particleOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
        number: {
            value: 20,
            density: { enable: true, area: 900 }
        },
        color: {
            value: ['#D4A373', '#CCD5AE', '#E9EDC9']
        },
        opacity: {
            value: 0.28
        },
        size: {
            value: { min: 1.5, max: 4 }
        },
        move: {
            enable: true,
            speed: 0.45,
            direction: 'none',
            outModes: {
                default: 'out'
            }
        },
        links: {
            enable: true,
            distance: 120,
            color: '#D4A373',
            opacity: 0.12,
            width: 1
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

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setIsReady(true));

        return undefined;
    }, [isEnabled]);

    if (!isEnabled || !isReady) {
        return null;
    }

    return <Particles className="ambient-particles" options={particleOptions} />;
};

export default AmbientParticles;
