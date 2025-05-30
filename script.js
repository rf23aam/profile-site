// Function to show project details in the 'Project Details' section
function showProjectDetails(project) {
    const description = document.getElementById('project_description');
  
    if (project === 'weather_app') {
      description.innerHTML = `
        <h3>Weather App</h3>
        <p>This project is a weather application that fetches data from a weather API. The user can check the weather by entering a city name.</p>
        <a href="https://github.com/robertflorea/weather-app" target="_blank">View Project on GitHub</a>
      `;
    } else if (project === 'bmi_calculator') {
      description.innerHTML = `
        <h3>BMI Calculator</h3>
        <p>This project is a simple BMI calculator that takes a user's height and weight to calculate their body mass index.</p>
        <a href="https://github.com/rf23aam/bmi-calculator" target="_blank">View Project on GitHub</a>
      `;
    }
  }
  