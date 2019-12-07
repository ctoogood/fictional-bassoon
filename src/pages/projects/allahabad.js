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
                url('https://res.cloudinary.com/dhat0b0ey/image/upload/v1540139015/calumtoogood/projects/allahabad/railway-attendant-allahabad.jpg');
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



const Allahabad = () => (
  <Layout>
    <SEO title="Allahabad" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Allahabad<br />
        <span>India</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Allahabad, India</h2>
            <p class="project-text-content">Allahabad, also known as Prayag, is a city in the northern state of Uttar Pradesh in India. The city regularly hosts cultural festivals such as Magh Mela and Kumbh Mela along the shoreline of the Sangam, where the Yamuna and Ganges rivers meet. It is considered a very holy location by the Hindu faith.
                <br /> These images show the everyday life which I encountered as I wandered throughout the city.  </p>
        </article>

        <section class="project-images">
           
            <div class="triple-image-row">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/youths-on-bicycles-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/youths-on-bicycles-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/youths-on-bicycles-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/youths-on-bicycles-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/youths-on-bicycles-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/youths-on-bicycles-allahabad.jpg 2048w"
                    sizes="(min-width:720px) 33.3vw, 100vw"
                    alt="Two boys on bicycles"
                />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/temple-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/temple-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/temple-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/temple-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/temple-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/temple-allahabad.jpg 2048w"
                    sizes="(min-width:720px) 33.3vw, 100vw"
                    alt="Indian temple"
                />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-3.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/food-vendor-allahabad-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/food-vendor-allahabad-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/food-vendor-allahabad-3.jpg 2048w"
                    sizes="(min-width:720px) 33.3vw, 100vw"
                    alt="Man selling food"
                />
            </div>

            <div class="image-grid">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/tuk-tuk-bicycles.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/tuk-tuk-bicycles.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/tuk-tuk-bicycles.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/tuk-tuk-bicycles.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/tuk-tuk-bicycles.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/tuk-tuk-bicycles.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Bicycles outside gun shop"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/man-with-goats-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/man-with-goats-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/man-with-goats-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/man-with-goats-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/man-with-goats-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/man-with-goats-allahabad.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man with goats"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-4.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/food-vendor-allahabad-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/food-vendor-allahabad-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/food-vendor-allahabad-4.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man selling food"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/street-scene-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/street-scene-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/street-scene-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/street-scene-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/street-scene-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/street-scene-allahabad.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Motorcycle and cow in street"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/banana-seller-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/banana-seller-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/banana-seller-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/banana-seller-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/banana-seller-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/banana-seller-allahabad.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man selling bananas"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/bread-seller-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/bread-seller-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/bread-seller-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/bread-seller-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/bread-seller-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/bread-seller-allahabad.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man making flat bread"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/making-bread-on-street-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/making-bread-on-street-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/making-bread-on-street-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/making-bread-on-street-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/making-bread-on-street-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/making-bread-on-street-allahabad.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man making bread in the street"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-1.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-1.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-1.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/food-vendor-allahabad-1.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/food-vendor-allahabad-1.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/food-vendor-allahabad-1.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man selling food from stall"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/boats-on-the-sangam.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/boats-on-the-sangam.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/boats-on-the-sangam.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/boats-on-the-sangam.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/boats-on-the-sangam.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/boats-on-the-sangam.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Boats on the sangam"
                />

                <img  class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/arches-overlooking-sangam.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/arches-overlooking-sangam.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/arches-overlooking-sangam.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/arches-overlooking-sangam.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/arches-overlooking-sangam.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/arches-overlooking-sangam.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="People sat in arches overlooking the sangam"
                />
            </div>

            <div class="triple-image-collage">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/food-vendor-allahabad-2.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/food-vendor-allahabad-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/food-vendor-allahabad-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/food-vendor-allahabad-2.jpg 2048w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Man stirring large cooking pot in the street"
                />
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/street-barber-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/street-barber-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/street-barber-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/street-barber-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/street-barber-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/street-barber-allahabad.jpg 2048w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Man having a haircut in the street"
                />
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/bearded-men-allahabad.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/bearded-men-allahabad.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/allahabad/bearded-men-allahabad.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/allahabad/bearded-men-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/allahabad/bearded-men-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/allahabad/bearded-men-allahabad.jpg 2048w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Two men with beards"
                />
            </div>

        </section>

        </Main>
    
  </Layout>
)

export default Allahabad