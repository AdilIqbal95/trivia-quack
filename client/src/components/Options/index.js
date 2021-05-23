import React, {useState} from 'react';
import { addAnswer } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import { useSocketReady } from '../../customHooks';
  
function Options ({options, disabled, setDisabled}) {
  const dispatch = useDispatch()
  const socket = useSelector(state => state.myReducer.socket)
  const [selectedOption, setSelectedOption] = useState(null)
  const renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });


  const renderOptions = options.map((option, index) => {
    console.log(index);
    let answerMarker = "";
    switch(index) {
      case 0:
        answerMarker = "A."
        break;
      case 1:
        answerMarker = "B."
        break;
      case 2:
        answerMarker = "C."
        break;
      case 3:
        answerMarker = "D."
        break;
      default:
        break;
    }

    return (
      <button key={index} style={{background: selectedOption === option ? 'green' : null}} onClick={() => handleSelect(option)}>
        <span className="letter">{answerMarker}</span> {renderHTML(option)}
      </button>
    )
  })

  const handleSelect = (option) => {
        setSelectedOption(option)
    }

  const handleSubmit = () => {
        setDisabled(true);
        socket.socket.emit("ready", socket.socket.id)
        dispatch(addAnswer(selectedOption))
        setSelectedOption(null);
    }

  useSocketReady();

  return (
    <div className="options-section">
      {renderOptions}
      <div class="text-center">
        <button className="text-center" type='submit' onClick={handleSubmit} disabled={disabled}>Submit</button>
      </div>
    </div>  
  )
}

export default Options;