// components/Greeting.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../redux/getData';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const message = useSelector((state) => state.text);

  return (
    <div>
      <h1>{message.data.greeting}</h1>
    </div>
  );
}

export default Greeting;
