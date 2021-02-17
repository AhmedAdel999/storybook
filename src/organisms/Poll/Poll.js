import React, { useState } from 'react';
import TabGroup from '../../molecules/TabGroup/TabGroup';
import Avatar from '../../atoms/Avatar/Avatar';
import Input from '../../atoms/Input/Input';
import ImageUpload from '../../molecules/ImageUpload/ImageUpload';
import Privacy from '../../molecules/Privacy/Privacy';
import Button from '../../atoms/Button/Button';
import TextPoll from '../../molecules/TextPoll/TextPoll';
import Survey from '../../molecules/Survey/Survey';

const Poll = () => {
  const [selectedOption, SetSelectedOption] = useState('image');
  const changeHandler = (e) => {
    SetSelectedOption(e.target.value);
  };
  return (
    <div className='w-21xl md:w-39xl bg-white rounded-sm p-4'>
      <div className='flex'>
        <div className='mr-2'>
          <Avatar size='medium' variant='filled' />
        </div>
        <TabGroup
          changeHandler={changeHandler}
          selectedOption={selectedOption}
        />
      </div>
      <Input placeholder='What do you want to ask about' />
      <div className='mt-4'>
        {selectedOption === 'image' ? (
          <ImageUpload />
        ) : selectedOption === 'text' ? (
          <TextPoll />
        ) : (
          <Survey />
        )}
      </div>
      <hr class='mt-4 text-grey-shd6' />
      <div class='flex justify-between mt-4'>
        <Privacy />
        <Button size='small' variant='primary'>
          Post
        </Button>
      </div>
    </div>
  );
};

export default Poll;
