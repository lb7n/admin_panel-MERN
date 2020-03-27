import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {ROUTE_USER, UserApi} from "../../service/userapi";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);



export default function UserList() {
  const classes = useStyles();

  const [userListState, setUserListState] = useState([])

  useEffect(()=>{
    const timer = setTimeout(() => {
      checkUserApi().then()
    }, 200);
    return () => clearTimeout(timer);
  },[])
  const checkUserApi = async () =>{
    const resp = await UserApi.main.get(ROUTE_USER, null, null);
    if (resp.error !== null) {
      console.log(resp.error)
      alert('Bad Request ' + resp.error)
      return;
    }
    await parseUsers(resp.data.users);
  }
  const parseUsers = async (myData) =>{
    console.log(myData)
    let myCollection = []
    if (myData) {
      for (let i = 0; i < myData.length; i++) {
        myCollection.push([myData[i]._id, myData[i].userEmail, myData[i].firstActive,
            myData[i].lastActive, myData[i].gamesLinked, myData[i].totalSpent])
        console.log('sup')

      }
    }
    console.log(myCollection)
    setUserListState(myCollection)
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User Data</h4>
            <p className={classes.cardCategoryWhite}>Activity for user data</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Email", "First Active", "Last Log In", "Games Linked", "Total Spent"]}
              tableData=
                // ["1986596", "example@example.com", "Milo's iphone", "MMDDYYY"],
                {userListState}

            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
