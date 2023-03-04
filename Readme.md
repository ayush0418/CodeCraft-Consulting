# IT Services and Consulting Website

## Overview
This website is designed to provide IT services and consulting to businesses and organizations of all sizes. 
Some of the main services provided by the organization are Website Designing and Development, Search Engine Optimization, Website Marketing and many more.
The website is built on a responsive design framework, ensuring that it is accessible and easy to use on desktop and mobile devices.

## Tech Stack
- **FrontEnd**: React JS
- **BackeEnd**: Node JS
- **DataBase**: MongoDB

## Features
The website includes the following features:

1. **Homepage**: A clear introduction to our services and areas of expertise.
2. **About Us**: An overview of our company's Services as well as our team's expertise and experience.
3. **Services**: A detailed overview of the IT services we offer and how they work.
4. **Contact Us**: Visitors to get in touch with us, can fill out a form.

## Flow of the Website
### 1. SignUp
User can signup to the website by adding some basic details asked in the form.There is a validations in each field of the form and only one user email can be used for creating one account. 
#### Validations Used:
- Name: Name cannot contains number or any special character.
- Phone Number: The phone number should be of 10 digits only.
- Email Id: Same Emai Id cannot be used for creating second account.
- Password: Password should match with the confirm password fieild.
![Screenshot (80)](https://user-images.githubusercontent.com/53502082/222903418-d669b04a-17c5-405c-9d63-3b73172356b8.png)

### 2. Login
- After the account is created user can signin the website by using the Emailid and Password he/she used for creating the account.
- If the user forgot the Password for the account he/she can reset the password by clicking **Forgot Password** Button.
![Screenshot (81)](https://user-images.githubusercontent.com/53502082/222903802-8dcfe1c3-ee3e-4248-a654-40362c23b721.png)

### 2.1 Forgot Password
User can provide Email Id for which he/she want to reset the password. An **OTP** will be generated in the MongoDB Database which can be used for verifying the user.
![Screenshot (82)](https://user-images.githubusercontent.com/53502082/222904128-293b3d40-619d-4067-a83f-429d87ce7702.png)

### 2.2 Reset Password
Once trhe user is verified then user can change their password.
![Screenshot (83)](https://user-images.githubusercontent.com/53502082/222904299-f7e14cb1-0f85-4ce0-9fd8-f1363c1d2899.png)

### 3. Home Page
![Screenshot (84)](https://user-images.githubusercontent.com/53502082/222904392-a10270c7-c75a-40f6-a485-b110caf17944.png)

### 4. About Us
![Screenshot (85)](https://user-images.githubusercontent.com/53502082/222904463-53b34954-fd62-4d51-88de-a285260c823d.png)

### 5. Services
![Screenshot (86)](https://user-images.githubusercontent.com/53502082/222904538-d97995bb-c6d4-4306-bade-74f5dabe0e44.png)

### 6. Contact Us
When the user fill out the form an email be sent to the website admin. For sending the mails to the admin **Email JS** API is used
![Screenshot (87)](https://user-images.githubusercontent.com/53502082/222904531-c64b1964-c17b-4f15-9b84-36ba6aa17a17.png)

