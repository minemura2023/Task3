/* eslint react-hooks/exhaustive-deps: off */
import React, {useEffect,useState} from 'react';
import {ColorComponents} from './components/ColorComp';
const App = () => {
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(true);
  //カウントアップ
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //顔文字の表示非表示の切り替え
  const onClickSwitchShowFlag = () => {
    setShowFlag(!showFlag);
  }
  //numが変化した時のみ、処理を行う
  useEffect(() => {
    if (num % 3 === 0) {
      showFlag || setShowFlag(true);
    } else {
      showFlag && setShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorComponents color='blue'>お元気ですか？</ColorComponents>
      <ColorComponents color='pink'>元気です！</ColorComponents>
      <button onClick={onClickCountUp}>カウントアップ</button><br/>
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {showFlag && <p>(^^)/</p>}
    </>
  );
};

//他ファイルも読み取れるようにする
export default App;
