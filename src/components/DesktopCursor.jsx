import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

const DesktopCursor = () => {
    const [isEnabled, setIsEnabled] = useState(false);

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

    if (!isEnabled) {
        return null;
    }

    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={34}
            innerScale={0.9}
            outerScale={1.6}
            outerAlpha={0.18}
            innerStyle={{
                backgroundColor: '#D4A373',
                mixBlendMode: 'difference',
                zIndex: 1400
            }}
            outerStyle={{
                border: '1px solid rgba(212, 163, 115, 0.55)',
                backgroundColor: 'rgba(212, 163, 115, 0.12)',
                zIndex: 1400
            }}
            clickables={[
                'a',
                'button',
                'input',
                'textarea',
                'select',
                '[role="button"]',
                '.menu-tab',
                '.floating-contact-trigger'
            ]}
        />
    );
};

export default DesktopCursor;
