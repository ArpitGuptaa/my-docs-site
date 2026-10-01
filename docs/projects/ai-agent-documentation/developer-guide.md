# AgentFlow developer guide

## Build your first agent

A useful quick start should get a developer from credentials to a successful request with as few decisions as possible.

### Prerequisites

- An AgentFlow organization and project
- An API key with permission to create and run agents
- A supported SDK or an HTTP client

### Development flow

1. Create a project for the application.
2. Create an API key and store it outside source control.
3. Define the agent's purpose and instructions.
4. Add only the tools the agent needs.
5. Connect approved knowledge sources when required.
6. Test expected and failure paths.
7. Add event handling and monitoring before deployment.

!!! note
    Examples in this portfolio project are illustrative. A production guide would use versioned SDK examples tested against the released API.

## Documentation pattern

Every developer task should include prerequisites, a minimal example, expected result, common errors, and a clear next step.
