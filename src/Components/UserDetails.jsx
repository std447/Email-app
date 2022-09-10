import { FormGroup, Row, Label, Input, Col, Container } from "reactstrap";

const UserDetails = () => {
  return (
    <>
      <h1>Please fill your details below:</h1>
      <div className="user-form-section">
        <Container>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input id="subject" name="subject" type="text" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="reference">Reference</Label>
                <Input id="reference" name="reference" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="yop">Year Of Experience</Label>
                <Input id="yop" name="yop" type="text" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="profile">Profile</Label>
                <Input id="profile" name="profile" type="profile" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input id="address" name="address" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="skills">Skills</Label>
                <Input type="textarea" id="skills" name="skills" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="linkedIn">LinkedIn Link</Label>
                <Input id="linkedIn" name="linkedIn" type="text" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="github">Github</Label>
                <Input id="github" name="github" type="text" />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default UserDetails;
