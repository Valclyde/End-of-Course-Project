# End-of-Course-Project

Section 1: Architecture

Design a highly available, scalable, and secure three tier architecture to host a monolithic application on Ec2 instances.

Your design should contain, but not limited to the following.

•	ALB

•	ASG

•	Route53 hosted zone

•	Mysql database

•	App server

•	Web server 

•	Etc.

Use any of the design tools. E.g Draw.io, lucid chat, etc. 


Section 2: IaC

	Write a terraform module to deploy a VPCs, subnets, IGW, NGW, routes tables, security groups, etc.
	
  Use the modules created to deploy the above resources.
  
	Use S3 to manage your state file.
	
	Use Dynamo DB to lock your state file.
	

Section 3: Implementation 

	Implement the architecture designed in section 1 with the resources deployed in section 2.
	
	Log into your web server, and run the frontend application
	
	Log into the app server, and run the backend application
	
Deliverables:

You should be able to access the application using a route53 domain name\


Section 4: CI/CD

	Design a CICD pipeline for your frontend application using AWS pipeline
	
	Design a CICD pipeline for your backend application using Jenkins 
	
Deliverables:

Anytime a change is made is made to your code in GitHub/code commit, it should be trigger the pipeline to build, test and deploy your code to your respective servers.


Section 5: configuration management

Deploy an ansible main node.

Write an ansible playbook to install Docker and the the AWS CLI on all your servers



Section 6: Migration

