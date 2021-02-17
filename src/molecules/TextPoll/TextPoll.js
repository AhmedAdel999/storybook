import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Text from '../Text/Text';
import AddText from '../Text/AddText';

const TextPoll = () => {
  const [choices, setChoices] = useState([]);
  const addHandler = () => {
    setChoices([
      ...choices,
      !choices.length
        ? { id: 'A', value: '' }
        : {
            id: String.fromCharCode(
              choices[choices.length - 1].id.charCodeAt(0) + 1
            ),
            value: '',
          },
    ]);
  };
  const deleteHandler = (e) => {
    setChoices(choices.filter((choice) => choice.id != e.target.id));
  };
  const changeHandler = (e) => {
    let newChoices = choices.map((choice) => {
      if (choice.id === e.target.id) {
        choice.value = e.target.value;
      }
      return choice;
    });
    setChoices(newChoices);
  };
  // const clickHandler = () => {
  //   choices.forEach((choice) => {
  //     if (choice.value.length) {
  //       console.log(choice.value);
  //     }
  //   });
  // };
  return (
    <div>
      {choices.map((choice) => (
        <Text
          key={choice.id}
          withDelete
          id={choice.id}
          deleteHandler={deleteHandler}
          changeHandler={changeHandler}
        />
      ))}
      <AddText clickHandler={addHandler} />
      {/* <Button size='large' variant='primary' clickHandler={clickHandler}>
        Submit
      </Button> */}
    </div>
  );
};

export default TextPoll;
