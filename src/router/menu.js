// LIBS
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

// ICONS
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BusinessIcon from "@material-ui/icons/Business";

const menu = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem component={Link} to="/" button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to="/brands" button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Brands" />
      </ListItem>
      <ListItem component={Link} to="/payments" button>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItem>
      <ListItem component={Link} to="/balances" button>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="Balance" />
      </ListItem>
      <ListItem component={Link} to="/markers" button>
        <ListItemIcon>
          <ControlPointIcon />
        </ListItemIcon>
        <ListItemText primary="Markers" />
      </ListItem>
      <ListItem component={Link} to="/reports" button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem component={Link} to="/projects" button>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </List>
  );
};

export default menu;
