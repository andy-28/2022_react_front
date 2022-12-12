import { useParams } from "react-router-dom";
import React, { useEffect, useState} from "react";
import { getAriticleById } from "../api";
import heart from '../img/heart-3510.png'
import comm from '../img/comment.png'


const Detail = ()=> {
    let {id} = useParams();

    const [detail, setDetail] = useState();
	const [isActiveLike, setActiveLike] = useState(false)
	const [isActiveComm, setActiveComm] = useState(false)

    useEffect(()=>{
        setDetailData()
    },[id])

    async function setDetailData() {
        const data = await getAriticleById(id)
        setDetail(data)
    }

	const likeClick = event => {
		setActiveLike(current => !current)
	}
	const commClick = event => {
		setActiveComm(current => !current)
	}

    return(
		<div>
			{	detail ?
				<div className="a_wrap">
					<div className="left">
						<div className="a_title">{detail.title}</div>
						<div className="a_author">By {detail.author}</div>
						<div className="a_description_long">{detail.description_long}</div>
						<img className="a_img" alt="" src={detail.image}></img>
					</div>
					<div className="button">
							<button className="btn like" onClick={likeClick} >
								<img className="icon like-icon" src={heart}></img>
								<div className="cont-like">{detail.article_like.length}</div>
							</button>
							<button className="btn comm" onClick={commClick}>
								<img className="icon comm-icon" alt="" src={comm}></img>
								<div className="cont-comm">{detail.article_comm.length}</div>
							</button>
					</div>
					<div className="right_wrap">
						<div className={ isActiveLike ? 'active_like' : 'like_none'}>
						Likes
							{  detail.article_like.map((item)=>(
								<div className="like_card" key={item.id}>
									<div className="like_card_left">
									<img className="like_avatar" src={item.like_user.avatar}></img>
									</div>
									<div className="like_card_right">
										<div className="like_name">{item.like_user.username}</div>
										<div className="like_email">{item.like_user.email}</div>
									</div>
								</div>
								))
							}
						</div>
						<div className={ isActiveComm ? 'active_comm' : 'comm_none'}>
						Comments
						{  detail.article_comm.map((item)=>(
								<div className="comm_card" key={item.id}>
									<div className="comm_name">{item.comm_user.username}</div>
									<div className="comm_content">{item.content}</div>
								</div>
								))
							}
						</div>
					</div>
			</div>
				: <></>
			}
		</div>
	)
}
export default Detail