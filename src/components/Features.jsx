import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import StudioLights from './three/StudioLights.jsx';
import { features, featureSequence } from '../constants/index.js';
import clsx from 'clsx';
import {Suspense, useRef} from 'react';
import MacbookModel from './models/Macbook';
import {useMediaQuery} from 'react-responsive';
import {Html} from '@react-three/drei';
import useMacbookStore from '../store/index.js';

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'})
    const {setTexture} =useMacbookStore()

    useEffect(() => {
        featureSequence.forEach((feature) => {
            const v = document.createElement('video');

            Object.assign(v, {
                src: feature.viedoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous'
            })
        })
    }, [])

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new {""}
                <span className="text-primary">
                    Light
                </span>{""}
            </h2>

            <Canvas id="f-canvas" camera={{}}>
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {
                    features.map((feature, index) => (
                        <div className={clsx('box', `box${index + 1}`, feature.styles)}>
                            {feature.text }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features;