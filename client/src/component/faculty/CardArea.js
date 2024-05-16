import React from 'react';
import '../component styling/CardArea.css'

const CardArea = () => {
    return (
        <>
        <div class="box-area">
        <div class="single-box">
            <div class="img-area"></div>
            <div class="img-text">
                <span class="header-text"><strong>Kay Ferdenad</strong></span>
                <div class="line"></div>
                <h3>Designer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. copesge shskq?</p>
            </div>
        </div>
        <div class="single-box">
            <div class="img-area"></div>
            <div class="img-text">
                <span class="header-text"><strong>David Rayan</strong></span>
                <div class="line"></div>
                <h3>Devloper</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. copesge shskq?</p>
            </div>
        </div>
        <div class="single-box">
            <div class="img-area"></div>
            <div class="img-text">
                <span class="header-text"><strong>Handan fashli</strong></span>
                <div class="line"></div>
                <h3>Photographer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. copesge shskq?</p>
            </div>
        </div>
    </div>
        </>
    );
}

export default CardArea;