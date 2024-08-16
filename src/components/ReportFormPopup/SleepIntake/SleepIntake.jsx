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

const CalorieIntakePopup = ({setShowSleepIntakePopup, reloadfunc}) => {
  const color = "#ffc20e";

  const [startdate, setstartdate] = useState(dayjs());
  const [enddate, setenddate] = useState(dayjs());
  const [starttime, setstarttime] = useState(dayjs());
  const [endtime, setendtime] = useState(dayjs());
  const [sleepintake, setsleepintake] = useState({
    startdate: "",
    enddate:"",
    starttime:"",
    endtime:"",
    // duration: "",
  });
  const [items, setItems] = useState([]);
  const [changeMade, setChangeMade] = useState(false);

  const saveSleepIntake = async () => {
    let tempstartdate = startdate.format("YYYY-MM-DD");
    let tempenddate = enddate.format("YYYY-MM-DD");
    let tempstarttime= starttime.format("HH:mm:ss")
    let tempendtime= endtime.format("HH:mm:ss")
    let tempstartdatetime = `${tempstartdate}T${tempstarttime}`;
    let tempenddatetime = `${tempenddate}T${tempendtime}`;
    let finalstartdatetime = new Date(tempstartdatetime)
    // .toISOString();
    let finalenddatetime = new Date(tempenddatetime)
    // .toISOString();
    console.log(finalstartdatetime,finalenddatetime)
    let tempDuration = (finalenddatetime-finalstartdatetime)/(1000*60*60);

    const payload = {
        date: tempstartdatetime,
        durationInHrs: tempDuration
    };
    console.log(payload)
    const authToken = localStorage.getItem("auth-token");

    try {
      const response = await fetch(`${config.API_BASE_URL}/sleeptrack/addsleepentry`, {
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
        getSleepIntake();
        setChangeMade(true);
        toast.success("Sleep intake added successfully");
      } else {
        toast.error("Error in adding sleep intake");
      }
    } catch (err) {
      toast.error("Error in adding calorie intake");
      console.error(err);
    }
  };

  const getSleepIntake = async () => {
    setItems([]);
    let x=dayjs("2022-08-13")
    try {
      const response = await fetch(`${config.API_BASE_URL}/sleeptrack/getsleepbydate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ date: x.format("YYYY-MM-DD") }),
      });
      const data = await response.json();
    //   console.log(startdate,"\n",x)
      if (data.ok) {
        setItems(data.data);
        // console.log("itemms",items)
      } else {
        toast.error("Error in getting sleep intake");
      }
    } catch (err) {
      toast.error("Error in getting sleep intake");
      console.error(err);
    }
  };

  const deleteSleepIntake = async (item) => {
    try {
      const response = await fetch(`${config.API_BASE_URL}/sleeptrack/deletesleepentry`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          date: item.date,
        }),
      });
      const data = await response.json();
      if (data.ok) {
        toast.success("Sleep intake item deleted successfully");
        getSleepIntake();
        setChangeMade(true);
      } else {
        toast.error("Error in deleting sleep intake");
      }
    } catch (err) {
      toast.error("Error in deleting sleep intake");
      console.error(err);
    }
  };

  const buttonClicked = () => {
    if (changeMade) {
      reloadfunc();
    }
    setShowSleepIntakePopup(false);
  };

  useEffect(() => {
    getSleepIntake();
  }, []);

  useEffect(() => {
    console.log("Instances: ", items);
  }, [items]);

  return (
    <div className="popupout">
      <div className="popupbox">
        Sleep Intake Popup
        <button className="close" onClick={buttonClicked}>
          <AiOutlineClose />
        </button>

        {/* <TextField
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
        /> */}
        <div className="timebox">
            <h2>starttime</h2><br/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={startdate}
              onChange={(newValue) => setstartdate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={starttime}
              onChange={(newValue) => setstarttime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider><br/>
          <h2>endtime</h2><br/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={enddate}
              onChange={(newValue) => setenddate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={endtime}
              onChange={(newValue) => setendtime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <Button variant="contained" color="warning" onClick={saveSleepIntake}>
          Save
        </Button>
        <div className="hrline"></div>
        <div className="items">
          {items.map((instance, index) => (
            <div key={index} className="item">
              {/* <h3>{instance.startdate} {instance.starttime} - {instance.enddate} {instance.endtime}</h3> */}
              <h3>{instance.date.slice(0,10)} 
              {/* {instance.date.slice(11,16)} - {instance.slice} {instance.endtime} */}
              </h3>
              <h3>{instance.durationInHrs-(instance.durationInHrs%1)} hours {((instance.durationInHrs%1)*60).toFixed(0)} min</h3>
              <button className="buttonn" onClick={() => deleteSleepIntake(instance)
                // console.log("delete")
                }>
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
