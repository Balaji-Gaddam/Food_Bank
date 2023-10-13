import React from 'react'
import HomeIMg from"../components/images/7922893.jpg"

function Home_page() {
  return (
    <section>
    <div className='main_home'>
        <div className='home_text'>
            <h1>Food Bank</h1>
            <p>A recipe has no soul. You as the cook must bring soul to the recipe</p>
        </div>
        <div className='home_img'>
            <img src={HomeIMg} alt=""/>
        </div>
    </div>
    </section>
  )
}

export default Home_page