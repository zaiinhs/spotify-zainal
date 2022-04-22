const uid: () => string = () => {
  const head: string = Date.now().toString(36);
  const tail: string = Math.random().toString(36).slice(2);

  return head + tail;
};

export default uid;
