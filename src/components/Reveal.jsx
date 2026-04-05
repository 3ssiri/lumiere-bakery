import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({
    as = 'div',
    children,
    className = '',
    delay = 0,
    distance = 32,
    threshold = 0.2,
    ...rest
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold]);

    return React.createElement(
        as,
        {
            ref,
            ...rest,
            className: `reveal-element${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`,
            style: {
                '--reveal-delay': `${delay}ms`,
                '--reveal-distance': `${distance}px`
            }
        },
        children
    );
};

export default Reveal;
