# 6. React Components & UI Reusability

We can reuse most of the components, both React and Styled components, except the Body component, since it contains the specific components for the other example.

The new component would have a similar structure to this:
```
  <Modal>
    <ModalHeader>
      <Title>New Collection</Title>
    </ModalHeader>
    <BodyNEW>                             {/*New Component*/}
      <ModalBody>
        <InputFile></InputFile>           {/*New Component*/}
        <Input></Input>                   {/*New Component*/}
        <InputTextArea></InputTextArea>   {/*New Component*/}
      </ModalBody>
    <BodyNEW>
    <Footer>
      <div className = {'footer'}>
          <Button color = "grey">Cancel</Button>
          <Button color = "rgb(0,206,205)">Submit</Button>
      </div>
    </Footer>
  </Modal>
```

As we can see, we have to create only one React component, for the new body, and 3 styled-components, one for every input type (file, text and text area).
