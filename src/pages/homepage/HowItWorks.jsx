import React from 'react'
import style from './howItWorks.module.css'
import woman from '../../img/HomePage/howItWorks_beautiful-woman-listening-music-chatting-using-headphones-laptop-while-sitting-with-legs-crossed-floor-white-wall 1.svg'

const HowItWorks = () => {
  return (
    <div className={style.howItWorks_container}>
      <div className={style.howItWorks_main}>
        <div className={style.howItWorks_block_1}>
            <div className={style.howItWorks_block_1_list}>
                <p className={style.howItWorks_block_1_list_1}>How It Works</p>
                <p className={style.howItWorks_block_1_list_2}>Easy Step To Find and <br />
Apply Your Dream Job</p>
                <p className={style.howItWorks_block_1_list_3}>We will help you to find your dream job easily, let us <br />
help you manage everything you need</p>
                 <div className={style.howItWorks_block_1_list_txt}>
                <p className={style.howItWorks_block_1_list_4}>Easy to uload Your Best CV and Portofolio</p>
                <p className={style.howItWorks_block_1_list_5}>You can upload your resume, CV, and portofolio <br /> directly to Jobbb</p>
                <p className={style.howItWorks_block_1_list_4}>You Will Be Notified With All Updates</p>
                <p className={style.howItWorks_block_1_list_5}>Get notified about new job vacancies. scheduled <br />
interview and job application</p>
                <p className={style.howItWorks_block_1_list_4}>Apply for your dream job from the best <br /> company</p>
                <p className={style.howItWorks_block_1_list_5}>We will provide recommendations for your <br /> choice companies from all over the world</p>
                </div>
            </div>
            <div className={style.howItWorks_block_1_img}>
              <img className={style.howItWorks_block_1_img_woman} src= { woman } alt="woman" />
              
            </div>
        </div>

        <div className={style.howItWorks_block_2}>
          <div className={style.howItWorks_block_2_txt}>
            <p>Never Want to Miss <br />
Any Job News?</p>
          </div>
           <div className={style.howItWorks_block_2_btn_main}>
          <div className={style.howItWorks_block_2_btn}>
            <button className={style.howItWorks_block_2_btn_1}>Enter your email address here...
            <button className={style.howItWorks_block_2_btn_2}>Subcribe</button>
            </button>
          </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default HowItWorks