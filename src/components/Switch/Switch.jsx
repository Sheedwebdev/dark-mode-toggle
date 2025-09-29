import React  from 'react';
import styled from 'styled-components';

  function Switch() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    return (
      <Wrapper isDark={isDarkMode}>
          <Button onClick={() => {
            setIsDarkMode(!isDarkMode);
            console.log(isDarkMode);
          }}
          >
            {isDarkMode? 'Switch to Light Mode': 'Switch to Dark Mode'}
          </Button>
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${({ isDark }) => 
      isDark ? "hsl(0deg 0% 0%)" : "hsl(0deg 0% 100%)"};
  `;




  const Button = styled.button`
	  background: hsl(45deg 100% 50%);
	  color: hsl(0deg 0% 0%);
	  padding: 20px 20px;
	  border-radius: 8px;
	  border: none;
	  font-size: 1.5rem;
      font-weight: 900;
	  cursor: pointer;
  `;
 
  // const Card = styled.div`
  // display: flex;
  // height: 500px;
  // width: 350px;
  // background: hsl(0deg 0% 100%);;
  // justify-content: center;
  // align-items: center;
  // box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%);
  // `;

export default Switch;