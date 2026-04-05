import React, { useEffect, useState } from 'react';

const DesktopCursor = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [cursorModule, setCursorModule] = useState(null);

    useEffect(() => {
        const pointerQuery = window.matchMedia('(pointer: fine)');
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateState = () => {
            setIsEnabled(pointerQuery.matches && !motionQuery.matches);
        };

        updateState();

        pointerQuery.addEventListener('change', updateState);
        motionQuery.addEventListener('change', updateState);

        return () => {
            pointerQuery.removeEventListener('change', updateState);
            motionQuery.removeEventListener('change', updateState);
        };
    }, []);

    useEffect(() => {
        if (!isEnabled) {
            return undefined;
        }

        let isMounted = true;

        import('react-animated-cursor').then((module) => {
            if (isMounted) {
                setCursorModule(() => module.default);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [isEnabled]);

    if (!isEnabled || !cursorModule) {
        return null;
    }

    const AnimatedCursor = cursorModule;

    return (
        <AnimatedCursor
            color="212, 163, 115"
            dotSize={6}
            outlineSize={22}
            outlineScale={1.9}
            dotScale={0.8}
            outlineAlpha={0.1}
        />
    );
};

export default DesktopCursor;
