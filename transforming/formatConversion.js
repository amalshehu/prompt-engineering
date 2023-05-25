import { getCompletion } from "../setup.js"

const data = {
    "restaurantEmployees": [
        { "name": "Amal Shehu", "email": "amalshehu@gmail.com" },
        { "name": "Bob", "email": "bob32@gmail.com" },
        { "name": "May", "email": "may87@gmail.com" }
    ]
}

async function convertFormat() {
    const prompt = `
    Translate the following JavaScript object from JSON to an HTML table with
    column headers and title: ${JSON.stringify(data)}`
    const response = await getCompletion(prompt)
    displayHTML(response)
}

function displayHTML(html) {
    console.log(html)
    // If you are running this code in a browser, uncomment the following line:
    // const container = document.getElementById('container')
    // container.innerHTML = html
    // Ensure that there is an element with the id "container".
}

convertFormat()

// Output:
{/* <table>
  <caption>Restaurant Employees</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Amal Shehu</td>
      <td>amalshehu@gmail.com</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>bob32@gmail.com</td>
    </tr>
    <tr>
      <td>May</td>
      <td>may87@gmail.com</td>
    </tr>
  </tbody>
</table> */}