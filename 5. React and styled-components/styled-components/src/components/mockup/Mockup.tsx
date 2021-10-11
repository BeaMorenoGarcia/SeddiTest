import React from 'react';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import { Modal } from '../../styles/modal'
import { Title } from '../../styles/title';
import { ModalHeader } from '../../styles/modal-header';

class Mockup extends React.Component {

  title: string;
  propsBody;
  constructor(propiedades: any) {
    super(propiedades);
    this.title = propiedades.title;
    this.propsBody = {
      show: propiedades.show
    }
  }

  render() {
    return (
      <>
      <Modal>
        <ModalHeader>
          <Title>{this.title}</Title>
        </ModalHeader>
        <Body {...this.propsBody}></Body>
        <Footer></Footer>
      </Modal>
      </>
    )
  }
}

export default Mockup;