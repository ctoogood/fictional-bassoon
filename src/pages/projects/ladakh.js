import React from "react"
import styled from 'styled-components'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Hero = styled.section `
margin:0;
    position:relative;
        margin-top:2rem;
        margin-bottom:5rem;
        background-color:white;
        height:40vh;
        min-height:300px;
        @media only screen and (min-width:720px) {
          height:75vh;
        }

    section {
        border-radius:5px;

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/ladakh/stakna-monastery-ladakh.jpg');
            background-size: cover;
            background-position: center;

            position:relative;
            height:100%;
            width:100%;

            @media only screen and (min-width:720px) {
              background-attachment:fixed;

            }

        
    }
    
    div {
            display:block;
            border:2px solid white;
            position:absolute;
            max-width:100%;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            padding:1rem;
    }

    h1 {
        font-family:Crimson Text;
        color:white;
        text-align:center;
        font-size:3rem;
        margin:0;
        line-height:0.7;
        padding:0;

        @media only screen and (min-width:720px) {
          font-size:5rem;
          padding:2rem;
        }

        
        span {
            opacity:0.8;
            margin:0;
            font-size:1rem;

            @media only screen and (min-width:720px) {
              font-size:2rem;
            }
        }
    }
`

const Main = styled.main `
    .project-text {
      text-align:center;

      h2 {
        font-family: Crimson Text;
        font-size:3rem;
      }

      p {
        font:1rem montserrat;
        line-height:1.5;
      }
    }

    .full-width-image {
      width:100%;
    }

    .half-width-image {
      @media only screen and (min-width:720px) {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding:2rem;

        img {
            margin:auto;
            display: block;
            width:60vw;
        }
    }
}

.left {
    grid-column: 1/3;
}

.right {
    grid-column:2/4;
}

.center {
    grid-column:2/3;
}
    }

    .triple-image-row {
      margin-bottom:2rem;
      width:100%;
      text-align:center;

      @media only screen and (min-width:720px) {
        display: flex;

        img {
            width:33.3%;
            height:33.3%;
            object-fit: cover;
            margin-right:0.5rem;

        }
    }

    }

    .triple-image-collage {
      @media only screen and (min-width:720px) {
          display: grid;
          grid-gap:0.5rem;
          grid-template-columns:1fr 1fr 1fr;
          grid-template-rows:1fr 1fr;
          margin-bottom:2rem;

          img {
            margin:0;
          }
  
          img:first-child {
              grid-column: 1/3;
              grid-row:1/3;
          }
      }
  }

  .image-grid {
    padding-top:3rem;
    padding-bottom:3rem;

    img {
        padding-top:2rem;
    }

    @media only screen and (min-width:920px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:2rem;
        padding: 3rem;
    }
    
}
`



const Ladakh = () => (
  <Layout>
    <SEO title="Ladakh" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Ladakh<br />
        <span>India</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Buddhist monasteries in Ladkah, India</h2>
            <p class="project-text-content">Ladakh is located in India's most northern state, Jammu & Kashmir. Ladakh is a mountainous region which includes parts of both the Himalayan and Karakoram mountain ranges. The population mostly live at an altitude of between 8,000ft and 14,000ft.
                <br /> These images focus on the Buddhist monasteries found throughout the landscape.
             </p>
        </article>

        <section class="project-images">

                <div class="triple-image-row">
                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/food-bowls-thiksey.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/food-bowls-thiksey.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/food-bowls-thiksey.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/food-bowls-thiksey.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/food-bowls-thiksey.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/food-bowls-thiksey.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="A row of food bowls during ritual" />

                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/boy-serving-tea-thiksey.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/boy-serving-tea-thiksey.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/boy-serving-tea-thiksey.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/boy-serving-tea-thiksey.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/boy-serving-tea-thiksey.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/boy-serving-tea-thiksey.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Young boy serving tea" />

                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/puja-scene-thiksey.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/puja-scene-thiksey.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/puja-scene-thiksey.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/puja-scene-thiksey.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/puja-scene-thiksey.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/puja-scene-thiksey.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Boys reading religious text" />
                </div>

            <div class="image-grid">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-wheel-spituk.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-wheel-spituk.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/prayer-wheel-spituk.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/prayer-wheel-spituk.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/prayer-wheel-spituk.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-wheel-spituk.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Prayer wheel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-room-entrance-ladakh.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-room-entrance-ladakh.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/prayer-room-entrance-ladakh.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/prayer-room-entrance-ladakh.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/prayer-room-entrance-ladakh.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-room-entrance-ladakh.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Door handle to prayer room" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-room-atitse.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-room-atitse.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/prayer-room-atitse.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/prayer-room-atitse.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/prayer-room-atitse.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-room-atitse.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Small buddha statues" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Mountain view and prayer flags" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-spituk-ladakh.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-spituk-ladakh.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/monk-spituk-ladakh.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/monk-spituk-ladakh.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/monk-spituk-ladakh.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-spituk-ladakh.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk holding prayer beads" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-matho-monastery-ladakh.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-matho-monastery-ladakh.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/monk-matho-monastery-ladakh.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/monk-matho-monastery-ladakh.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/monk-matho-monastery-ladakh.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-matho-monastery-ladakh.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk in monastery grounds" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-rhizong.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-rhizong.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/monk-rhizong.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/monk-rhizong.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/monk-rhizong.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-rhizong.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk sat on pile of wood" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-hemis.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-hemis.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/monk-hemis.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/monk-hemis.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/monk-hemis.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-hemis.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk in front of painted wall" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-playing-cricket-rhizong.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-playing-cricket-rhizong.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/monk-playing-cricket-rhizong.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/monk-playing-cricket-rhizong.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/monk-playing-cricket-rhizong.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-playing-cricket-rhizong.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk playing cricket" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-rhizong-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-rhizong-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/monk-rhizong-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/monk-rhizong-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/monk-rhizong-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/monk-rhizong-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk sat infront of stove" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/inscribed-stones-thiksey.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/inscribed-stones-thiksey.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/inscribed-stones-thiksey.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/inscribed-stones-thiksey.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/inscribed-stones-thiksey.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/inscribed-stones-thiksey.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Inscribed stones" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/buddha-statue-thiksey.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/buddha-statue-thiksey.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/buddha-statue-thiksey.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/buddha-statue-thiksey.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/buddha-statue-thiksey.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/buddha-statue-thiksey.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Large gold buddha statue" />
                
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dalai-lama-stakna.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dalai-lama-stakna.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dalai-lama-stakna.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dalai-lama-stakna.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dalai-lama-stakna.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dalai-lama-stakna.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Portrait of the Dalai Lama" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/buddha-statue-hemis.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/buddha-statue-hemis.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/buddha-statue-hemis.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/buddha-statue-hemis.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/buddha-statue-hemis.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/buddha-statue-hemis.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Buddha statue in a snowy landscape" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/cook-rhizong.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/cook-rhizong.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/cook-rhizong.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/cook-rhizong.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/cook-rhizong.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/cook-rhizong.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Cook making bread at Rhizong monastery" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dosmoche-festival-scene.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dosmoche-festival-scene.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dosmoche-festival-scene.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Young monk at festival" />

                 <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dosmoche-festival-scene-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dosmoche-festival-scene-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dosmoche-festival-scene-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monks sat watching festival" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dosmoche-festival-scene-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dosmoche-festival-scene-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dosmoche-festival-scene-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Masked dancer" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dosmoche-festival-scene-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dosmoche-festival-scene-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dosmoche-festival-scene-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Monk sat watching festival" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-5.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-5.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dosmoche-festival-scene-5.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dosmoche-festival-scene-5.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dosmoche-festival-scene-5.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-scene-5.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Young boy in costume" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-dancing-ladakh.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-dancing-ladakh.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/dosmoche-festival-dancing-ladakh.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/dosmoche-festival-dancing-ladakh.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/dosmoche-festival-dancing-ladakh.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/dosmoche-festival-dancing-ladakh.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Dancers at buddhist festival" />

                

            </div>

            <div class="triple-image-collage">
                    <img class="lazy"
                        src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh-2.jpg"
                        data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh-2.jpg"
                        srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-flags-mountain-scene-ladakh-2.jpg 320w"
                        sizes="(min-width: 720px) 67vw, 100vw"
                        alt="Mountain scene through prayer flags" />
    
                    <img class="lazy"
                        src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-wheels-stakna.jpg"
                        data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-wheels-stakna.jpg"
                        srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/prayer-wheels-stakna.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/prayer-wheels-stakna.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/prayer-wheels-stakna.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/prayer-wheels-stakna.jpg 320w"
                        sizes="(min-width: 720px) 33vw, 100vw"
                        alt="Row of prayer wheels" />
    
                    <img class="lazy"
                        src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/mountain-view-spituk.jpg"
                        data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/mountain-view-spituk.jpg"
                        srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/ladakh/mountain-view-spituk.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/ladakh/mountain-view-spituk.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/ladakh/mountain-view-spituk.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/ladakh/mountain-view-spituk.jpg 320w"
                        sizes="(min-width: 720px) 33vw, 100vw"
                        alt="Snowy mountain peaks" />
            </div>

        </section>

        </Main>
    
  </Layout>
)

export default Ladakh