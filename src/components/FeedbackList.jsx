import PropTypes from "prop-types";
import Feedback from "./Feedback";

function FeedbackList({feedback = []}){
    return(
        <div>
            {feedback.map((item) => (
                <Feedback key= {item.id} item = {item}/>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.string, 
}

export default FeedbackList;