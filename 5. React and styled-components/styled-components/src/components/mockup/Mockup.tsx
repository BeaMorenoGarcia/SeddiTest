import React from 'react';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import { Modal } from '../../styles/modal'
import { Title } from '../../styles/title';
import { ModalHeader } from '../../styles/modal-header';

const Mockup:React.FC = ()=> (
  <>
  <Modal>
    <ModalHeader>
      <Title>Copy to...</Title>
    </ModalHeader>
    <Body></Body>
    <Footer></Footer>
  </Modal>
  </>
)

export default Mockup;