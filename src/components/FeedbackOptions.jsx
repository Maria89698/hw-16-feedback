import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button style={{marginRight: '10px'}} key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}