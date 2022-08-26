import React from 'react';

const QuoteText = ({quoteText, color}) => {
    return (
        <>
            <div className='f-quote'>
                <i className='bx bxs-quote-left' style={{ color: color }} ></i>
            </div>
            <div className='text-quote'>
                <p style={{ color: color }}>{quoteText}</p>
            </div>
        </>
    );
};

export default QuoteText;