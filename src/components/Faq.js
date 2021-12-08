import React from 'react';
import Tilt from 'react-parallax-tilt';
import { SectionBanner } from '.';

const Item = ({ question, answer }) => (
   <div class="sidebar-menu-item">
      <div class="sidebar-menu-header accordion-trigger-linked">
         <svg class="sidebar-menu-header-icon icon-profile">
            <use xlinkHref="#svg-info"></use>
         </svg>

         <div class="sidebar-menu-header-control-icon">
            <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
               <use xlinkHref="#svg-minus-small"></use>
            </svg>

            <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
               <use xlinkHref="#svg-plus-small"></use>
            </svg>
         </div>

         <p class="sidebar-menu-header-title">{question}</p>
      </div>

      <div class="sidebar-menu-body accordion-content-linked accordion-open px-2">
         <p class="px-7 pb-4 sidebar-menu-link">{answer}</p>
      </div>
   </div>
);

const Faq = () => (
   <div className="content-grid" style={{ paddingBottom: 60 }}>
      <Tilt>
         <SectionBanner
            title="Frequently Asked Questions"
            description="Learn more about Cromy.io"
         />
      </Tilt>
      <section className='w-full rounded-lg overflow-hidden mx-auto'>
         <div class="grid medium-space">
            <div class="account-hub-sidebar">
               <div class="sidebar-box no-padding">
                  <div class="sidebar-menu">
                     <Item
                        question="What is Cromy.io?"
                        answer="Cromy.io is a NFT social gaming platform that combines storytelling and gamification to make NFTs useful through collect & play to earn mini-games."
                     />
                     <Item
                        question="What is a Dappster®?"
                        answer="A Dappster® is the combination of a launcher and a builder. In consequence Cromy.io’s Dappster® is the portal to NFT gamified experiences (launcher) and a builder for creators to build experiences."
                     />
                     <Item
                        question="What is a Metaverse?"
                        answer="A Metaverse is usually confused with a social VR World, but it is not. Fundamentally, a Metaverse is the new internet whose infrastructure is backed by the blockchain, and where users can really own digital money (tokens) and digital assets (NFTs). Its frontend could, or could not, be VR — that just impacts on how immersive a platform is."
                     />
                     <Item
                        question="What is a NFT?"
                        answer="NFT comes from Non Fungible Token. It is a crypto token which has characteristics that makes each one unique in its kind."
                     />
                     <Item
                        question="How do I buy a NFT?"
                        answer="It depends on the network where the NFT was created and if it is a primary or secondary market. If you are buying on a primary market, you just need to mint your NFT from the provider's decentralized application using a crypto currency wallet. For the secondary market, you need to go to a marketplace. The most popular marketplace is OpenSea which is built on top of Ethereum and Polygon networks, but there are more marketplaces which support other networks."
                     />
                     <Item
                        question="What is a crypto currency wallet?"
                        answer="A cryptocurrency wallet is a device, physical medium, program or a service which stores the public and/or private keys for cryptocurrency transactions."
                     />
                     <Item
                        question="What is a NFT Experience?"
                        answer="A NFT Experience is a gamified way to collect NFTs which involves being engaged with a story, seeing exclusive content and/or enjoying different types of media."
                     />
                     <Item
                        question="What is a NFT booster pack?"
                        answer="A NFT booster pack is a NFT that you can open to be given randomly multiple amounts of other NFTs. Once the booster pack is opened, it is destroyed and you are automatically the owner of the NFTs that were “inside” the booster pack."
                     />
                     <Item
                        question="I’m a content creator, how do I build a NFT Experience for my community?"
                        answer="By now, please contact us at hello@cromy.io and we can help you to build a unique NFT Experience to engage and monetize your community together. For the near future, we are building a no-code tool for creators to make their own NFT Experiences on their own!"
                     />
                     <Item
                        question="I have a brand, how do I build a NFT Experience for my customers?"
                        answer="Please contact us at hello@cromy.io and we can help you to build a unique NFT Experience for your customers."
                     />
                     <Item
                        question="Do I need to sign up for an account?"
                        answer="You can sign in directly by linking your wallet which is the most secure and private way, without a previous registration. Nevertheless, we will provide a more classic authentication (naturally, with limited functionality) for those people not used to the web3 tooling, with the purpose of teach them how to setup a wallet."
                     />
                     <Item
                        question="Is there a token of the platform?"
                        answer="Absolutely, there will be a token. More information on this coming soon. Stay tuned."
                     />
                     <Item
                        question="Which blockchains are supported?"
                        answer="Current supported networks are Ethereum, Polygon, Binance Smart Chain and IOTA Smart Contracts (including Shimmer and Assembly). We want to include every person involved in the crypto community, so let us know which other chain you want us to support by dropping us an email to hello@cromy.io."
                     />
                     <Item
                        question="What is an album?"
                        answer="An album is the default type of collectible experience that you can enjoy in Cromy.io. It is a format where you collect NFTs in a gamified way while you engage with a story, artist or content."
                     />
                     <Item
                        question="How many types of albums exist?"
                        answer="Currently we support these types: Sticker Album, Comic, Music Box and Mural."
                     />
                     <Item
                        question="If I’m not the owner of the NFTs of an album, can I still see the complete experience?"
                        answer="Yes, you can see it in the Preview Mode of the experience."
                     />
                     <Item
                        question="What is Preview Mode?"
                        answer="We provide a Preview Mode on each experience where you can see a preview of it as if you were the owner of all the NFTs needed to complete it. This mode is enabled by default. To start collecting, just click on the “Start Collecting Now” button at the bottom of the screen."
                     />
                     <Item
                        question="What is Full Screen Mode?"
                        answer="You can access Full Screen Mode on any experience to enjoy a more immersive experience, by double clicking inside the experience."
                     />
                     <Item
                        question="Is the platform VR Ready?"
                        answer="Yes, you can access Cromy.io from your Oculus Quest or other similar VR headset and the platform should work flawlessly. If you find any issue while accessing the website from your VR headset, please contact us on our support email, hello@cromy.io."
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
);

export default Faq;
