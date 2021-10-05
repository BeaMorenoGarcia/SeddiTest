import React from 'react';
import { Checkbox } from '../../styles/input'
import { ModalBody } from '../../styles/modal-body'
import { Label } from '../../styles/label';

class Body extends React.Component {
  render() {

    const val = 20;
    var counter = 1;
    const items = []
  
    while (counter<=val) {
      items.push(<div className={'option'} key={counter}><Label>Collection {counter} </Label><Checkbox type="checkbox"></Checkbox></div>)
      counter++;
    }
    
    return (
      <>
      <div className={'first-option'} key="0"><Label>New Collection</Label><Checkbox type="checkbox"></Checkbox></div>
      <ModalBody>
        {items}
      </ModalBody>
      </>
    )
  }
}

export default Body;