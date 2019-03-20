import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { countries, statesFromMexico } from "../../../../utils/countrys";
const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    bold: true
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "100%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

class PersonalDataFields extends Component {
  render() {
    const { classes, onChange, onChangePattern, state } = this.props;
    let stateFrom = "";
    if (state.country === "México") {
      console.log("Estados de Mexico");
      stateFrom = (
        <TextField
          id="state"
          select
          label="Estado"
          name="state"
          // disabled="true"
          style={{
            marginLeft: 5,
            marginRight: 12,
            width: "98%"
          }}
          // className={classes.textField}
          value={state.state}
          onChange={onChange}
          SelectProps={{
            MenuProps: {
              width: "100%"
            }
          }}
          margin="normal"
        >
          {statesFromMexico.map(option => (
            <MenuItem key={option.code} value={option.code}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      );
    } else {
      stateFrom = (
        <TextField
          id="state"
          name="state"
          label="Estado"
          fullWidth
          style={{ marginTop: "15px" }}
        />
      );
    }
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>
                <strong>Información Personal</strong>
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Grid container spacing={24}>
                <Grid item xs={1}>
                  <TextField
                    inputProps={{
                      maxLength: 6,
                      pattern: "^[0-9]*$"
                    }}
                    id="clave"
                    name="clave"
                    label="Clave"
                    value={state.clave}
                    onChange={onChangePattern}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <TextField
                    value={state.names}
                    id="name"
                    name="names"
                    label="Nombre(s)"
                    onChange={onChangePattern}
                    fullWidth
                    autoComplete="fname"
                    inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    // required
                    inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
                    id="lastName"
                    name="lastName"
                    label="Apellido Paterno"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    // required
                    inputProps={{ pattern: "[a-zA-Z0-9\\s.,/'-~¨ñÑ]*" }}
                    id="secondlastName"
                    name="secondlastName"
                    label="Apellido Materno"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <TextField
                    // required
                    id="bdayDate"
                    name="bdayDate"
                    label="Fecha de Nacimiento"
                    fullWidth
                    style={{ marginTop: "15px" }}
                    // autoComplete="billing address-line1"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="civilStatus"
                    name="civilStatus"
                    label="Estado Civil"
                    fullWidth
                    style={{ marginTop: "16px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="gender"
                    select
                    name="gender"
                    label="Sexo"
                    style={{
                      marginLeft: -2,
                      marginRight: 12,
                      width: "100%"
                    }}
                    // className={classes.textField}
                    value={state.gender}
                    onChange={this.props.onChange}
                    SelectProps={{
                      MenuProps: {
                        width: "100%"
                      }
                    }}
                    margin="normal"
                  >
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Femenino">Femenino</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="city"
                    name="city"
                    label="Ciudad"
                    fullWidth
                    style={{ marginTop: "15px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  {stateFrom}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="País"
                    name="country"
                    // disabled="true"
                    style={{
                      marginLeft: 5,
                      marginRight: 12,
                      width: "98%"
                    }}
                    // className={classes.textField}
                    value={state.country}
                    onChange={this.props.onChange}
                    SelectProps={{
                      MenuProps: {
                        width: "100%"
                      }
                    }}
                    margin="normal"
                  >
                    {countries.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    id="nacionality"
                    name="nacionality"
                    label="Nacionalidad"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="curp" name="curp" label="CURP" fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="rfc" name="rfc" label="RFC" fullWidth />
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>
                <strong>Datos de Contacto</strong>
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="street"
                    name="street"
                    label="Calle"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="number"
                    name="number"
                    label="Número"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="fracc"
                    name="fracc"
                    label="Colonia"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="municipality"
                    name="municipality"
                    label="Municipio"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="addresState"
                    name="addresState"
                    label="Estado"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="zipCode"
                    name="zipCode"
                    label="Codigo Postal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="cel" name="cel" label="Celular" fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="tel"
                    name="tel"
                    label=" Teléfono de Casa"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="other" name="other" label="Otro" fullWidth />
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
PersonalDataFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalDataFields);