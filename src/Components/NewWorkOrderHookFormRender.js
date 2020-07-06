import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { DevTool } from "react-hook-form-devtools";
import {
  MenuItem,
  Container,
  Typography,
  Button,
  CssBaseline,
  CircularProgress,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select
} from "@material-ui/core";

import styled from "styled-components";

const NewWorkOrderHookForm = () => {
  const headers = {
    headers: {
      "X-Knack-Application-Id": ``,
      "X-Knack-REST-API-KEY": ``
    }
  };

  const StyledSelect = styled(Select)`
    margin-bottom: 2em;
  `;

  const StyledRadioGroup = styled(RadioGroup)`
    margin-bottom: 2em;
  `;

  const StyledTypography = styled(Typography)`
    margin: 1em 0 1em 0;
  `;

  const StyledCircularProgress = styled(CircularProgress)`
    margin-top: 1em;
    color: #0d3e79;
  `;

  const StyledButton = styled(Button)`
    margin-top: 1em;
    background-color: #0d3e79;
    color: white;
  `;

  const { register, control, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      assetType: "",
      signal: ""
    }
  });

  const [name, setName] = useState(null);
  const [signals, setSignals] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.knack.com/v1/objects/object_12/records?rows_per_page=1000",
        headers
      )
      .then(res => {
        setSignals(res.data.records);
      });
  }, []);

  const onSubmit = data => console.log(data);

  const assetTypes = [{ text: "Signal", value: "Signal" }];

  const problems = [
    "LED Out",
    "Communication Failure",
    "Detection Failure",
    "Digtess",
    "Knockdown",
    "Push Button Not Working",
    "Signal Out or on Flash",
    "Timing Issue",
    "Visibility Issue",
    "Other"
  ];

  // Let's start with Signal Type (maybe time for more types and dynamic form elements)

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
      <StyledTypography mx="1" variant="h4">
        New Work Order
      </StyledTypography>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        {/* Asset Type: Single Select */}
        <FormHelperText>Asset Type</FormHelperText>
        <Controller
          as={
            <StyledSelect
              id="assetType"
              fullWidth
              placeholder="Asset Type"
              errors={errors.name ? true : false}
              helperText={errors.name ? errors.name.message : ""}
            >
              <MenuItem value="" disabled>
                Asset Type
              </MenuItem>
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
        <FormHelperText>Signal</FormHelperText>
        {signals ? (
          <Controller
            as={
              <StyledSelect
                id="signal"
                fullWidth
                errors={errors.name ? true : false}
                helperText={errors.name ? errors.name.message : ""}
              >
                <MenuItem value="" disabled>
                  Signal
                </MenuItem>
                {signals.map((signal, i) => (
                  <MenuItem key={i} value={signal.id}>
                    {signal.field_1058}
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
            <br />
            <StyledCircularProgress />
            <br />
          </>
        )}

        {/* errors will return when field validation fails  */}
        {errors.signal && <span>This field is required</span>}

        {/* Work Type: Radios */}
        <FormHelperText>Work Type</FormHelperText>
        <StyledRadioGroup
          aria-label="gender"
          name="gender1"
          innerRef={register}
        >
          <FormControlLabel
            value="Trouble Call"
            control={<Radio />}
            label="Trouble Call"
          />
          <FormControlLabel
            value="Scheduled Work"
            control={<Radio />}
            label="Scheduled Work"
          />
        </StyledRadioGroup>

        {/* Problem reported: Single select */}
        <FormHelperText>Problem Reported</FormHelperText>
        <Controller
          as={
            <StyledSelect
              id="problem"
              fullWidth
              errors={errors.name ? true : false}
              helperText={errors.name ? errors.name.message : ""}
            >
              <MenuItem value="" disabled>
                Problem Reported
              </MenuItem>
              {problems.map((problem, i) => (
                <MenuItem key={i} value={problem}>
                  {problem}
                </MenuItem>
              ))}
            </StyledSelect>
          }
          name="problem"
          rules={{ required: "this is required" }}
          control={control}
          defaultValue=""
        />

        {/* errors will return when field validation fails  */}
        {errors.problem && <span>This field is required</span>}

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
