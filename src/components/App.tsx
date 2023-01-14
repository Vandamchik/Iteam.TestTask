import React from 'react';
import { useGetGamesByTokenQuery } from '../store/service/gamesApi'


export function App() {
    const { data } = useGetGamesByTokenQuery("");

    console.log(data)

  return (
    <div>
     Start
    </div>
  );
}
