import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/post/postAction";

import "./postItem.css";
import compLogo from "../../img/postList/postList_logo.svg";
import favIcon from "../../icons/favorite-icon.svg";
import favIconRed from "../../icons/favorite-icon-red.svg";
import { isUserLogin } from "../../helpers/functions";

const PostItem = ({ post, favorites }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className="postItem__block">
			<div className="postItem__header__block">
				<div className="postItem__title__block">
					<h2 className="postItem__header">{post.vacancy}</h2>
					<h3 className="postItem__company">{post.company_name}</h3>
				</div>
				<div className="postItem__img__block">
					<img src={compLogo} alt="error" />
				</div>
			</div>
			<div className="postItem__block_second">
				<div className="postItem__block_second__titles">
					<h3 className="postItem__exp">{post.experience} year expirience</h3>
					<h3 className="postItem__salary">{post.salary}$</h3>
				</div>
				<div className="postItem__block_second__actions__block">
					<div className="postItem__block_second__actions__block__favorites">
						{isUserLogin() && (
							<button>
								<img src={favIcon} alt="error" />
							</button>
						)}
					</div>

					{isUserLogin() && (
						<>
							<button onClick={() => dispatch(deletePost({ id: post.pk }))}>
								delete
							</button>
							<button onClick={() => navigate(`/post-update/${post.pk}`)}>
								edit
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default PostItem;
