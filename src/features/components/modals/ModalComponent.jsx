import React, { Component } from "react";
import { Button, Image, Modal, Flag, Grid, Table } from "semantic-ui-react";
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
          {" "}
          <Image src={country.flag}></Image>{" "}
        </button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>Country Details:</Grid.Column>
                <Grid.Column width={9}></Grid.Column>
                <Grid.Column width={1}>
                  <Button color="red" icon="close" onClick={this.close} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Header>
          <Modal.Content image>
            <Grid celled>
              <Grid.Column width={8}>
                <SimpleMap latlng={country.latlng} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Modal.Description>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={16}>
                        <Table color="green" inverted>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Country Name:</Table.HeaderCell>
                              <Table.HeaderCell>Capital City:</Table.HeaderCell>
                              <Table.HeaderCell>ISO Code:</Table.HeaderCell>
                              <Table.HeaderCell>Flag:</Table.HeaderCell>
                              <Table.HeaderCell>
                                Population Count
                              </Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>

                          <Table.Body>
                            <Table.Cell>{country.name}</Table.Cell>

                            <Table.Cell>{country.capital}</Table.Cell>

                            <Table.Cell>{country.cioc}</Table.Cell>

                            <Table.Cell>
                              <Flag name={country.alpha2Code.toLowerCase()} />
                            </Table.Cell>

                            <Table.Cell>{country.population}</Table.Cell>
                          </Table.Body>
                        </Table>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Table color="green" inverted>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Languages:</Table.HeaderCell>
                              <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>

                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>Name</Table.Cell>
                              <Table.Cell>
                                {country.languages[0].name}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>Native Name</Table.Cell>
                              <Table.Cell>
                                {country.languages[0].nativeName}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>ISO639_1</Table.Cell>
                              <Table.Cell>
                                {country.languages[0].iso639_1}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>ISO639_2</Table.Cell>
                              <Table.Cell>
                                {country.languages[0].iso639_2}
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Table color="green" inverted>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Currencies:</Table.HeaderCell>
                              <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>

                          <Table.Body>
                            <Table.Row>
                              <Table.Cell>Name</Table.Cell>
                              <Table.Cell>
                                {country.currencies[0].name}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>Code</Table.Cell>
                              <Table.Cell>
                                {country.currencies[0].code}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>Symbol</Table.Cell>
                              <Table.Cell>
                                {country.currencies[0].symbol}
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Modal.Description>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
