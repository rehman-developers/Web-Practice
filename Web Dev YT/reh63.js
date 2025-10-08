// console.log("Hello World");
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>First Website | www.deppresed.com</title>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montez&family=Rouge+Script&display=swap"
          rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>
          div {
              font-family: 'Dancing Script', cursive;
              text-align: center;
          }
  
          h3 {
  
              color:darkblue;
          }
  
          h1 {
              font-family: 'Dancing Script', cursive;
              color:darkblue;
  
          }
  
          h2 {
              color:darkblue;
          }
  
          img {
              margin: auto;
              display: block;
              width: 555px;
          }
          .navbar{
              border: 3px white;
              background-color: darkblue;
              /* color: rgba(240, 240, 247, 0.979); */
              cursor: pointer;
              border-radius: 30px;
              
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar li{
              margin: 12px ;
              border: none;
              list-style: none;
              float: left;
          }
          .navbar:hover{
              color: black;
          }
          .search
          {
              float: right;
              padding: 12px 45px;
              
          }
          .navbar input{
              border-radius: 10px;
              border: 2px  black;
              padding: 0px 3px;
              width: 100px;
          }
          .button{
              float: right;
             padding: 12px 30px; 
          }
          footer{
              background-color: black;
              color: rgb(255, 254, 254);
          }
      </style>
  </head>
  
  <body>
      <nav class="navbar">
          <ul>
              <li>
                  <button class="btn1"><i class="fa fa-home"></i></button>
              </li>
              <div class="button">
                  <button class="btn1"><i class="fa fa-bars"></i></button>
              </div>
              <div class="search">
                  <input type="text" name="Search" id="Search" placeholder="Search">
              </div>
          </ul>
      </nav>
      <nav>
          <h1><b>WELLCOME TO REHMAN WEBSITE</b></h1>
      </nav>
      <div>
          <h2><b>
              HOW TO TREAT A DEPRESSED HUMAN IN PSYCHOLOGY</b>
          </h2>
          <img src="https://c4.wallpaperflare.com/wallpaper/658/462/338/dark-depression-mood-people-wallpaper-preview.jpg"
              alt="">
          <p>
              I'm not a licensed psychologist, but I can provide some general suggestions on how to support someone
              who may be experiencing depression. It's important to note that every individual is unique, and the
              severity and specific circumstances of their depression may vary. For that reason, it's always recommended
              to seek professional help from a qualified mental health provider. Here are some general tips that might be
              helpful:
          </p>
          <h3>
              Encourage open communication:
          </h3>
          <p>
              Create a safe and non-judgmental space for the boy to express his feelings and thoughts.
              Listen actively and empathetically without interrupting or offering immediate solutions.
          </p>
          <h3>
              Validate their emotions:
          </h3>
          <p>
              Let the boy know that his feelings are valid and understandable.
              Avoid dismissing or minimizing his experiences, as this can make him feel invalidated.
          </p>
          <h3>
              Offer support:
          </h3>
          <p>
              Let the boy know that you're there for him and ready to support him through his struggles.
              Encourage him to reach out for help when needed and assure him that seeking help is a sign of strength.
          </p>
          <h3>Encourage professional help:
          </h3>
          <p>
              Suggest that he seeks professional help from a therapist or counselor trained in treating depression.
              A mental health professional can offer guidance, therapy, and potentially medication if necessary.
          </p>
          <img src="https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlcHJlc3Npb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="">
          <h3>
              Assist with practical matters:
          </h3>
          <p>
              Depression can make even the simplest tasks challenging. Offer assistance with everyday activities
              like cooking, cleaning, or running errands, if appropriate and feasible.
          </p>
          <h3>
              Encourage self-care:
          </h3>
          <p>
              Help the boy establish healthy habits such as maintaining a regular sleep schedule, engaging in
              physical activity, eating nutritious meals, and pursuing activities he enjoys.
          </p>
  
          <h3>
              Avoid judgment or blame:
          </h3>
          <p>
              Be mindful of your language and avoid making judgments or blaming the boy for his condition.
              Depression is a complex illness that requires understanding and support.
          </p>
          <h3>
              Educate yourself:
          </h3>
          <p>
              Learn more about depression and its symptoms, causes, and treatment options.
              This will enable you to better understand the boy's experiences and respond more effectively.
          </p>
          <img src="https://wallpaperaccess.com/full/3156162.jpg" alt="">
          <p>
              Remember, these suggestions are not a substitute for professional help. Encourage the boy and his family to
              consult with a mental health professional who can provide personalized guidance and treatment. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Amet inventore aperiam deserunt quidem saepe cum quam sunt
              delectus error dolorum quibusdam, voluptatem, expedita accusantium ab quisquam nam laborum
              consectetur aspernatur, ducimus necessitatibus nihil impedit! Nam quam doloremque vel officiis inventore.
          </p>
      </div>
      <footer>
          <div class="center">
              Copyright &copy; www.depressed.com. All rights reserved.
          </div>
      </footer>
  </body>
  
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});