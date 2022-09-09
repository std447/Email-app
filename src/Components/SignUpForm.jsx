import { useState } from "react";
import {
  Container,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";

const SignUpForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    hrEmailData: "",
  });

  const _handleInputChange = (e) => {
    const { name, type, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
      <Container>
        <h1>Sign Up</h1>
        <div className="Form-section">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={profile.name}
              id="name"
              onChange={_handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={profile.email}
              id="email"
              onChange={_handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input
              type="number"
              name="phoneNumber"
              value={profile.phoneNumber}
              id="phoneNumber"
              onChange={_handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="hrEmailData">File</Label>
            <Input
              type="file"
              name="hrEmailData"
              value={profile.hrEmailData}
              id="hrEmailData"
              onChange={_handleInputChange}
            />
            <FormText color="muted">
              Please Upload .xlsx(Excel Files) only
            </FormText>
          </FormGroup>
          <Button>Submit</Button>
        </div>
      </Container>
      <Container>
        <div className="result">
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Phone Number: {profile.phoneNumber}</p>
          <p>File: {profile.hrEmailData}</p>
        </div>
      </Container>
      ;
    </>
  );
};

export default SignUpForm;
