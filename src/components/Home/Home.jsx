
import BikeModels from './BikeModels'
import Hero from './Hero'
import HeroIntro from './HeroIntro'
import Banner from './Banner'
import Feature from './Feature'
import Faq from './Faq'
import Download from './Download'



const Home = () => {
 
 
  return (
    <div className=''>
     <Hero></Hero>
     <HeroIntro></HeroIntro>
     <BikeModels ></BikeModels>
     <Banner></Banner>
     <Feature></Feature>
     <Faq></Faq>
     <Download></Download>
    </div>
  )
}

export default Home
