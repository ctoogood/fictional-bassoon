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
        min-height:500px;
        @media only screen and (min-width:720px) {
          height:75vh;
        }

    section {
        border-radius:5px;

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/shetlandlandscape/hog-of-the-ness-and-horse-island');
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



const ShetlandLandscapes = () => (
  <Layout>
    <SEO title="Shetland Landscapes" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>LANDSCAPES<br />
        <span>SHETLAND ISLANDS</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Shetland Landscapes</h2>
            <hr />
            <p class="project-text-content">
                    Scenic landscapes are not hard to come by in Shetland. The coastline, hills, lochs and even the towns and villages can have a wonderful aesthetic. These landscapes are all enhanced by the quality of light you experience at 60° north, especially in Winter when the sun is very low in the sky.
                   <br /> I find Shetland's coastal scenery immensely dramatic. There are over 1000 miles of coastline, and much of this is very exposed to the harshest of elements. Such conditions have created some stunning rock formations and dramatic cliffscapes.
             </p>
             <hr />
        </article>

        <section class="project-images">

            <div class="triple-image-collage">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape.jpg 320w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Lighthouse on hill" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-4.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Natural arch in cliff" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/westerwick-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/westerwick-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/westerwick-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/westerwick-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/westerwick-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/westerwick-landscape.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Coastal view" />

            </div>
            
            <div class="image-grid">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/waves-crashing-burra.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/waves-crashing-burra.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/waves-crashing-burra.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/waves-crashing-burra.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/waves-crashing-burra.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/waves-crashing-burra.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Waves crashing on coast" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/wave-crashing-scat-ness-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/wave-crashing-scat-ness-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/wave-crashing-scat-ness-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/wave-crashing-scat-ness-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/wave-crashing-scat-ness-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/wave-crashing-scat-ness-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Wave crashing on a rock at sea" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/steis-point-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/steis-point-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/steis-point-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/steis-point-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/steis-point-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/steis-point-landscape.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Cliff scene" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sumburgh-head-landscape-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Stormy seas" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/leea-geo-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/leea-geo-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/leea-geo-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/leea-geo-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/leea-geo-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/leea-geo-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Cliff Scene" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/quendale-beach-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/quendale-beach-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/quendale-beach-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/quendale-beach-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/quendale-beach-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/quendale-beach-landscape.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Waves at beach" />

            </div>

        <div class="full-width-image">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/clingra-stack-hermaness-unst-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/clingra-stack-hermaness-unst-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/clingra-stack-hermaness-unst-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/clingra-stack-hermaness-unst-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/clingra-stack-hermaness-unst-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/clingra-stack-hermaness-unst-2.jpg 320w"
                    sizes="100vw"
                    alt="Gannets on a cliff" />

            </div>

            <div class="image-grid">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/siggar-ness-view-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/siggar-ness-view-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/siggar-ness-view-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/siggar-ness-view-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/siggar-ness-view-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/siggar-ness-view-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Stormy seas and high cliffs" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/point-of-stakka-houss-ness-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Cliff scene" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sheep-at-houss-ness.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sheep-at-houss-ness.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/sheep-at-houss-ness.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/sheep-at-houss-ness.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/sheep-at-houss-ness.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/sheep-at-houss-ness.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Sheep at sunset in field" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/dore-holm-large-waves.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/dore-holm-large-waves.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/dore-holm-large-waves.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/dore-holm-large-waves.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/dore-holm-large-waves.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/dore-holm-large-waves.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Large waves crashing over natural arch" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/lang-ayre-beach-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/lang-ayre-beach-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/lang-ayre-beach-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/lang-ayre-beach-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/lang-ayre-beach-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/lang-ayre-beach-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Red sandy beach" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/burra-landscape-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/burra-landscape-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/burra-landscape-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/burra-landscape-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/burra-landscape-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/burra-landscape-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Stormy seas" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/foula-evening-view-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/foula-evening-view-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/foula-evening-view-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/foula-evening-view-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/foula-evening-view-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/foula-evening-view-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fishing vessel infront of island" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/burra-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/burra-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/burra-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/burra-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/burra-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/burra-landscape.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Sunset cliff view" />
            </div>

            

            <div class="triple-image-row">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/st-ninians-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/st-ninians-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/st-ninians-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/st-ninians-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/st-ninians-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/st-ninians-landscape.jpg 320w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Tombolo beach at sunset" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/foula-evening-view.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/foula-evening-view.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/foula-evening-view.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/foula-evening-view.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/foula-evening-view.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/foula-evening-view.jpg 320w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Island on horizon at sunset" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/lerwick-harbour-landscape.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/lerwick-harbour-landscape.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/shetlandlandscape/lerwick-harbour-landscape.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/shetlandlandscape/lerwick-harbour-landscape.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/shetlandlandscape/lerwick-harbour-landscape.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/shetlandlandscape/lerwick-harbour-landscape.jpg 320w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Lerwick harbour landscape" />

            </div>

        </section>

        </Main>
    
  </Layout>
)

export default ShetlandLandscapes