import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

//Firebase上のメモリー監視用フック
//変更があったタイミングで対象本のメモリーを返却
export const useMemory = (id: string) => {
  const [memories, setMemory] = useState<any>();
  useEffect(() => {
    firebase
      .firestore()
      .doc(`books/${id}`)
      .onSnapshot((snap) => {
        setMemory(snap.data()?.memories || []);
      });
  }, []);
  return memories;
};

//メモリー作成（追加、編集、削除、全てこの関数で行う）
//配列丸ごと更新させる
export const newMemory = (id: string, newMemories: string) => {
  return firebase.firestore().doc(`books/${id}`).update({
    memories: newMemories,
  });
};