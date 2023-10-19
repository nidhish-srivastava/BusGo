import { Suspense, lazy } from 'react'
const LazyImage = lazy(()=>import("./LazyImage"))

function Hero() {
  console.log("Hero render");
  
  return (
    <div>
    <div className="hero-section">
      <div className="left">
        <Suspense fallback = {<h2>Loading image..</h2>}>
        <LazyImage/>
        </Suspense>
      </div>
      <div className="right">
        <h1>BusGo</h1>
    <p>
        Welcome to BusGo - Your gateway to unforgettable journeys on wheels! Whether it's a weekend getaway or a cross-country expedition, we've got you covered. Discover the joy of hassle-free bus bookings and embark on memorable adventures with BusGo today!"
      </p>
      <button className='book-now'>BOOK NOW</button>
      </div>
    </div>
    <div className="book">
    </div>
    </div>
  )
}

export default Hero

