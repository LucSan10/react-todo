interface Props {
  count: number;
}

const CounterDisplay = (props: Props) => {
  return <>Current value is {props.count}</>;
};

export default CounterDisplay;
