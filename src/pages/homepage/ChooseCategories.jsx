import React from 'react'
import style from './chooseCategories.module.css'
import megaphone from '../../img/HomePage/chooseCategories_megaphone.svg'
import pen from '../../img/HomePage/chooseCategories_ph_pen-nib-straight-fill.svg'
import dollar from '../../img/HomePage/chooseCategories_fa6-solid_hand-holding-dollar.svg'
import code from '../../img/HomePage/chooseCategories_icon-park-solid_source-code.svg'
import folder from '../../img/HomePage/choosecategories_folder-open-solid .svg'
import handshake from '../../img/HomePage/chooseCategories_handshake-simple-solid 1.svg'
import palette from '../../img/HomePage/chooseCategories_bxs_palette.svg'
import multiple from '../../img/HomePage/chooseCategories_fluent_video-clip-multiple-16-filled.svg'
import woman from '../../img/HomePage/chooseCategories_attractive-woman-with-beautiful-smile-sitting-lotus-pose-floor-using-silver-notebook-looking-away-isolated-white-wall 1.svg'
import frame from '../../img/HomePage/chooseCategories_Frame 29.svg'
import interview from '../../img/HomePage/chooseCategories_interview.svg'

const ChooseCategories = () => {
  return (
    <div className={style.chooseCategories_container}>
        <div className={style.chooseCategories_main}>
            <div className={style.chooseCategories_block_1}>
                <div className={style.chooseCategories_block_1_txt}>
                    <p className={style.chooseCategories_block_1_txt_1}>Choose Categories</p>
                    <p className={style.chooseCategories_block_1_txt_2}>Choose Categories</p>
                </div>

                <div className={style.chooseCategories_block_1_list}>
                    
                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ megaphone } alt="megaphone" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Marketing &
Communication</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>58 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main_1}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ pen } alt="pen" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt_1}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1_1}>UI / UX <br />
Design</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2_1}>120 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ dollar } alt="dollar" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Finance <br />
Management</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>230 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ code } alt="code" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Web <br />
Development</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>100 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ folder } alt="folder" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Project <br />
Management</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>87 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ handshake } alt="handshake" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Business & <br />
Consulting</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>23 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ palette } alt="palette" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Graphic <br />
Designer</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>65 Jobs Available</p>
                        </div>
                    </div>

                    <div className={style.chooseCategories_block_1_list_main}>
                        <div className={style.chooseCategories_block_1_list_main_img}>
                            <img src={ multiple } alt="multiple" />
                        </div>
                        <div className={style.chooseCategories_block_1_list_main_txt}>
                            <p className={style.chooseCategories_block_1_list_main_txt_1}>Video <br />
Editor</p>
                            <p className={style.chooseCategories_block_1_list_main_txt_2}>120 Jobs Available</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className={style.chooseCategories_block_2}>
                <div className={style.chooseCategories_block_2_img}>
                    <img className={style.chooseCategories_block_2_img_woman} src={ woman} alt="woman" />
                    <img className={style.chooseCategories_block_2_img_frame} src={ frame } alt="frame" />
                    <img className={style.chooseCategories_block_2_img_interview} src={ interview } alt="interview" />
                </div>
                <div className={style.chooseCategories_block_2_txt}>
                    <p className={style.chooseCategories_block_2_txt_1}>Create Profile</p>
                    <p className={style.chooseCategories_block_2_txt_2}>Build Your Personal <br /> 
Account Profile</p>
                    <p className={style.chooseCategories_block_2_txt_3}>Create an account for the job information you want, get daily <br />notifications and you can easily apply directly to the company <br /> you want and create an account now for free</p>
                    <button className={style.chooseCategories_block_2_txt_btn}>Create Account</button>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default ChooseCategories