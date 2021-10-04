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
      items.push(<div className={'option'}><Label key={counter}>Collection {counter} </Label><Input type="checkbox"></Input></div>)
      counter++;
    }
    
    return (
      <>
      <ModalBody>
        <div className={'option'}><Label key='0'>New Collection</Label><Input type="checkbox"></Input></div>
        {items}
      </ModalBody>
      </>
    )
  }
}

export default Body;