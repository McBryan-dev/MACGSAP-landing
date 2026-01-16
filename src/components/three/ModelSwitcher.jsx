import { useRef } from 'react';
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import { PresentationControls } from '@react-three/drei';
import gsap from 'gsap';



const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.transverse((child) => {
        if(child.isMesh) {
            child.material.transport = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION})
        }
    })
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05;
    
    const controlConfig = {
        snap: true,
        speed: 2,
        zoom: 1,
        // polar: [-Math.PI, Math.PI],
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 0, friction: 20}
    }

    return (
        <>
            <PresentationControls {...controlConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            {/* <PresentationControls {...controlConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls> */}
        </>
    )
}

export default ModelSwitcher;