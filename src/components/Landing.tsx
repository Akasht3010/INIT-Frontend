import React from 'react'
import { HeroHighlight, Highlight } from './ui/hero-highlight'

const Landing = () => {
    return (
        <div className="flex h-screen">
            {/* Left side - HeroHighlight */}
            <div className="flex-1 flex items-center justify-center">
                <HeroHighlight className="max-w-xl text-white w-full">
                    <div className="flex flex-col items-start text-left w-full">
                        {/* Title Row */}
                        <div className="flex flex-wrap items-baseline">
                            <p className="text-4xl font-bold mr-2">
                                <Highlight>AI-Powered</Highlight> Interview
                            </p>
                            <p className="text-4xl font-bold">Revolution</p>
                        </div>
                        {/* Description */}
                        <p className="text-white text-base mt-1">
                            Transform your hiring process with our advanced AI interview platform that delivers accurate candidate assessments and streamlines recruitment.
                        </p>
                    </div>
                </HeroHighlight>
            </div>

            {/* Right side - Hello text */}
            <div className="flex-1 flex items-center justify-center">
                <p className="text-white text-4xl font-bold text-center">Image Here</p>
            </div>
        </div>
    )
}

export default Landing
