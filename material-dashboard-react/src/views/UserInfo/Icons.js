import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/trophytemp.png";
import { black } from "color-name";
import { red } from "@material-ui/core/colors";

import Table from "components/Table/Table.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>User Profile</h4>
              <p className={classes.cardCategoryWhite}>User Badge Level</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="User ID"
                    id="user-id"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "0382937630",
                      disabled: true
                    }}
                  />
                </GridItem>
                {/*<GridItem xs={12} sm={12} md={3}>*/}
                {/*  <CustomInput*/}
                {/*    labelText="Last Active"*/}
                {/*    id="last-active"*/}
                {/*    formControlProps={{*/}
                {/*      fullWidth: true,*/}
                {/*    }}*/}

                {/*    inputProps={{*/}
                {/*      value: "MMDDYYY",*/}
                {/*      disabled: true,*/}
                {/*    }}*/}
                {/*  />*/}
                {/*</GridItem>*/}
                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "milo@catmail.com",
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Active - Game"
                    id="first-active"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "MMDDYYY - Game ID",
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Active - Game"
                    id="last-active"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "MMDDYYY - Game ID",
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    // labelText="Rogueram"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "User Activity",
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Game"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "Rogueram",
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Transaction ID"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "0783640287",
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Date/Time"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: "MMDDYYY",
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/*<GridContainer>*/}
              {/*  <GridItem xs={12} sm={12} md={12}>*/}
              {/*    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>*/}
              {/*    <CustomInput*/}
              {/*      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."*/}
              {/*      id="about-me"*/}
              {/*      formControlProps={{*/}
              {/*        fullWidth: true*/}
              {/*      }}*/}
              {/*      inputProps={{*/}
              {/*        multiline: true,*/}
              {/*        rows: 5*/}
              {/*      }}*/}
              {/*    />*/}
              {/*  </GridItem>*/}
              {/*</GridContainer>*/}
            </CardBody>
            {/*<CardFooter>*/}
            {/*  <Button color="primary">Update Profile</Button>*/}
            {/*</CardFooter>*/}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>RANK</h6>
              <h4 className={classes.cardTitle}>$TOTAL AMNT SPENT</h4>
              <p className={classes.description}>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["GameID", "Amount Spent In Game"]}
                  tableData={[["001", "$XX.XX"]]}
                />
              </p>

              {/*<Button color="primary" round>*/}
              {/*  Follow*/}
              {/*</Button>*/}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
