import React from "react";
import Typography from "@material-ui/core/Typography";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AppFooter = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <footer >
      <Typography variant={"h6"} align={"center"} gutterBottom>
        Footer
      </Typography>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label={"Recents"} value={"recents"} icon={<RestoreIcon />} />
        <BottomNavigationAction label={"Favorite"} value={"favorite"} icon={<FavoriteIcon />} />

        <BottomNavigationAction label={"Location"} value={"location"} icon={<LocationOnIcon />} />
        <BottomNavigationAction label={"Folder"} value={"folder"} icon={<FolderIcon />} />
      </BottomNavigation>
        <Typography align={"center"} color={"textSecondary"} variant={"subtitle1"}>
            г. Киев м. Контрактовая пл. ул. Сергея Бачинского
        </Typography>
    </footer>
  );
};

export default AppFooter;
