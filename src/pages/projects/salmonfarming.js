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
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/salmonfarming/worker-holding-scottish-salmon.jpg');
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
        }
    }

    }

    .triple-image-collage {
      @media only screen and (min-width:720px) {
          display: grid;
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



const SalmonFarming = () => (
  <Layout>
    <SEO title="Salmon Farming" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Salmon Farming<br />
        <span>SHETLAND ISLANDS</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Salmon Farming</h2>
            <hr />
            <p class="project-text-content">The unmistakable pattern of salmon cages in the sheltered voes and archipelagos around Shetland is hard to miss. The aquaculture practice behind these features has over the last few decades become a major player in the local economy. Salmon farming in Shetland is now worth over £100 million a year and provides around 300 jobs to the isles.
                <br />This series of images takes a closer look at salmon farming in the Shetland Islands.
             </p>
             <hr />
        </article>

        <section class="project-images">

                <div class="triple-image-row">
                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/worker-catching-salmon.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/worker-catching-salmon.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/worker-catching-salmon.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/worker-catching-salmon.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/worker-catching-salmon.jpg 320w"
                            sizes="(min-width: 720px) 33.3vw, 100vw"
                            alt="Salmon farm worker catching a salmon" />

                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming.jpg 320w"
                            sizes="(min-width: 720px) 33.3vw, 100vw"
                            alt="Workers passing a salmon in a net" />

                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-5.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-5.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-5.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-5.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-5.jpg 320w"
                            sizes="(min-width: 720px) 33.3vw, 100vw"
                            alt="Salmon farm worker places salmon in a container of water" />
                </div>

            <div class="image-grid">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-feed-carrier-lifting.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/salmon-feed-carrier-lifting.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/salmon-feed-carrier-lifting.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/salmon-feed-carrier-lifting.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-feed-carrier-lifting.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Deck view of a salmon feed carrier" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-feed-carrier-worker.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/salmon-feed-carrier-worker.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/salmon-feed-carrier-worker.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/salmon-feed-carrier-worker.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-feed-carrier-worker.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Salmon feed carrier crewman operating winch" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Salmon farm workers lifting net around cage" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-boat-approaching-cage.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/salmon-boat-approaching-cage.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/salmon-boat-approaching-cage.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/salmon-boat-approaching-cage.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-boat-approaching-cage.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Salmon workboat approaching cage in early morning light" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Hydrogen peroxide is pumped into a salmon cage" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker catches a salmon" />

            </div>

            <div class="full-width-image">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-2.jpg 320w"
                    sizes="100vw"
                    alt="Worker holds a salmon" />
            </div>

            <div class="image-grid">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-boat.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/salmon-boat.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/salmon-boat.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/salmon-boat.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-boat.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Salmon workboat at sea" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker feeding salmon" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-6.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-6.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-6.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-6.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-6.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker catches a salmon" />

            </div>
            
            <div class="triple-image-collage">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/salmon-boat-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/salmon-boat-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/salmon-boat-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/salmon-boat-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Salmon farm boat at sea" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming-2.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Worker raising perimeter netting of a salmon cage" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/salmonfarming/lice-treatment-salmon-farming.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Worker tying netting" />

            </div>

            

        </section>

        </Main>
    
  </Layout>
)

export default SalmonFarming