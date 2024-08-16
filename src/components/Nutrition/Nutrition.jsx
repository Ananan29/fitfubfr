import React, { useState } from 'react';
import './Nutrition.css'; // Import CSS for styling

// Local data for diet plans
const dietPlans = {
  "Men": {
    "18-30": {
      "40-60": {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken salad",
        dinner: "Steamed fish with vegetables",
        snacks: "Apple slices",
      },
      "61-80": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
      "81-100": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
    },
    "31-50": {
      "40-60": {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken salad",
        dinner: "Steamed fish with vegetables",
        snacks: "Apple slices",
      },
      "61-80": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
      "81-100": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
    },
    "51-70": {
      "40-60": {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken salad",
        dinner: "Steamed fish with vegetables",
        snacks: "Apple slices",
      },
      "61-80": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
      "81-100": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
    },
  },
  "Women": {
    "18-30": {
      "40-60": {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken salad",
        dinner: "Steamed fish with vegetables",
        snacks: "Apple slices",
      },
      "61-80": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
      "81-100": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
    },
    "31-50": {
      "40-60": {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken salad",
        dinner: "Steamed fish with vegetables",
        snacks: "Apple slices",
      },
      "61-80": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
      "81-100": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
    },
    "51-70": {
      "40-60": {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken salad",
        dinner: "Steamed fish with vegetables",
        snacks: "Apple slices",
      },
      "61-80": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
      "81-100": {
        breakfast: "Greek yogurt with nuts",
        lunch: "Quinoa salad with chickpeas",
        dinner: "Baked tofu with steamed broccoli",
        snacks: "Carrot sticks",
      },
    },
  },
};

// DietPlan Component
const DietPlan = ({ diet }) => (
  <div className="diet-plan">
    <h2>Full-Day Diet Plan</h2>
    <p><strong>Breakfast:</strong> {diet.breakfast}</p>
    <p><strong>Lunch:</strong> {diet.lunch}</p>
    <p><strong>Dinner:</strong> {diet.dinner}</p>
    <p><strong>Snacks:</strong> {diet.snacks}</p>
  </div>
);

// NutritionPage Component
const Nutrition = () => {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1TbnwbUH9PqXqr10zI4-oJTeMFYt0zA7Uf4EfSF3CvyhktlMOxBXVr8aB5a4gXUHvOg&usqp=CAU";
  
    const jsx = {
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPaddingLeft: "0"}

  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [filteredDietPlan, setFilteredDietPlan] = useState(null);

  const handleSearch = () => {
    console.log('Searching with:', { gender, age, weight }); // Debugging line

    // Determine the age range based on the input
    const ageRange = 
      age >= 18 && age <= 30 ? '18-30' :
      age >= 31 && age <= 50 ? '31-50' :
      age >= 51 && age <= 70 ? '51-70' : '';

    // Determine the weight range based on the input
    const weightRange = weight >= 40 && weight <= 60 ? '40-60' :
      weight >= 61 && weight <= 80 ? '61-80' : 
      weight >= 81 && weight <= 100 ? '81-100' : '';

    if (gender && ageRange && weightRange) {
      // Get the diet plan based on filters
      const dietPlan = dietPlans[gender]?.[ageRange]?.[weightRange] || 'No diet found for the selected criteria.';
      setFilteredDietPlan(dietPlan);
    } else {
      setFilteredDietPlan('Please fill all filters to view the diet plan.');
    }
  };

  return (
    <div className="nutrition-page">
      <div className="filters">
        <h2>Apply Filters</h2>
        <br/>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </label>
        <label>
          Age:
          <input
            type="number"
            placeholder="Enter Age(18-70)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            placeholder="Enter Weight(40-100)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='nutrition-bg' style={jsx}>
      <div className="diet-plan-display" >
        {typeof filteredDietPlan === 'string' ? (
          <p>{filteredDietPlan}</p>
        ) : (
          filteredDietPlan && <DietPlan diet={filteredDietPlan} />
        )}
      </div>
      </div>
    </div>
  );
};

export default Nutrition;
