// this will create the teampage with all the info that should be passed into it
const createTeamPage = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Amazing Team Profile</title>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Peralta&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="nav">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text"> Team Members </span>
            </nav>
        </header>
        <main>
            <section class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${teamCards}
                </div>
            </section>
        </main>
    </body>
    </html>
  `
  };
  
  displayTeamPage = data => {
    const cArray = []
    for (let i = 0; i < data.length; i++) {
      let team = data[i]
      let role = team.getRole()
      if (role === 'Manager') {
        const managerCard = ManagerCard(team)
        cArray.push(managerCard)
      } else if (role === 'Engineer') {
        const engineerCard = EngineerCard(team)
        cArray.push(engineerCard)
      } else if (role === 'Intern') {
        const internCard = InternCard(team)
        cArray.push(internCard)
      }
    }
    const teamCards = cArray.join('')
    return createTeamMembersPage(teamCards)
  }
  
  const ManagerCard = function(manager) {
      const {name, id, email, officeNumber} = manager;
    return `
      <section class="col-4 mt-4">
          <div class="card h-100">
              <div class="cardTitle">
                  <h1>${name}</h1>
                  <h2>Manager</h2>
              </div>
              <div class="card-Body">
                  <p class="id">ID: ${id}</p>
                  <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                  <p class="office">Office Number: ${officeNumber}</p>
              </div>
          </div>
      </section>
      `
  };
  const EngineerCard = function(engineer) {
      const {name, id, email, github} = engineer;
    return `
      <section class="col-4 mt-4">
          <div class="card h-100">
              <div class="cardTitle">
                  <h1>${name}</h1>
                  <h2>Engineer</h2>
              </div>
              <div class="bodyOfCard">
                  <p class="id">ID: ${id}</p>
                  <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                  <p class="github">Github: <a href="https://github.com/${github}">${github}</a></p>
              </div>
          </div>
      </section>
      `
  };
  const InternCard = function(intern) {
      const {name, id, email, school} = intern;
    return `
      <section class="col-4 mt-4">
          <div class="card h-100">
              <div class="cardTitle">
                  <h1>${name}</h1>
                  <h2>Intern</h2>
              </div>
              <div class="card-Body">
                  <p class="id">ID: ${id}</p>
                  <p class="email">Email:<a href="mailto:${email}">${email}</a></p>
                  <p class="school">School: ${school}</p>
              </div>
      </div>
  </section>
      `
  };
  
  module.exports = displayTeamPage;