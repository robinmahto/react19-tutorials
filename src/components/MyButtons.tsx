interface propsData {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const MyButton = ({ count, setCount }: propsData) => {
  const loginHandler = () => {
    setCount((prevValue: number) => prevValue + 1);
  };

  return (
    <button className="mybutton" onClick={loginHandler}>
      clicked {count}
    </button>
  );
};
