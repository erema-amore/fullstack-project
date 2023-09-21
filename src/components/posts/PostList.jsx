import React from 'react'
import style from './postList.module.css'
import rectangle from '../../img/postList/postList_rectangle.svg'
import rectangle_none from '../../img/postList/postList_rectangle_none.svg'
import circle from '../../img/postList/postList_circle.svg'
import circle_none from '../../img/postList/postList_circle_none.svg'
import arrow from '../../img/postList/postList_arrow.svg'
import logo from '../../img/postList/postList_logo.svg'
import sign from '../../img/postList/postList_sign.svg'
import stars from '../../img/postList/postList_stars.svg'
import location from '../../img/postList/postList_location.svg'

const PostList = () => {
  return (
    <div className={style.postList_main}>
        <div className={style.postList_container}>
            <div className={style.postList_block_1}>
                <div className={style.postList_block_1_filters}>
                    <p className={style.postList_block_1_filters_main}>Filters</p>
                    <p className={style.postList_block_1_filters_clearAll}>clear all</p>
                </div>
                <div className={style.postList_block_1_jobType}>
                    <div className={style.postList_block_1_jobType_main_txt}>Job Type</div>
                    <div className={style.postList_block_1_jobType_list}> <img src={rectangle} alt="" />Full time</div>
                    <div className={style.postList_block_1_jobType_list}> <img src={rectangle_none} alt="" />internship</div>
                    <div className={style.postList_block_1_jobType_list}> <img src={rectangle} alt="" />Freelance</div>
                    <div className={style.postList_block_1_jobType_list}> <img src={rectangle_none} alt="" />contractual</div>
                </div>
                <div className={style.postList_block_1_onSite}>
                    <div className={style.postList_block_1_onSite_main_txt}>On site/remote</div>
                    <div className={style.postList_block_1_onSite_list}> <img src={rectangle} alt="" />on site</div>
                    <div className={style.postList_block_1_onSite_list}> <img src={rectangle_none} alt="" />hybrid</div>
                    <div className={style.postList_block_1_onSite_list}> <img src={rectangle} alt="" />remote</div>
                </div>
                <div className={style.postList_block_1_salary}>
                    <div className={style.postList_block_1_salary_main_txt}>Salary range</div>
                    <div className={style.postList_block_1_salary_list}> <img src={circle_none} alt="" />under $ 1000 </div>
                    <div className={style.postList_block_1_salary_list}> <img src={circle_none} alt="" />$ 2500 - $ 5000 </div>
                    <div className={style.postList_block_1_salary_list}> <img src={circle_none} alt="" />$ 1000 - $ 2500  </div>
                    <div className={style.postList_block_1_salary_list}> <img src={circle} alt="" />Above $ 2500 </div>
                </div>
                <div className={style.postList_block_1_others}>
                    <div className={style.postList_block_1_others_main_txt}>Others</div>
                    <div className={style.postList_block_1_others_list}> <img src={rectangle} alt="" />on site</div>
                    <div className={style.postList_block_1_others_list}> <img src={rectangle_none} alt="" />hybrid</div>
                    <div className={style.postList_block_1_others_list}> <img src={rectangle_none} alt="" />remote</div>
                </div>
            </div>


            <div className={style.postList_block_2}>

                <div className={style.postList_block_2_head}>
                    
                    <div className={style.postList_block_2_head_left}>Total jobs</div>
                    <button className={style.postList_block_2_head_left_btn}>153 found</button>

                    <div className={style.postList_block_2_head_right}>
                        <div className={style.postList_block_2_head_right_sort}>Sort by: </div>
                        <div className={style.postList_block_2_head_right_urgently}>Urgently hiring</div>
                        <div className={style.postList_block_2_head_right_arrow}>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    
                </div>
                <div className={style.postList_block_2_cart}>
                    <div className={style.postList_block_2_cart_main}>
                        <div className={style.postList_block_2_cart_simple}>
                            <div className={style.postList_block_2_cart_smoll}>
                                <div className={style.postList_block_2_cart_smoll_logo}>
                                    <img src={logo} alt="logo" />
                                    <img src={sign} alt="sign" />
                                </div>
                                <div className={style.postList_block_2_cart_smoll_list}>
                                    <p className={style.postList_block_2_cart_smoll_list_description}>Senior product manager</p>
                                    <div className={style.postList_block_2_cart_smoll_list_rating}>
                                        <img className={style.postList_block_2_cart_smoll_list_rating_stars} src={stars} alt="stars" />
                                        <p className={style.postList_block_2_cart_smoll_list_rating_txt}>( 42 reviews )</p>
                                    </div>
                                    <div className={stars.postList_block_2_cart_smoll_list_location}>
                                        <img src={location} alt="" />
                                        <p>California, cA</p>
                                    </div>
                                    <button className={style.postList_block_2_cart_smoll_list_time}>full time</button>
                                    <button className={style.postList_block_2_cart_smoll_list_level}>senior level</button>
                                    <button className={style.postList_block_2_cart_smoll_list_state}>remote</button>

                                </div>
                            </div>
                            <div className={style.postList_block_2_cart_simple_salary}>$2.5k/monthly</div>
                            <button className={style.postList_block_2_cart_simple_btn}>see details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostList