const { exec } = require('child_process');
const args = process.argv;
let branch = args[2];

const executeBuild = async () => {
//   let branch = await getBranch();
  if (branch !== "dev" && branch !== "production") {
        branch = "_" + branch.replace(/\//g, '-')
    };

    if(branch === "production"){
        branch = ''
    }

  exec(`PUBLIC_URL=/${branch.trim()} npm run complete`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    if (stderr) {
      console.log(stderr);
      return;
    }
    console.log("Build Successfully Completed!");
  });


}

executeBuild();