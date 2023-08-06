// 깊어지는 props를 대체할 때 사용할 수 있음
// 전역적으로 사용되는 데이터를 모든 컴포넌트에서 공유할 수 있음
// 근데 context를 사용하면 컴포넌트를 재사용하기 어려워질 수 있음
// 단순히 prop drilling을 피하기 위한 목적이면 Component Composition을 먼저 고려

import { useState } from "react";
import Page from "./1/Page";
import { ThemeContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/UserContext";

function IntroPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    // Page와 그 하위 컴포넌트까지 싹 다 적용됨
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />;
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default IntroPage;
