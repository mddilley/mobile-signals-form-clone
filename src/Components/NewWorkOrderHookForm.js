import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";
import {
  Select,
  MenuItem,
  Container,
  Typography,
  Button,
  CssBaseline,
  CircularProgress
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import happy from "./happy.gif";
import sad from "./sad.gif";

import styled from "styled-components";

const NewWorkOrderHookForm = () => {
  const StyledSelect = styled(Select)`
    margin-top: 1em;

    .MuiInput-underline {
      border-bottom: 2px solid #0d3e79;
    }
  `;

  const StyledTypography = styled(Typography)`
    margin-top: 1em;
  `;

  const StyledCircularProgress = styled(CircularProgress)`
    margin-top: 1em;
  `;

  const StyledButton = styled(Button)`
    margin-top: 1em;
  `;

  const { register, control, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      assetType: "",
      signal: ""
    }
  });

  // const [isRendering, setIsRendering] = useState(false);
  const [name, setName] = useState(null);
  const [signals, setSignals] = useState(null);

  // useEffect(() => {
  //   if (isRendering) {
  //     const happy = setTimeout(() => setIsRendering(false), 3000);
  //     return () => clearTimeout(happy);
  //   }

  //   if (!!isRendering) {
  //     const sad = setTimeout(() => setIsRendering(true), 3000);
  //     return () => clearTimeout(sad);
  //   }
  // });

  // const StyledImage = styled.img`
  //   width: 200px;
  //   height: 200px;
  // `;

  const onSubmit = data => console.log(data);

  const assetTypes = [{ text: "Signal", value: "Signal" }];

  // Let's start with Signal Type (maybe time for more types and dynamic form elements)

  // Work Type: Radios
  // Problem reported: Single select
  // Support Technician(s): Multi-select (fetched: scene_1048, view_2632, field_909)
  // Work Description: Text box
  // Requested by: Single select
  // Schedule Immediately: Single select
  // Scheduled Date: Start date/time and end date/time
  // All day?: Checkbox
  // Task order(s): Multi-select, type ahead (fetched: scene_328, view_958, field_2634)
  return (
    <Container>
      {/* {isRendering ? <StyledImage src={sad} /> : <StyledImage src={happy} />} */}
      <CssBaseline />
      <StyledTypography variant="h4">New Work Order</StyledTypography>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        {/* Asset Type: Single Select */}
        <Controller
          as={
            <StyledSelect
              id="assetType"
              fullWidth
              errors={errors.name ? true : false}
              helperText={errors.name ? errors.name.message : ""}
            >
              {assetTypes.map((asset, i) => (
                <MenuItem key={i} value={asset.value}>
                  {asset.text}
                </MenuItem>
              ))}
            </StyledSelect>
          }
          name="assetType"
          rules={{ required: "this is required" }}
          control={control}
          defaultValue=""
        />
        {/* errors will return when field validation fails  */}
        {errors.assetType && <span>This field is required</span>}

        {/* Signal: Single Select with autocomplete (fetched: scene_1042, view_2618, field_1060)   */}
        {signals ? (
          <Controller
            as={
              <StyledSelect
                id="signal"
                fullWidth
                errors={errors.name ? true : false}
                helperText={errors.name ? errors.name.message : ""}
              >
                {signals.map((signal, i) => (
                  <MenuItem key={i} value={signal.id}>
                    {signal.identifier}
                  </MenuItem>
                ))}
              </StyledSelect>
            }
            name="signal"
            rules={{ required: "this is required" }}
            control={control}
            defaultValue=""
          />
        ) : (
          <>
            <StyledCircularProgress />
            <br />
          </>
        )}
        {/* errors will return when field validation fails  */}
        {errors.signal && <span>This field is required</span>}

        <StyledButton variant="contained" type="submit">
          Submit
        </StyledButton>
      </form>
      {/* <form onSubmit={e => console.log(e)}>
        <input name="example" defaultValue={name} onChange={setName} />
        <input type="submit" />
      </form> */}
      <DevTool control={control} /> {/* set up the dev tool */}
    </Container>
  );
};

export default NewWorkOrderHookForm;
