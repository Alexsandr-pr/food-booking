"use client"
import React, { useState } from 'react';

interface DescriptionProps {
    description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 380; 

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedText = description.length > MAX_LENGTH
        ? description.slice(0, MAX_LENGTH) + '...'
        : description;

    const textToShow = isExpanded ? description : truncatedText;

    return (
        <div className="text-sm text-gray-700 w-full">
            <span
                className="inline"
                dangerouslySetInnerHTML={{ __html: textToShow }}
            />
            {description.length > MAX_LENGTH && (
                <button
                    onClick={handleToggle}
                    className="inline ml-1 text-primary hover:text-primary/80 focus:outline-none"
                >
                    <strong>{isExpanded ? 'Hide' : 'Read More'}</strong>
                </button>
            )}
        </div>
    );
};

export default Description;
