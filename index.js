const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");

yargs(hideBin(process.argv))
.command("init", "Initialise a new repo", {}, initRepo)
.command("add", "Add a file to the repo", {}, initRepo)

.demandCommand(1, "You need atleast one command")
.help().argv;