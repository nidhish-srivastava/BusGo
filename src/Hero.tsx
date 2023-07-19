import a from './1.jpg'
function Hero() {
  return (
    <div>
    <div className="hero-section">
      <div className="left">
          <img src={a} alt="" />
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