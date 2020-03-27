import React, {useEffect, useState} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import DateRange from "@material-ui/icons/DateRange";
import TrackChanges from "@material-ui/icons/TrackChanges";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney"
import BugReport from "@material-ui/icons/BugReport";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  newUsersChart,
  activeIssuesChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {ROUTE_USER, UserApi} from "../../service/userapi";
import {ROUTE_FINANCE, FinanceApi} from "../../service/financeapi";

const faker = require("faker")
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  const [userCount, setUserCount] = useState('')
  const [financeCount, setFinanceCount] = useState('')

  useEffect(()=>{
    const timer = setTimeout(() => {
      checkUserApi().then()
      checkFinanceApi().then()
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
    // await countUsers(resp.data.users.length);
      setUserCount(resp.data.users.length)
  }
  const checkFinanceApi = async () =>{
    const resp = await FinanceApi.main.get(ROUTE_FINANCE, null, null);
    if (resp.error !== null) {
      console.log(resp.error)
      alert('Bad Request ' + resp.error)
      return;
    }
    await calculateFinancials(resp.data.finances);
    // setFinanceCount(resp.data.finances.length)

  }
  const calculateFinancials = async(myData)=>{
    console.log(myData)
    let total = 0
    for (let i=0; i<myData.length; i++){
      console.log(myData[i].amountCharged)
      total += Number(myData[i].amountCharged)
    }
    console.log(total)
    setFinanceCount(total)
  }



  const tempUser = async (e) =>{
    e.preventDefault()
    console.log('sup')
    const resp = await UserApi.main.post(`${ROUTE_USER}/new`,
        null,
        {
          userEmail: faker.internet.email(),
          firstActive: faker.date.past(),
          lastActive: faker.date.recent(),
          gamesLinked: faker.hacker.verb(),
          totalSpent: faker.finance.amount()
        });
    console.log(resp)

  }

  const tempPurchase = async (e) =>{
    e.preventDefault()
    console.log('sup')
    const resp = await FinanceApi.main.post(`${ROUTE_FINANCE}/new`,
        null,
        {
          userID : faker.finance.account(),
          itemID: faker.finance.account(),
          gameID: faker.finance.mask(),
          dateCharged: faker.date.recent(),
          amountCharged: faker.commerce.price(),
          methodCharged: faker.finance.bic()
        });
    console.log(resp)

  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <SupervisorAccount />
              </CardIcon>
              <p className={classes.cardCategory}>Total Users</p>
              <h3 className={classes.cardTitle}>{userCount}</h3>
              {/*<form onSubmit={tempUser}>*/}
              {/*  <button type="submit" >click me</button>*/}
              {/*</form>*/}

            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>${financeCount}</h3>
              {/*<form onSubmit={tempPurchase}>*/}
              {/*  <button type="submit" >click me</button>*/}
              {/*</form>*/}
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Issues Fixed</p>
              <h3 className={classes.cardTitle}>#</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Jira
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/*<GridItem xs={12} sm={6} md={3}>*/}
        {/*  <Card>*/}
        {/*    <CardHeader color="info" stats icon>*/}
        {/*      <CardIcon color="info">*/}
        {/*        <BugReport />*/}
        {/*      </CardIcon>*/}
        {/*      <p className={classes.cardCategory}>Bugs</p>*/}
        {/*      <h3 className={classes.cardTitle}>Num</h3>*/}
        {/*    </CardHeader>*/}
        {/*    <CardFooter stats>*/}
        {/*      <div className={classes.stats}>*/}
        {/*        <TrackChanges />*/}
        {/*        Tracked from Jira*/}
        {/*      </div>*/}
        {/*    </CardFooter>*/}
        {/*  </Card>*/}
        {/*</GridItem>*/}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={newUsersChart.data}
                type="Bar"
                options={newUsersChart.options}
                responsiveOptions={newUsersChart.responsiveOptions}
                listener={newUsersChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>New Users</h4>
              <p className={classes.cardCategory}>Current Monthly New Users</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated recently
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/*<GridItem xs={12} sm={12} md={4}>*/}
        {/*  <Card chart>*/}
        {/*    <CardHeader color="danger">*/}
        {/*      <ChartistGraph*/}
        {/*        className="ct-chart"*/}
        {/*        data={activeIssuesChart.data}*/}
        {/*        type="Line"*/}
        {/*        options={activeIssuesChart.options}*/}
        {/*        listener={activeIssuesChart.animation}*/}
        {/*      />*/}
        {/*    </CardHeader>*/}
        {/*    <CardBody>*/}
        {/*      <h4 className={classes.cardTitle}>Issues</h4>*/}
        {/*      <p className={classes.cardCategory}>Current Active Issues</p>*/}
        {/*    </CardBody>*/}
        {/*    <CardFooter chart>*/}
        {/*      <div className={classes.stats}>*/}
        {/*        <AccessTime /> updated recently*/}
        {/*      </div>*/}
        {/*    </CardFooter>*/}
        {/*  </Card>*/}
        {/*</GridItem>*/}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Game Stats</h4>
              <p className={classes.cardCategoryWhite}>Overview of Game Data</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Game", "Version", "Users"]}
                tableData={[["001", "Rougueram", "1.0", "XXXX"]]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
