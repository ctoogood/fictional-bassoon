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
        @media only screen and (min-width:720px) {
            min-height:500px;
          height:75vh;
        }

    section {
        border-radius:5px;

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/wod/well-of-death-motorcyclist');
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



const Wod = () => (
  <Layout>
    <SEO title="Well Of Death" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>The Well of Death<br />
        <span>India</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Well of Death</h2>
            <p class="project-text-content">
                    The well of death is a popular event in India often displayed during large festivals throughout the year. Held in a makeshift cylindrical structure, around 30ft in diameter, cars and motorcycles are driven around the walls at great speed. The drivers perform stunts whilst driving along the vertical walls and collect money from the audience as they go past. The audience are positioned along the top of the walls of the structure. From there they can gaze down at the riders.
                    
                   <br /> These images were taken during the festival of Magh Mela in Allahabad, 2014.
                                 </p>
        </article>

        <section class="project-images">

            <div class="triple-image-collage">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-ticket-vendor.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-ticket-vendor.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-ticket-vendor.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-ticket-vendor.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-ticket-vendor.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-ticket-vendor.jpg 320w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Ticket vendor" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-worker.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-worker.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-worker.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-worker.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-worker.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-worker.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Worker at gate" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-stadium.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-stadium.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-stadium.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-stadium.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-stadium.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-stadium.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Stadium and spectators" />

            </div>
            
            <div class="image-grid">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-cars-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-cars-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-cars-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-cars-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-cars-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-cars-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Car driver in well of death" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-motorcyclist-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-motorcyclist-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-motorcyclist-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Motorcyclist in well of death" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-motorcyclist-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-motorcyclist-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-motorcyclist-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Motorcyclist in well of death" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-1.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-1.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-motorcyclist-1.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-motorcyclist-1.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-motorcyclist-1.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-motorcyclist-1.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Motorcyclist at bottom of the well" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-spectator-money.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-spectator-money.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-spectator-money.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-spectator-money.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-spectator-money.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-spectator-money.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Spectator handing money to a driver" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-driver-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-driver-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-driver-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-driver-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-driver-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-driver-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Driver poses with car" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-driver.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-driver.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-driver.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-driver.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-driver.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-driver.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Driver gestures to the audience" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/pushing-motorcycle-well-of-death.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/pushing-motorcycle-well-of-death.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/pushing-motorcycle-well-of-death.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/pushing-motorcycle-well-of-death.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/pushing-motorcycle-well-of-death.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/pushing-motorcycle-well-of-death.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Motorcycle being push started" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-cars.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-cars.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-cars.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-cars.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-cars.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-cars.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Three cars drive around the well" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-car.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-car.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wod/well-of-death-car.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/wod/well-of-death-car.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wod/well-of-death-car.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wod/well-of-death-car.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Damaged car" />

            </div>

        </section>

        </Main>
    
  </Layout>
)

export default Wod