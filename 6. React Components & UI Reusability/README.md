# 6. React Components & UI Reusability

We can reuse most of the components:

The new component would have a similar structure to this:
```
<Mockup {...props}>
  <Modal>
    <ModalHeader>
      <Title>{this.title}</Title>
    </ModalHeader>
    <Body>
      <ModalBody {...this.propsBody}>
        <InputFile></InputFile>           {/*New Component*/}
        <Input></Input>                   {/*New Component*/}
        <InputTextArea></InputTextArea>   {/*New Component*/}
        <InputUser></InputUser>           {/*New Component*/}
      </ModalBody>
    <Body>
    <Footer>
      <div className = {'footer'}>
          <Button color = "grey">Cancel</Button>
          <Button color = "rgb(0,206,205)">Submit</Button>
      </div>
    </Footer>
  </Modal>
</Mockup>
```

When we call the Mockup Component we have to pass as properties:
- title: the title of the modal.
- show: it has a false value.

As we can see, we have to create only 4 styled-components, one for every input type (file, text and text area) and the list of users.
