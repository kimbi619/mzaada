import React from 'react'

const AboutUsSection = () => {
  return (
    <section className='landing_page_about_us_section'>
        <div className='container'>
            <h2 className="section_title">Pourquoi Devenir Prestataire Chez Nous?</h2>
            <div className='about_section_flex'>
                <div className='lists'>
                    <div className='list'>
                        <div className='list_icon'>
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <div className='list_text'>
                            <h3>Des missions à la hauteur de vos compétences</h3>
                            <p>Vous avez des compétences en développement web, en design, en rédaction ou dans un autre domaine ? Nous vous proposons des missions qui correspondent à vos compétences.</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='list_icon'>
                            <i className="fas fa-handshake"></i>
                        </div>
                        <div className='list_text'>
                            <h3>Une rémunération attractive</h3>
                            <p>Vous êtes rémunéré en fonction de vos compétences et de votre expérience. Plus vous avez de compétences et d'expérience, plus vous êtes rémunéré.</p>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='list_icon'>
                            <i className="fas fa-award"></i>
                        </div>
                        <div className='list_text'>
                            <h3>Des formations pour vous améliorer</h3>
                            <p>Nous vous proposons des formations pour vous améliorer dans votre domaine de compétence. Vous pouvez ainsi améliorer vos compétences et augmenter votre rémunération.</p>
                        </div>
                    </div>
                </div>
                <div className='about_contact_form'>
                    <div className='contact_input'>
                        <input type='text' placeholder='Nom' />
                    </div>
                    <div className='contact_input'>
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='contact_input'>
                        <input className='submit_home_contact_form' type='submit' value='Soumettre' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsSection