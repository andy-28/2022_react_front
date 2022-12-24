import { Link } from "react-router-dom"

const Card = ({data}) => {
	return(

        
		<Link className="c_wrap" to={`/detail/${data.id}`} >
			<div className="c_title">{data.title}</div>
			<div className="c_author">By {data.author}</div> 
			<div className="c_description">{data.description}</div> 
			<div className="more">More</div>
		</Link>
		
	)
}

export default Card