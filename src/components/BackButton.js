import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router-dom"

const BackButton = () => {
  const history = useHistory()
  
  const handleBack = () => {
    history.goBack()
  }
  
  return ( 
    <section className="mb-8">
    <button className="px-8 py-2 bg-light rounded-md" onClick={handleBack}>
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
      Back
    </button>
    </section>
  );
}
 
export default BackButton;