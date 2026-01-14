import { Environment, Lightformer } from '@react-three/drei';
import React from 'react';

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer />
                </group>
            </Environment>
        </group>
    )
}

export default StudioLights;