import Header from './components/common/Header'
import FeedbackList from './components/FeedbackList';
import { feedbackData } from './data/feedbackData';




function App() {
  return (
    <div >
      <Header text = 'hello'/>
      <FeedbackList feedback = {feedbackData}/>
    </div>
  )
}

export default App
