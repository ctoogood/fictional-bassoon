import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section `
    margin:0;
    position:relative;

    @media only screen and (min-width:720px) {
        margin-top:2rem;
        margin-bottom:5rem;
        background-color:white;
        height:75vh;
        

    }


    section {
        border-radius:5px;

        @media only screen and (min-width:720px) {
            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/image/upload/v1536524675/calumtoogood/main/fisherman-ties-cod-end.jpg');
            background-size: cover;
            background-position: center;
            background-attachment:fixed;

            position:relative;
            height:100%;
            width:100%;
    
        }
        

    }
    

    div {

        display:none;
        
        @media only screen and (min-width:720px) {
            display:block;
            border:2px solid white;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            padding:1rem;
        }
    }

    h1 {
        font-family:Josefin Sans;
        font-weight:400;
        font-size:5rem;
        color:white;
        text-align:center;
        line-height:1.3;
        
        span {
            font-weight:300;
        }
    }
`


const Hero = () => (
    <HeroContainer>
        <section>
    
        </section>
        <div>
            <h1>CALUM<br />TOOGOOD <br /><span>PHOTOGRAPHY</span></h1>
        </div>
        

    </HeroContainer>
  )
  
  export default Hero