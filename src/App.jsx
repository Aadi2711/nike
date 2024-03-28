import Hero from './Components/Hero';
import PopularProducts from './Components/PopularProducts';
import SuperQuality from './Components/SuperQuality';
import Services from './Components/Services';
import SpecialOffer from './Components/SpecialOffer';
import CustomerReview from './Components/CustomerReview';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReview/>
      </section>
      <section className='padding-x sm:py-32 py-16'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App