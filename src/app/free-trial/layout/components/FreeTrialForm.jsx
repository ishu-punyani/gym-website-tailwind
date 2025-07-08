import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FreeTrialForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    timePreference: "",
    fitnessGoal: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="container flex flex-col gap-3 py-4" id="trial-form">
      <TextField
        name="name"
        label="Your Name"
        type="text"
        variant="outlined"
        required
        value={formDetails.name}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Your Email"
        type="email"
        required
        value={formDetails.email}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        label="Your Phone"
        type="tel"
        required
        value={formDetails.phone}
        onChange={handleChange}
      />
      <div>
        <FormControl fullWidth>
          <InputLabel id="time-preference-label">Preferred Gym Time</InputLabel>
          <Select
            name="timePreference"
            label="Preferred Gym Time"
            variant="outlined"
            value={formDetails.timePreference}
            onChange={handleChange}
            required
            MenuProps={{ disableScrollLock: true }}
          >
            <MenuItem value="morning">Morning(5am - 12pm)</MenuItem>
            <MenuItem value="afternoon">Afternoon(12pm - 4pm)</MenuItem>
            <MenuItem value="evening">Evening(4pm - 8pm)</MenuItem>
            <MenuItem value="night">Night(8pm - 11pm)</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="mt-3">
          <InputLabel id="fitness-goal-label">Your Fitness Goal</InputLabel>
          <Select
            name="fitnessGoal"
            label="Your Fitness Goal"
            variant="outlined"
            value={formDetails.fitnessGoal}
            onChange={handleChange}
            required
            MenuProps={{ disableScrollLock: true }}
          >
            <MenuItem value="weightLoss">Weight Loss</MenuItem>
            <MenuItem value="muscleGain">Muscle Gain</MenuItem>
            <MenuItem value="generalFitness">General Fitness</MenuItem>
            <MenuItem value="rehabilitation">Rehabilitation</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FreeTrialForm;
