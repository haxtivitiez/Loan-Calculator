// Listen for submit

document.getElementById('loan-form').addEventListener('submit',function(e){

  // Hide results
  document.getElementById('results').style.display = 'none';

  // show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults,2000);


  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating... ');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');

  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');

  const totalPayment = document.getElementById('total-payment');

  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;

  const calculatePayment = parseFloat(years.value) * 12;

  // cal monthly payment  
  const x = Math.pow(1 + calculateInterest, calculatePayment);

  const monthly = (principal*x*calculateInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatePayment).toFixed(2);
    totalInterest.value = ((monthly*calculatePayment)-principal).toFixed(2);
      // Hide results
  document.getElementById('results').style.display = 'block';

  // show loader
  document.getElementById('loading').style.display = 'none';
  }else{
    showErr('Please check your numbers');
  }

}

function showErr(err){

          // Hide results
          document.getElementById('results').style.display = 'none';

          // show loader
          document.getElementById('loading').style.display = 'none';
          
  const errDiv = document.createElement('div');

  // Get element


  //Add class
  errDiv.className = 'alert alert-danger';
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // Create text node
  errDiv.appendChild(document.createTextNode(err));

  // insert err abof heading
  card.insertBefore(errDiv, heading);

  // clear error after 3 sec

  setTimeout(clearErr,3000);



}

// clear err

function clearErr(){
  document.querySelector('.alert').remove();
}