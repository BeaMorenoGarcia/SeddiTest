import React from 'react';
import { Input } from '../../styles/input'
import { ModalBody } from '../../styles/modal-body'
import { Title } from '../../styles/title';
import { Label } from '../../styles/label';

class Body extends React.Component {
  render() {

    const val = 20;
    var counter = 1;
    const items = []
  
    while (counter<=val) {
      items.push(<Label key={counter}>Colection {counter} <Input type="checkbox"></Input></Label>)
      counter++;
    }
    
    return (
      <>
      <Title>Copy to...</Title>
      <ModalBody>
        {items}
      </ModalBody>
      </>
    )
  }
}

export default Body;