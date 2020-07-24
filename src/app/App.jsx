import React, { Fragment } from "react";
import { Container,  Icon, Menu } from "semantic-ui-react";
import CountryDashboard from "../features/components/country/countryDashboard/CountryDashboard";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <Fragment>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Menu secondary inverted fixed="top">
          <Container>
            <Menu.Item position="left">
              <Icon name="world" size="large" />
              Countries Info
            </Menu.Item>

            <Menu.Item position="right">
              <Icon size="large" color="orange"  name="sun" />
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode((prevMode) => !prevMode)}
                />
                <span className="slider round"></span>
              </label> 
              <Icon size="large"  name="moon" />
            </Menu.Item>
          </Container>
        </Menu>
        <Container>
          <CountryDashboard />
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
