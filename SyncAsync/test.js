// 가로로 Christmas 트리를 만드는중이다.
getUser(1, (user) => {
    getRepos(user.githubID, (repos) => {
      getCommits(repos[0], (commits) => {
        console.log(commits);
      })
    });
  });
  
  /* functions */
  function getUser(id, callback) {
    console.log(`Finding user with id [ ${id} ] in DB`);
    const users = [
      { id: 1, githubID: 'neo' },
      { id: 2, githubID: 'john' },
    ];
  
    setTimeout(() => {
      const user = users.find((user) => {
        return user.id === id;
      });
  
      callback(user);
    }, 2000);
  }
  
  function getRepos(userID, callback) {
    console.log(`Finding [ ${userID} ]'s all github repos..`)
    setTimeout(() => {
      callback(['TIL', 'ES6', 'Express-demo']);
    }, 1000);
  }
  
  function getCommits(repoName, callback) {
    console.log(`Getting all commits in repo [ ${repoName} ]`);
    setTimeout(()=>{
      callback(['Init repo', 'Add index.html', 'Struct index.html']);
    }, 1500);
  }