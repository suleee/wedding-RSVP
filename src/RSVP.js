import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./RSVP.css";
import "./Popup.css";
import {
  Button,
  Modal,
  Form,
  Input,
  Radio,
  InputNumber,
  Checkbox,
  Row,
  Col
} from "antd";
const { TextArea } = Input;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const RSVPForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    state = {
      value: 1
    };

    onChange = e => {
      console.log("radio checked", e.target.value);
      this.setState({
        value: e.target.value
      });
    };
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="*RSVP: please do before end of May*"
          okText="Create"
          style={{ top: 20 }}
          onCancel={onCancel}
          onOk={onCreate}
          footer={null}
          className="text-center"
        >
          <div>
            {/* <p>We are invite you to our wedding. We hope you can make it!</p> */}
            <div className="popup-date">
              <h4>Wedding Details</h4>
              <p>Dress code: semi formal</p>
              <p className="date">August 11, 2019 | 5:30 PM</p>
            </div>
          </div>
          <Form layout="vertical">
            <Form.Item className="collection-create-form_last-form-item">
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Yes, I am attending</Radio>
                <Radio value={2}>Sorry, I can not attending</Radio>
              </RadioGroup>
            </Form.Item>
            <Row className="flex name-con">
              <Col xs={24} sm={12}>
                <Form.Item className="flex num flexWrap name" label="Name:">
                  {getFieldDecorator("Name")(
                    <Input type="textarea" placeholder="hello@gmail.com" />
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item className="flex num flexWrap email" label="Email:">
                  {getFieldDecorator("Email")(
                    <Input type="textarea" placeholder="hello@gmail.com" />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              className="flex num flexWrap textbox"
              label="How do you know Liudas and Jisu?"
            >
              {getFieldDecorator("textbox")(
                <Input type="textarea" placeholder="e.g. Friend of Liudas" />
              )}
            </Form.Item>
            <Form.Item
              className="flex num flexWrap"
              label="Total number of your guests, including yourself:"
            >
              <InputNumber
                min={0}
                max={2}
                defaultValue={0}
                onChange={onChange}
              />
            </Form.Item>
            <Form.Item
              className="collection-create-form_last-form-item"
              label="Please choose one main menu per person:"
            >
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Row>
                  <Col xs={12} sm={6}>
                    <Checkbox value="A">Steak</Checkbox>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Checkbox value="B">Salmon</Checkbox>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Checkbox value="C">Rib</Checkbox>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Checkbox value="D">Other</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item className="flex num flexWrap comments" label="Comments:">
              {getFieldDecorator("description")(<TextArea type="textarea" />)}
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={this.showModal}>
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  // saveFormRef = formRef => {
  //   this.formRef = formRef;
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log("Received values of form: ", values);
  //     }
  //   });
  // };

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div className="RSVP" id="rsvp">
        <div className="title">
          <h3>enter the name on your invitation.</h3>
        </div>
        <Form onSubmit={this.handleSubmit} className="">
          {/* <Form.Item>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <div className="nameVerification">
                <Input placeholder="e.g. Jisu Lee" />{" "}
              </div>
            )}
          </Form.Item> */}

          <div className="RSVPbtn">
            <Button type="" onClick={this.showModal}>
              <p>RSVP</p>
            </Button>
          </div>
        </Form>
        <RSVPForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default CollectionsPage;
