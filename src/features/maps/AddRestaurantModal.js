import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Item,
  TextArea,
  Label,
} from "semantic-ui-react";
import Restaurant from "../../app/models/restaurant";

const AddRestaurantModal = ({
  lat,
  long,
  addRestaurant,
  open,
  setOpen,
  closeModal,
}) => {
  //   const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    let newRest = new Restaurant(name, address, lat, long, []);
    addRestaurant(newRest);
    setOpen(false);
  };

  return (
    <div>
      <Modal size={"tiny"} open={open} onClose={closeModal}>
        <Modal.Header>Add a new Restaurant</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Group widths={'equal'}>
                <Form.Field>
                  <Label pointing="below">Latitude</Label>
                  <Input disabled defaultValue={lat} />
                </Form.Field>
                  <Form.Field>
                    <Label pointing="below">Longitude</Label>
                    <Input disabled defaultValue={long} />
                  </Form.Field>
              </Form.Group>
              <Form.Field>
                <Item.Extra>
                    <Label pointing="below">Name</Label>
                  <Input
                    placeholder="Name"
                    onChange={(e, { name, value }) => setName(value)}
                  />
                </Item.Extra>
              </Form.Field>
              <Form.Field>
                {/* <Item.Extra> */}
                <Label pointing="below">Address</Label>
                <TextArea
                  placeholder="Address"
                  onChange={(e, { name, value }) => setAddress(value)}
                />
                {/* </Item.Extra> */}
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color="black" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Save"
            onClick={handleSubmit}
            disabled={name === "" || address === ""}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default AddRestaurantModal;
