# Digital Nomad

<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"/> <img alt="Apollo-GraphQL" src="https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=for-the-badge&logo=apollo-graphql"/>



A single-page web application for both individuals and companies. Users can search for jobs and also post a schedule that they plan to work for a certain amount of time. Companies can post jobs and also view their employees and the schedules/locations that all of their remote employees are working in.

<img src="./assets/DigitalNomad.gif" alt="Digital Nomad Gif" />


## Getting Started

### Installation

Clone the repo:
<pre>git clone https://github.com/TanisTanis/digitalnomad.git</pre>
  
Install Dependencies:
<pre>npm install</pre>

Compile React Files:
<pre>npm run build</pre>

Seed your Mongo Database:
<pre>npm run seed</pre>

Start the Server:
<pre>npm start</pre>

Now visit localhost:4000 to see the page!

## Navigating the Webpage

After correctly seeding the database, you will be able to log in as some of the preconfigured users and companies in the preset data.

Click on the Log In button in the upper right corner to go to the login page.

### User Login

To log in as a user, log in under my account:
Password authentication is coming soon with Auth0, but for now you can leave it blank.
<pre>
tkiel12@gmail.com
</pre>

To log in as a company, log in under Auth0's company account that you added to the database in the seed script.
<pre>
auth0@auth0.com
</pre>

After logging in to either option, you can log out and switch accounts using the Log Out button in the top right again.

## Thank you for checking out my project!

Feel free to reach out through LinkedIn or my email!
