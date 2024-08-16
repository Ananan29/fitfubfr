import React, { useEffect, useState } from "react";
import "../popup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { TimePicker, DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import config from "./../../../config";
import { toast } from "react-toastify";

const CalorieIntakePopup = ({ setShowCalorieIntakePopup, reloadfunc }) => {
  const color = "#ffc20e";

  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());
  const [calorieIntake, setCalorieIntake] = useState({
    item: "",
    date: "",
    quantity: "",
    quantitytype: "g",
  });
  const [items, setItems] = useState([]);
  const [changeMade, setChangeMade] = useState(false);

  const saveCalorieIntake = async () => {
    let tempDate = date.format("YYYY-MM-DD");
    let tempTime = time.format("HH:mm:ss");
    let tempDateTime = `${tempDate}T${tempTime}`;
    let finalDateTime = new Date(tempDateTime).toISOString();

    const payload = {
      name: calorieIntake.item,
      date: finalDateTime,
      quantity: calorieIntake.quantity,
      quantitytype: calorieIntake.quantitytype,
    };

    const authToken = localStorage.getItem("auth-token");

    try {
      const response = await fetch(`${config.API_BASE_URL}/calorieintake/addcalorieintake`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.ok) {
        getCalorieIntake();
        setChangeMade(true);
        toast.success("Calorie intake added successfully");
      } else {
        toast.error("Error in adding calorie intake");
      }
    } catch (err) {
      toast.error("Error in adding calorie intake");
      console.error(err);
    }
  };

  const getCalorieIntake = async () => {
    setItems([]);
    try {
      const response = await fetch(`${config.API_BASE_URL}/calorieintake/getcalorieintakebydate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ date: date.format("YYYY-MM-DD") }),
      });
      const data = await response.json();
      if (data.ok) {
        setItems(data.data);
      } else {
        toast.error("Error in getting calorie intake");
      }
    } catch (err) {
      toast.error("Error in getting calorie intake");
      console.error(err);
    }
  };

  const deleteCalorieIntake = async (item) => {
    try {
      const response = await fetch(`${config.API_BASE_URL}/calorieintake/deletecalorieintake`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: item.item,
          date: item.date,
        }),
      });
      const data = await response.json();
      if (data.ok) {
        toast.success("Calorie intake item deleted successfully");
        getCalorieIntake();
        setChangeMade(true);
      } else {
        toast.error("Error in deleting calorie intake");
      }
    } catch (err) {
      toast.error("Error in deleting calorie intake");
      console.error(err);
    }
  };

  const buttonClicked = () => {
    if (changeMade) {
      reloadfunc();
    }
    setShowCalorieIntakePopup(false);
  };

  useEffect(() => {
    getCalorieIntake();
  }, [date]);

  useEffect(() => {
    console.log("Food items: ", items);
  }, [items]);

  return (
    <div className="popupout">
      <div className="popupbox">
        Calorie Intake Popup
        <button className="close" onClick={buttonClicked}>
          <AiOutlineClose />
        </button>

        <TextField
          id="outlined-basic"
          label="Food item name"
          variant="outlined"
          color="warning"
          onChange={(e) => setCalorieIntake({ ...calorieIntake, item: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Food item amount (in gms)"
          variant="outlined"
          color="warning"
          onChange={(e) => setCalorieIntake({ ...calorieIntake, quantity: e.target.value })}
        />
        <div className="timebox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <Button variant="contained" color="warning" onClick={saveCalorieIntake}>
          Save
        </Button>
        <div className="hrline"></div>
        <div className="items">
          {items.map((item, index) => (
            <div key={index} className="item">
              <h3>{item.item}</h3>
              <h3>{item.quantity} {item.quantitytype}</h3>
              <button className="buttonn" onClick={() => deleteCalorieIntake(item)}>
                <AiFillDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalorieIntakePopup;
