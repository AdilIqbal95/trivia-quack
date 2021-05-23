import {useEffect} from 'react';
import { playerReady } from '../../actions'
import io from 'socket.io-client';
import { useDispatch } from 'react-redux'
import { SOCKET_ADDRESS } from '../../actions/globalVars';

const serverEndpoint = `${SOCKET_ADDRESS}`

const useSocketReady = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const useSocket = io(serverEndpoint);
    useSocket.on("player-ready", (socket) => {
      dispatch(playerReady(socket))
    });
  },[])
}

export default useSocketReady;