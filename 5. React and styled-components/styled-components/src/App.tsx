import React from 'react';
import Mockup from './components/mockup/Mockup'

class App extends React.Component {

  render() {
    const props = {
      title: "Copy to...",
      show: true
    }
    return (
      <>
        <Mockup {...props}></Mockup>
      </>
    )
  }

}

export default App;
