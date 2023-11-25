import * as React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import RouterComponent from "./routes";
import Layout from "./layout";
const App = () => {
  const { themeMode } = useSelector((state: RootState) => state.themeState);
  const { userData } = useSelector((state: RootState) => state.authState);

  React.useEffect(() => {
    const body: HTMLBodyElement | null = document.querySelector("body");

    if (themeMode === "dark") {
      body?.classList.remove("light-mode");
      body?.classList.add("dark-mode");
    } else {
      body?.classList.remove("dark-mode");
      body?.classList.add("light-mode");
    }
  }, [themeMode]);

  return (
    <ThemeProvider mode={themeMode}>
      <Layout>
        <RouterComponent isLoggedIn={Boolean(userData.isLoggedIn)} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
