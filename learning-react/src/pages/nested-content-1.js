import React, {useState} from 'react';

const NestedContent1 = () => {

  let [message, updateMessage] = useState("");

  const handleTextArea = (event) => {
    // console.log(event.target.value);
    updateMessage(event.target.value);
  }

  return (
    <div>
      <h2>Content 1</h2>
      <label>Enter any Text Content</label>
      <textarea onChange={handleTextArea}></textarea>

      <p>{message}</p>
    </div>
  );
};

export default NestedContent1;