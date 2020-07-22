import React, { Component } from "react";
import {
  Button,
  Image,
  Modal,
  Grid,
  Segment,
  Container,
  Card,
  Label,
} from "semantic-ui-react";
import SimpleMap from "../map/SimpleMap";

class ModalComponent extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { country } = this.props;

    return (
      <div>
        <button
          onClick={this.show("blurring")}
          style={{ border: "0", padding: "0", cursor: "pointer" }}
        >
          <Image src={country.flag}></Image>
        </button>

        <Modal basic dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>
            <Container>
              <Grid>
                <Grid.Column floated="right" width={1}>
                  <Button color="red" icon="close" onClick={this.close} />
                </Grid.Column>
              </Grid>
            </Container>
          </Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={country.flag} />
            <Modal.Description>
              <Container>
                <Grid>
                  <Label color="teal" style={{ margin: "10px" }}>
                    {" "}
                    Country Name:
                    <Label.Detail>{country.name}</Label.Detail>
                  </Label>
                  <Label color="teal" style={{ margin: "10px" }}>
                    {" "}
                    ISO Code:
                    <Label.Detail>{country.cioc} </Label.Detail>
                  </Label>
                  <Label color="teal" style={{ margin: "10px" }}>
                    {" "}
                    Capital City:
                    <Label.Detail>{country.capital}</Label.Detail>
                  </Label>
                  <Label color="teal" style={{ margin: "10px" }}>
                    {" "}
                    Population:
                    <Label.Detail>{country.population}</Label.Detail>
                  </Label>
                  {country.languages.map((language) => (
                    <Grid key={language.name}>
                      <Label color="blue" style={{ margin: "10px" }}>
                        {" "}
                        Language Name:
                        <Label.Detail key={language.name} >{language.name}</Label.Detail>
                      </Label>
                      <Label color="blue" style={{ margin: "10px" }}>
                        {" "}
                        Native Name:
                        <Label.Detail key={language.name} >{language.nativeName} </Label.Detail>
                      </Label>
                      <Label color="blue" style={{ margin: "10px" }}>
                        {" "}
                        Language ISO639_1:
                        <Label.Detail key={language.name}>{language.iso639_1}</Label.Detail>
                      </Label>
                      <Label color="blue" style={{ margin: "10px" }}>
                        {" "}
                        Language ISO639_1:
                        <Label.Detail key={language.name}>{language.iso639_2}</Label.Detail>
                      </Label>
                    </Grid>
                  ))}

                  {country.currencies.map((currency) => (
                    <Grid key={currency.name}>
                      <Label color="yellow" style={{ margin: "10px" }}>
                        {" "}
                        Currency Name:
                        <Label.Detail key={currency.name}>{currency.name} </Label.Detail>
                      </Label>
                      <Label color="yellow" style={{ margin: "10px" }}>
                        {" "}
                        Currency Code:
                        <Label.Detail key={currency.name}>{currency.code}</Label.Detail>
                      </Label>
                      <Label color="yellow" style={{ margin: "10px" }}>
                        {" "}
                        Currency Symbol:
                        <Label.Detail key={currency.name}>{currency.symbol}</Label.Detail>
                      </Label>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <SimpleMap latlng={country.latlng} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
