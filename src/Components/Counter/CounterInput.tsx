interface Props {
  setHowMuch: any;
}

const CounterInput = (props: Props) => {
  return (
    <label>
      How Much?
      <input
        type="number"
        onBlur={(e) => props.setHowMuch(Number(e.target.value))}
      />
    </label>
  );
};

export default CounterInput;
