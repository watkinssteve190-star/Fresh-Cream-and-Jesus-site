import React from 'react'
import logo from './logo.png'

export default function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <header>
        <img src={logo} alt="Fresh Cream and Jesus" style={{ maxWidth: '250px', marginBottom: '20px' }} />
        <h1>Fresh Cream and Jesus</h1>
        <p><em>Grunge poetic and Jesus</em></p>
      </header>

      <section>
        <h2>Ashes of Us</h2>
        <img src="https://i.ibb.co/vXkCZpM/ashes-cover.jpg" alt="Ashes of Us" style={{ width: '300px', borderRadius: '10px', marginTop: '10px' }} />
        <p style={{ maxWidth: '500px', margin: '20px auto' }}>
          “Ashes of Us” blends raw grunge textures with poetic lyricism. 
          A powerful soundscape of emotion and redemption.
        </p>
        <a href="https://ditto.fm/ashes-of-us-fresh-cream-and-jesus" target="_blank" rel="noreferrer">
          Listen on Ditto
        </a>
      </section>
    </div>
  )
}
