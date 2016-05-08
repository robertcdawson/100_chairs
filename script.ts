function animateLastChair(count: number): void {
  // Set DOM elements to variables
  let table_chairs: any = document.querySelector(".table_chairs");
  let table_chairs_info: any = document.querySelector(".table_chairs_info");

  // Set chair count per passed parameter
  let chairs_count_initial: number = count;
  // Initialize array to hold number of chairs
  let chairs_array: number[] = [];

  // Populate chair array
  let i: number = 1;
  for (i; i <= chairs_count_initial; i++) {
    chairs_array.push(i);
  }

  // Set length of chair array to variable
  let chairs_array_length: number = chairs_array.length;

  // Set variable to keep track of current index during loop
  let current_index: number = 0;
  // Initialize skip number at 0
  let num_to_skip: number = 0;

  // Initialize array to hold chairs leaving table
  let chairs_leaving: number[] = [];
  // Set first chair leaving to 0
  chairs_leaving[0] = 1;

  // Loop through chairs array and remove chairs leaving
  while (chairs_array.length > 1) {
    chairs_array.splice(current_index, 1);
    num_to_skip++;
    current_index += num_to_skip;
    current_index %= chairs_array.length;
    // Add chairs leaving to array
    chairs_leaving.push(chairs_array[current_index]);
  }

  // Draw table and chairs
  let i: number = 0;
  for(i; i < chairs_count_initial; i++) {
    let x: number = 150 - 5 + 170 * Math.cos(2 * Math.PI * i / chairs_count_initial);
    let y: number = 150 - 5 + 170 * Math.sin(2 * Math.PI * i / chairs_count_initial);
    let div: any = document.createElement('div');
    div.setAttribute("class", "table");
    div.innerHTML = "<div id='chair" + (i + 1) + "' class='chair_sit' style='left:" + x + "px;top:" + y + "px'></div>";
    table_chairs.appendChild(div);
  }

  // Cache length of chairs-leaving array
  let chairs_leaving_length: number = chairs_leaving.length;

  // Animate chairs leaving table
	let i: number = 0;
	for (i; i < chairs_leaving_length; i++) {
    // Put setTimeout() in IIFE to pause animation
    let animateChairsLeaving = ((i: number) => {
      window.setTimeout(() => {
        if (i !== chairs_leaving_length - 1) {
          document.getElementById("chair" + chairs_leaving[i]).className = "chair_leave";
        }
        table_chairs_info.innerHTML = "<p>" + chairs_leaving[i] + "</p>";
      }, i * 100);
    }(i));
  }

};

animateLastChair(100);
