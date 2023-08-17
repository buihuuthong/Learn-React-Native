import React, {useState, useRef, useCallback, useMemo} from 'react';
import {View, Text, Button} from 'react-native';

const AdvancedHook = () => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const countRef = useRef(count);
  countRef.current = count;

  const evenOrOdd = useMemo(() => {
    return countRef.current % 2 === 0 ? 'Even' : 'Odd';
  }, [countRef.current]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Count: {count}</Text>
      <Text style={{fontSize: 18}}>Current Count is {evenOrOdd}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default AdvancedHook;
