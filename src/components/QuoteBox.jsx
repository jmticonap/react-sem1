import { React, useState, useEffect } from 'react';
import './QuoteBox.css'
import QuoteText from './QuoteText';
import quotes from './quotes.json'

const QuoteBox = () => {
    const randomIndexQuote = () => {
        return parseInt( Math.random()*quotes.length-1 )
    }

    const [indexQuote, setIndexQuote] = useState( randomIndexQuote() )

    const randomColor = () => {
        const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
        const idx = parseInt( Math.random()*colors.length-1 )
        return colors[ idx ]
    }
    const [color, setColor] = useState( randomColor() )
    
    const nextQuote = () => {
        setIndexQuote(randomIndexQuote())

        setColor( randomColor() )
    }

    useEffect(()=>{
        document.body.style.backgroundColor = color
    },[indexQuote])

    return (
        <article className='quotes-card-container'>
            <QuoteText quoteText={quotes[indexQuote]['quote']} color={color} />
            <div className='author-quote'>
                <p style={{color:color}}><i>{quotes[indexQuote]['author']}</i></p>
            </div>
            <div className='next-quote'>
                <button onClick={nextQuote} style={{backgroundColor:color}}>
                    <i className='bx bx-chevron-right' ></i>
                </button>
            </div>
        </article>
    );
};

export default QuoteBox;