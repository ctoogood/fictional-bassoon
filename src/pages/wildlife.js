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
            min-height:300px;
          height:75vh;
        }

    section {
        border-radius:5px;

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/wildlife/xl-fulmar-over-waves.jpg');
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



const Wildlife = () => (
  <Layout>
    <SEO title="Wildlife" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>WILDLIFE<br />
        <span>SHETLAND ISLANDS</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Wildlife in Shetland</h2>
            <hr />
            <p class="project-text-content">Shetland is home to an abundance of plants & wildlife.  Its rocky coastline attracts thousands of seabirds every year, and a vast range of marine life can be seen in the surrounding waters.<br />
            <br />The dramatic scenery and light experienced in Shetland compliments the presence of such a plenitude of wildlife.  </p>
            <hr />
        </article>

        <section class="project-images">
           
            <div class="triple-image-row">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-gannet-flying-over-rock.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-gannet-flying-over-rock.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-gannet-flying-over-rock.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-gannet-flying-over-rock.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-gannet-flying-over-rock.jpg 2048w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Gannet in flight"
                />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-puffin-and-sea-pinks.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-puffin-and-sea-pinks.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-puffin-and-sea-pinks.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-puffin-and-sea-pinks.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-puffin-and-sea-pinks.jpg 2048w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Puffin behind sea pinks"
                />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-arctic-tern-over-water.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-arctic-tern-over-water.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-arctic-tern-over-water.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-arctic-tern-over-water.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-arctic-tern-over-water.jpg 2048w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Arctic Tern in flight"
                />
            </div>

            <article class="project-text">
                <h2 class="project-text-title">Birds</h2>
                <p class="project-text-content">Many species of birds can be seen around Shetland, especially in the summer months when large colonies of seabirds come to areas such as Hermaness, Noss, Fetlar and Sumburgh Head to breed.  Shetland hosts some very large colonies of gannets, puffins, razorbills and guillemots </p>
            </article>

            <div class="full-width-image">
                <img class="lazy"
                        src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-colony-of-nesting-gannets.jpg"
                        srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-colony-of-nesting-gannets.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-colony-of-nesting-gannets.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-colony-of-nesting-gannets.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-colony-of-nesting-gannets.jpg 2048w"
                        sizes="100vw"
                        alt="Colony of nesting gannets"
                    />
            </div>

            <div class="image-grid">
                <img class=" lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-puffin-on-waves.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-puffin-on-waves.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-puffin-on-waves.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-puffin-on-waves.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-puffin-on-waves.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Puffin on the sea"
                />
                <img  class=" lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-small-bird-on-rock.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-small-bird-on-rock.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-small-bird-on-rock.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-small-bird-on-rock.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-small-bird-on-rock.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Small bird on a rock"
                />

                <img  class=" lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-fulmar-over-waves-1.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-fulmar-over-waves-1.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-fulmar-over-waves-1.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-fulmar-over-waves-1.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-fulmar-over-waves-1.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fulmar flying over crashing waves"
                />

                <img  class=" lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-small-bird-in-field.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-small-bird-in-field.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-small-bird-in-field.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-small-bird-in-field.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-small-bird-in-field.jpg 2048w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Small bird on a rock in a field"
                />
            </div>

            <div class="triple-image-collage">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-puffin-standing-hermaness.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-puffin-standing-hermaness.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-puffin-standing-hermaness.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-puffin-standing-hermaness.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-puffin-standing-hermaness.jpg 2048w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Puffin standing with fish in its mouth"
                />
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-seagulls-on-the-coast.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-seagulls-on-the-coast.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-seagulls-on-the-coast.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-seagulls-on-the-coast.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-seagulls-on-the-coast.jpg 2048w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Several seagulls on a cliff"
                />
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-great-skua-hermaness.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/wildlife/l-great-skua-hermaness.jpg 320w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/wildlife/l-great-skua-hermaness.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024w/calumtoogood/projects/wildlife/l-great-skua-hermaness.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/wildlife/l-great-skua-hermaness.jpg 2048w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Great Skua sat on clifftop"
                />
            </div>

        </section>

        </Main>
    
  </Layout>
)

export default Wildlife
