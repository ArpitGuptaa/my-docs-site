# Deploy Digital.ai DevOps Platform on AWS

This guide explains the architecture, prerequisites, deployment options, configuration requirements, and validation steps for a successful deployment.

# What is the Digital.ai DevOps Platform?

The Digital.ai DevOps platform helps teams automate software delivery across cloud and on-premises environments.

The platform provides:

* Release orchestration
* Deployment automation
* Environment provisioning
* Dependency management
* Compliance reporting
* Deployment analytics

Supported AWS services include:

* Amazon ECS
* Amazon EKS
* AWS Fargate
* Amazon EC2
* Amazon Aurora PostgreSQL
* Amazon EFS
* AWS Service Catalog

# Architecture Overview

The quick start deploys a highly available environment across two AWS availability ones.

## Architecture Components

| Layer       | Components                                         |
| ----------- | -------------------------------------------------- |
| Network     | VPC, public subnets, private subnets, NAT gateways |
| Access      | Application Load Balancer, Bastion Host (optional) |
| Application | XL Release, XL Deploy, Amazon ECS                  |
| Data        | Amazon Aurora PostgreSQL, Amazon EFS               |
| Security    | IAM roles, security groups, encrypted storage      |

## High Availability Features

The deployment includes:

* Multi-AZ infrastructure
* Clustered XL Release services
* High-availability XL Deploy services
* Aurora database clustering
* Shared persistent storage using Amazon EFS

# Before You Begin

## Prerequisites

Before deploying the platform, ensure that you have:

* An AWS account.
* Permissions to create IAM roles and CloudFormation stacks.
* An EC2 key pair.
* A Digital.ai license (trial or commercial).

## Recommended Knowledge

You should be familiar with:

* Amazon EC2
* Amazon ECS
* Amazon VPC
* Amazon Aurora
* Amazon EFS
* AWS CloudFormation
* AWS Identity and Access Management (IAM)

# Choose a Deployment Model

Select one of the following deployment options.

## Deploy to a New VPC

Choose this option when you want AWS to create all required infrastructure.

The deployment creates:

* VPC
* Public and private subnets
* NAT gateways
* Security groups
* Bastion host (optional)
* Digital.ai platform resources

### Recommended For

* New implementations
* Proof-of-concept environments
* Evaluation deployments

## Deploy to an Existing VPC

Choose this option when you want to use existing AWS networking resources.

### Requirements

Your VPC must contain:

* Two Availability Zones
* Two private application subnets
* Two private database subnets
* Public subnets for external access
* NAT connectivity for application workloads

### Recommended For

* Enterprise deployments
* Existing AWS environments
* Production workloads

# Deployment Workflow

Deploy the platform by completing the following steps.

1. Prepare your AWS account.
2. Obtain a Digital.ai license.
3. Launch the CloudFormation stack.
4. Validate the deployment.
5. Configure users and integrations.

# Prepare Your AWS Account

## Create or Verify AWS Resources

1. Sign in to AWS.
2. Select the target AWS Region.
3. Create an EC2 key pair.
4. Verify service quotas for the selected EC2 instance type.

## Verify Regional Support

Confirm that the selected region supports:

* Amazon ECS
* Amazon Aurora
* Amazon EFS
* Application Load Balancer

# Obtain a License

The platform supports the following license types:

| License Type | Usage                  |
| ------------ | ---------------------- |
| Trial        | Evaluation and testing |
| Commercial   | Production deployments |

**Note**: Before deployment, obtain the appropriate license and make it available during stack configuration.

# Launch the Deployment

## Create the CloudFormation Stack

1. Open the deployment template.
2. Choose a deployment option.
3. Enter configuration values.
4. Review the stack configuration.
5. Acknowledge IAM resource creation.
6. Enable automatic template expansion.
7. Create the stack.

**Info**: Deployment typically completes within 40 minutes.

# Configure the Deployment

## Network Settings

Configure networking parameters based on your deployment model.

Typical settings include:

* VPC CIDR range
* Public subnet CIDRs
* Private subnet CIDRs
* Remote access CIDR
* Availability Zones

**Note**: Use restricted CIDR ranges whenever possible to reduce exposure.

## Database Settings

Configure the Amazon Aurora database.

| Setting                         | Purpose                  |
| ------------------------------- | ------------------------ |
| Database administrator username | Database administration |
| Database administrator password | Secure access           |
| Backup retention period         | Recovery and compliance  |
| Instance class                  | Performance and capacity |

## SSL Configuration

Provide an SSL certificate ARN to enable secure HTTPS access through the load balancer.

## Application Settings

Configure and specify the following deployment settings for Digital.ai Release and Digital.ai Deploy:

* Version
* Administrator password
* License
* Cluster mode

## Accept the License Agreement

To continue deployment, set:

```text
AcceptEula = yes
```

**Warning**: The deployment fails if this value is not provided.


# Validate the Deployment

After the stack status changes to **CREATE_COMPLETE** and verify access to the platform.

## Access Digital.ai Deploy

```text
https://<hostname>:4516
```

## Access Digital.ai Release

```text
https://<hostname>:5516
```

## Verify Platform Health

Confirm that:

* Services are running
* Users can authenticate
* Database connectivity is healthy
* Application logs show no startup errors

# Operational Recommendations

## Backup Strategy

Implement regular backups for:

* Amazon Aurora databases
* Amazon EFS file systems

**Tip**: Backups protect against accidental deletion and data corruption.

## Security Recommendations

Review and customize:

* IAM roles
* Security groups
* Network access controls
* User permissions

**Tip**: Apply the principle of least privilege whenever possible.

# Troubleshooting

## Stack Creation Fails

### Symptoms

CloudFormation reports a **CREATE_FAILED** status.

### Resolution

1. Relaunch the deployment.
2. Disable automatic rollback.
3. Review stack events.
4. Review CloudFormation and application logs.

## Template Size Errors

### Symptoms

CloudFormation reports template size limitations.

### Resolution

Launch templates directly from AWS-hosted assets or an Amazon S3 bucket.

## Unsupported Docker Version Tags

### Symptoms

Deployment configuration uses a `latest` image tag.

### Resolution

Use explicit version numbers instead.

Examples:

```text
10.0.5
```

or

```text
10.0
```

Avoid:

```text
latest
```

# Capacity Planning

A typical deployment creates:

| Resource                   | Quantity |
| -------------------------- | -------- |
| ECS Hosts                  | 2–4      |
| Bastion Hosts              | 1        |
| Application Load Balancers | 1        |
| Aurora Clusters            | 1        |
| Amazon EFS File Systems    | 1        |
| Elastic IP Addresses       | 1        |

*Note**: Production environments may require additional capacity.

# Additional Resources

## AWS Documentation

* Amazon ECS
* Amazon EC2
* Amazon Aurora
* Amazon EFS
* Amazon VPC
* AWS CloudFormation

## Digital.ai Documentation

* Product Documentation
* Support Portal
* Licensing Information
* Product Downloads

# Next Steps

After deployment:

1. Configure authentication and user access.
2. Install required plugins.
3. Connect deployment targets.
4. Configure release pipelines.
5. Integrate source control and CI/CD tools.
6. Implement backup and monitoring policies.
