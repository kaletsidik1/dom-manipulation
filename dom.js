const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
const legend = document.createElement("legend");
legend.textContent = "Employee Details";
fieldset.appendChild(legend);

function createInput(labelText, type, name) {
  const label = document.createElement("label");
  label.textContent = labelText + ": ";
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  label.appendChild(input);
  fieldset.appendChild(label);
  fieldset.appendChild(document.createElement("br"));
}

createInput("First name", "text", "firstName");
createInput("Last name", "text", "lastName");

// Gender radio
const male = document.createElement("input");
male.type = "radio"; male.name = "gender"; male.value = "Male";
fieldset.append(" ", male, " Male ");

const female = document.createElement("input");
female.type = "radio"; female.name = "gender"; female.value = "Female";
fieldset.append(" ", female, " Female ");
fieldset.appendChild(document.createElement("br"));

createInput("Employee ID", "text", "empId");
createInput("Designation", "text", "designation");
createInput("Phone Number", "text", "phone");

// Submit
const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Submit";
fieldset.appendChild(btn);

form.appendChild(fieldset);
document.body.appendChild(form);
