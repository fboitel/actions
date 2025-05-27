const core = require('@actions/core');
const github = require('@actions/github');

try {
    // Get the name of the person to say goodbye to
    const name = core.getInput('name') || 'World';

    if (name === 'C#') {
        throw new Error("We don't say goodbye to C#!");
    }
    
    // Create a message
    const message = `Goodbye, ${name}!`;
    
    // Log the message
    console.log(message);

    // Set the output for the action
    const time = new Date().toTimeString();
    core.setOutput('time', time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)

    // Log the payload
    console.log(`The event payload: ${payload}`);

} catch (error) {
    // If an error occurs, log it and set the action as failed
    core.setFailed(`Action failed with error: ${error.message}`);
}