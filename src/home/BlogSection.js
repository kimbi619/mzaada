import React from 'react'

const BlogSection = () => {
  return (
    <section className='blog_section'>
      <h2 className='section_title'>Nos Prestataires</h2>
      <div className='blog_flex_cards'>
        <div className='blog_card'>
          <h3 className='blog_item_title'>Blog Title</h3>
          <img src='https://via.placeholder.com/300' alt='Blog' />
          <div className='blog_content'>
            <div className='three_dots'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className='blog_item_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec purus et libero.
            </p>
            <a href='#' className='read_more_blog_link'>Read More</a>
          </div>
        </div>
        <div className='blog_card'>
          <h3 className='blog_item_title'>Blog Title</h3>
          <img src='https://via.placeholder.com/300' alt='Blog' />
          <div className='blog_content'>
            <div className='three_dots'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className='blog_item_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec purus et libero.
            </p>
            <a href='#' className='read_more_blog_link'>Read More</a>
          </div>
        </div>
        <div className='blog_card'>
          <h3 className='blog_item_title'>Blog Title</h3>
          <img src='https://via.placeholder.com/300' alt='Blog' />
          <div className='blog_content'>
            <p className='blog_item_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec purus et libero.
            </p>
            <a href='#' className='read_more_blog_link'>Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection