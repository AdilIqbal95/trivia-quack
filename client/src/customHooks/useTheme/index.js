import { useState, useEffect } from'react';

const useTheme = (currentQuestion) => {
    const [theme, setTheme] = useState("theme-planet-1");
    useEffect(() => {
      let question = currentQuestion;
      if (question % 3 === 2) {
        console.log('Test 3')
        setTheme("theme-planet-3");
      } else if (question % 3 === 1) {
        console.log('Test 2')
        setTheme("theme-planet-2");
      } else {
        console.log('Test 1')
        setTheme("theme-planet-1");
      }
    },[currentQuestion])
    return theme;
}

export default useTheme;