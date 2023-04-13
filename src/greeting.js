/* eslint-disable import/no-cycle */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessageThunk } from './App';

export default function Greeting() {
  const greetingMessage = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMessageThunk());
  }, [dispatch]);
  return (
    <h1>
      Message:
      {greetingMessage}
      {' '}
    </h1>
  );
}
