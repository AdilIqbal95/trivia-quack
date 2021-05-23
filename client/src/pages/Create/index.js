import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { API_ADDRESS } from '../../actions/globalVars';

import { CreateForm } from '../../components';

const Lobby = () => {
  const history = useHistory();

  const createRoom = async (amount, category, difficulty, type) => {
      try {
          let { data } = await axios.post(`${API_ADDRESS}/games?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
          console.log(data);
          history.push(`/lobby/${data}`)     
      } catch (err) {
          console.warn(err);
      }
  }

  return (
    <main id="create" className="container">
      <CreateForm createRoom={createRoom} />
    </main>
  );
};

export default Lobby;