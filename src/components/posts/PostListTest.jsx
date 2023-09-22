import React from 'react'
import style from './postListTest.module.css'

import logo from '../../img/postList/postList_logo.svg'
import stars from '../../img/postList/postList_stars.svg'
import location from '../../img/postList/postList_location.svg'

import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const PostList = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
        

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
                    <div className={style.postList_block_1_jobType_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>Full time</div>
                    <div className={style.postList_block_1_jobType_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>internship</div>
                    <div className={style.postList_block_1_jobType_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>Freelance</div>
                    <div className={style.postList_block_1_jobType_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>contractual</div>
                </div>
                <div className={style.postList_block_1_onSite}>
                    <div className={style.postList_block_1_onSite_main_txt}>On site/remote</div>
                    <div className={style.postList_block_1_onSite_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>on site</div>
                    <div className={style.postList_block_1_onSite_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>hybrid</div>
                    <div className={style.postList_block_1_onSite_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>remote</div>
                </div>
                <div className={style.postList_block_1_salary}>
                    <div className={style.postList_block_1_salary_main_txt}>Salary range</div>
                    <div className={style.postList_block_1_salary_list}> <Radio value="radioA" inputProps={{ 'aria-label': 'Radio A', }}/>under $ 1000 </div>
                    <div className={style.postList_block_1_salary_list}> <Radio value="radioA" inputProps={{ 'aria-label': 'Radio A', }}/>$ 2500 - $ 5000 </div>
                    <div className={style.postList_block_1_salary_list}> <Radio value="radioA" inputProps={{ 'aria-label': 'Radio A', }}/>$ 1000 - $ 2500  </div>
                    <div className={style.postList_block_1_salary_list}> <Radio value="radioA" inputProps={{ 'aria-label': 'Radio A', }}/>Above $ 2500 </div>
                </div>
                <div className={style.postList_block_1_others}>
                    <div className={style.postList_block_1_others_main_txt}>Others</div>
                    <div className={style.postList_block_1_others_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>on site</div>
                    <div className={style.postList_block_1_others_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>hybrid</div>
                    <div className={style.postList_block_1_others_list}> <Checkbox checked={checked} onChange={handleChange}inputProps={{ 'aria-label': 'controlled' }}/>remote</div>
                </div>
            </div>


            <div className={style.postList_block_2}>


                <div className={style.postList_block_2_cart}>
                    <div className={style.postList_block_2_cart_main}>
                        <div className={style.postList_block_2_cart_simple}>
                            <div className={style.postList_block_2_cart_smoll}>
                                <div className={style.postList_block_2_cart_smoll_logo}>
                                    <img src={logo} alt="logo" />
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
                                </div>
                                <div className={style.postList_block_2_cart_smoll_list}>
                                    <p className={style.postList_block_2_cart_smoll_list_companyName}>Spoon</p>
                                    <p className={style.postList_block_2_cart_smoll_list_vacancy}>Frontend developer</p>
                                    <div className={style.postList_block_2_cart_smoll_list_rating}>
                                        <div className={style.postList_block_2_cart_smoll_list_rating_stars}><Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                        </div>
                                        <p className={style.postList_block_2_cart_smoll_list_rating_txt}> <VisibilitySharpIcon/>views </p>
                                    </div>
                                    <div className={stars.postList_block_2_cart_smoll_list_location}>
                                        <img src={location} alt="" />
                                        <p>California, cA</p>
                                    </div>
                                   
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