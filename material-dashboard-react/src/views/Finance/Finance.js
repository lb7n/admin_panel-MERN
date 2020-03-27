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
import {ROUTE_FINANCE} from "../../service/financeapi";

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

export default function FinancePage() {
  const classes = useStyles();

  const [financeListState, setFinanceListState] = useState([])

  useEffect(()=>{
    const timer = setTimeout(() => {
      checkFinanceApi().then()
    }, 200);
    return () => clearTimeout(timer);
  },[])
  const checkFinanceApi = async () =>{
    const resp = await UserApi.main.get(ROUTE_FINANCE, null, null);
    if (resp.error !== null) {
      console.log(resp.error)
      alert('Bad Request ' + resp.error)
      return;
    }
    await parseFinances(resp.data.finances);
  }
  const parseFinances = async (myData) =>{
    console.log(myData)
    let myCollection = []
    if (myData) {
      for (let i = 0; i < myData.length; i++) {
        myCollection.push([myData[i].gameID, myData[i]._id, myData[i].userID,
          myData[i].itemID, myData[i].dateCharged, myData[i].methodCharged, myData[i].amountCharged])
        console.log('sup')

      }
    }
    console.log(myCollection)
    setFinanceListState(myCollection)
  }


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Financial Data</h4>
            <p className={classes.cardCategoryWhite}>
              Incoming financial records from user purchases
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Game ID", "Transaction ID", "User ID", "ItemID", "Date/Time", "Method Charged", "Amount"]}
              tableData={financeListState}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
