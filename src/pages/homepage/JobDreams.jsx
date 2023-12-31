import React from 'react'
import style from './jobDreams.module.css'
import woman from '../../img/HomePage/homePage_woman.svg'
import slack from '../../img/HomePage/homePage_slack.svg'
import microsoft from '../../img/HomePage/homePage_microsoft.svg'
import google from '../../img/HomePage/homePage_google.svg'
import airbnb from '../../img/HomePage/homePage_airbnb.svg'
import search from '../../img/HomePage/jobDreams_iconoir_search.svg'
import location from '../../img/HomePage/jobDreams_location.svg'

const JobDreams = () => {
  return (
    <div className={style.jobDreams_container}>
        <div className={style.jobDreams_main}>
            <div className={style.jobDreams_block_1}>
                <div className={style.jobDreams_block_1_txt}>
                    <div className={style.jobDreams_block_1_txt_1}>
                        <p className={style.jobDreams_block_1_txt_1_1}>Find the job of <br />
your Dreams</p>
                        <p className={style.jobDreams_block_1_txt_1_2}>Find You New Job Today! New Job Postings Everyday <br />just for you, browse the job you want and apply <br />wherever you want</p>
                        <p className={style.jobDreams_block_1_txt_1_3}>Trending Jobs keyword :</p>
                    </div>
                    <div className={style.jobDreams_block_1_txt_2}>
                        <p className={style.jobDreams_block_1_txt_2_str}>Web Designer</p>
                        <p className={style.jobDreams_block_1_txt_2_str}>UI/UX Designer</p>
                        <p className={style.jobDreams_block_1_txt_2_str}>Frontend</p>
                    </div>


                    <div className={style.jobDreams_block_1_txt_3_main}>
                    <div className={style.jobDreams_block_1_txt_3}>
                        <div className={style.jobDreams_block_1_txt_3_str}> <img src={ search } alt="search" /> Job title or keyword</div>
                        <div className={style.jobDreams_block_1_txt_3_str}> <img src={ location } alt="location" /> Bandung, Indonesia</div>
                        <button className={style.jobDreams_block_1_txt_3_btn}>Search</button>
                    </div>
                    </div>

                </div>



                <div className={style.jobDreams_block_1_img}>
                    <img className={style.jobDreams_block_1_img_woman} src={woman} alt="woman" />
                  
                </div>
            </div>

            <div className={style.jobDreams_block_2}>
                <div className={style.jobDreams_block_2_txt}>
                    <p>Join Most Well Known Companies Around The World</p>
                </div>
                <div className={style.jobDreams_block_2_list}>

                    <div className={style.jobDreams_block_2_list_main}>
                        <img className={style.jobDreams_block_2_list_main_img} src={ slack } alt="slack" />
                    </div>
                    <div className={style.jobDreams_block_2_list_main}>
                        <img className={style.jobDreams_block_2_list_main_img} src={ microsoft } alt="microsoft" />
                    </div>
                    <div className={style.jobDreams_block_2_list_main}>
                        <img className={style.jobDreams_block_2_list_main_img} src={ google } alt="google" />
                    </div>
                    <div className={style.jobDreams_block_2_list_main}>
                        <img className={style.jobDreams_block_2_list_main_img} src={ airbnb } alt="airbnb" />
                    </div>

                    

                </div>
            </div>

        </div>

    </div>
  )
}

export default JobDreams