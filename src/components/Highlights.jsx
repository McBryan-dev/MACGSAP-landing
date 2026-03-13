import React from 'react';
import {useGSAP} from '@gsap/react';
import {useMediaQuery} from 'react-responsive';
import gsap from 'gsap';

const Highlights = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

    useGSAP(() => {
        gsap.to(['.left-ccolumn', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top top'
            },
            y: 0,
            opacccity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        })
    })

    return (
        <section id="highlights">
            <h2>There's neve been a better time to upgrade</h2>
            <h3>Here's what you get with the brand new M4 chip</h3>
 
            <div className="masonry">
                <div className='left-column'>

                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Fly through demanding tasks up to 9.8 times faster.</p>
                    </div>

                    <div>
                        <img src="/sun.png" alt="Sun" />

                        <p>A stunning <br />
                        Liquid Retina XDR <br />
                        display.</p>
                    </div>
                </div>

                <div className='right-column'>

                    <div className='apple-gradient'>
                        <img src="/ai.png" alt="AI" />
                        <p>Built for <br /> 
                        <span>Apple Intelligence</span></p>
                    </div>

                    <div>
                        <img src="/battery.png" alt="Battery" />
                        
                        <p>Up to 
                            <span className='green-gradient'>{' '}14 hours{''}
                             more battery life. <span className='text-dark-100'>{' '}(Up to 24 hours total.)</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;