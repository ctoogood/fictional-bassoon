import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Main = styled.main `
    max-width:1200px;
    margin:auto;
    margin-top:2rem;

    .project-list {
        margin:0.5rem;

        p {
            font-family:Josefin Sans;
            text-align:center;
            color: #176187;
        }

        a {
            text-decoration:none;
            color:inherit;
            transition:opacity 0.3s linear;

            &:hover {
                opacity:0.8;
            }
        }

        img {
            margin:0;
            border-radius:3px;
            
        }

        @media only screen and (min-width:520px) {
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:1rem;
        }

        @media only screen and (min-width:900px) {
            grid-template-columns:1fr 1fr 1fr;
        }
    }
`

const ProjectPage = () => (
    <Layout>
    <Main>

    <section class="project-list">
        
        <a href="wildlife" class="photography-project">
                <img
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/fulmar-above-waves-no-ness-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/fulmar-above-waves-no-ness-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/fulmar-above-waves-no-ness-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/fulmar-above-waves-no-ness-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/fulmar-above-waves-no-ness-2.jpg 320w"
                    sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                    alt="Fulmar flying over crashing waves, Shetland" />
                <p>WILDLIFE</p>
        </a>
        

        <a href="shetlandlandscapes" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/dore-holm-large-waves.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/dore-holm-large-waves.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/dore-holm-large-waves.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/dore-holm-large-waves.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/dore-holm-large-waves.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Natural arch, Dore Holm, in stormy seas" />
            <p>SHETLAND LANDSCAPES</p> 
        </a>
            
        <a href="salmonfarming" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/worker-holding-scottish-salmon.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/worker-holding-scottish-salmon.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/worker-holding-scottish-salmon.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/worker-holding-scottish-salmon.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/worker-holding-scottish-salmon.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Scottish salmon being held by salmon farm worker" />
            <p>SALMON FARMING</p>
        </a>

        <a href="/scallopfishing" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/scallops-in-basket-shetland.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/scallops-in-basket-shetland.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/scallops-in-basket-shetland.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/scallops-in-basket-shetland.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/scallops-in-basket-shetland.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Scallops being placed in basket" />
            <p>SCALLOP FISHING</p>
        </a>

        <a href="waasbakery" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/stacking-butteries-waas-bakery.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/stacking-butteries-waas-bakery.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/stacking-butteries-waas-bakery.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/stacking-butteries-waas-bakery.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/stacking-butteries-waas-bakery.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Baker stacking trays of butteries, Waas Bakery" />
            <p>WAAS BAKERY</p> 
        </a>
            
        <a href="fishing" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/fisherman-ties-cod-end.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/fisherman-ties-cod-end.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/fisherman-ties-cod-end.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/fisherman-ties-cod-end.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/fisherman-ties-cod-end.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Fisherman ties the cod end of the net" />
            <p>NORTHERN SEAS FISHING</p>
        </a>

        <a href="lerwickharbour" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/crystal-symphony-cruise-ship-lerwick-harbour.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/crystal-symphony-cruise-ship-lerwick-harbour.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/crystal-symphony-cruise-ship-lerwick-harbour.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/crystal-symphony-cruise-ship-lerwick-harbour.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/crystal-symphony-cruise-ship-lerwick-harbour.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Cruise ship, Crystal Symphony, in Lerwick Harbour" />
            <p>LERWICK HARBOUR</p>
        </a>

        <a href="crofting" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/shetland-sheep-portrait.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/shetland-sheep-portrait.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/shetland-sheep-portrait.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/shetland-sheep-portrait.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/shetland-sheep-portrait.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Shetland Sheep" />
            <p>CROFTING</p>
        </a>

        <a href="scottishlandscapes" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/glen-coe-scotland.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/glen-coe-scotland.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/glen-coe-scotland.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/glen-coe-scotland.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/glen-coe-scotland.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="House below mountain in Glen Coe, Scotland" />
            <p>SCOTTISH LANDSCAPES</p>
        </a>

        <a href="birqash" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/birqash/camel-market-scene-7.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/birqash/camel-market-scene-7.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/birqash/camel-market-scene-7.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/birqash/camel-market-scene-7.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/birqash/camel-market-scene-7.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Men stood around a camel, Egypt" />
            <p>CAMEL MARKET, EGYPT</p>
        </a>

        <a href="cairo" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/citadel-cairo.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/citadel-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/citadel-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/citadel-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/citadel-cairo.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Citadel view, Cairo" />
            <p>CAIRO, EGYPT</p>
        </a>
        
        <a href="allahabad" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/railway-attendant-allahabad.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/railway-attendant-allahabad.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/railway-attendant-allahabad.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/railway-attendant-allahabad.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/railway-attendant-allahabad.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Railway attendant sat on outside of train, Allahabad" />
            <p>ALLAHABAD, INDIA</p>
        </a>

        <a href="wod" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/well-of-death-motorcyclist.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/well-of-death-motorcyclist.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/well-of-death-motorcyclist.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/well-of-death-motorcyclist.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/well-of-death-motorcyclist.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Motorcyclist in the Well of Death, India" />
            <p>THE WELL OF DEATH</p>
        </a>

        <a href="ladakh" class="photography-project">
            <img
                src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/monk-matho-monastery-ladakh.jpg"
                srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/main/monk-matho-monastery-ladakh.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/main/monk-matho-monastery-ladakh.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/main/monk-matho-monastery-ladakh.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/main/monk-matho-monastery-ladakh.jpg 320w"
                sizes="(min-width:520px) 50vw, (min-width:900px) 33.3vw, 100vw"
                alt="Portrait of a monk at Matho monastery, Ladakh" />
            <p>BUDDHIST MONASTERIES</p>
        </a>
    </section>
</Main>
</Layout>
)

export default ProjectPage