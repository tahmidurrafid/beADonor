# Be a Donor

Our primary goal is to build a platform where donors can help the needy ones. Users can donate on specific category or to a specific request as they wish. Our moderator will verify help seeking requests and payment confirmation.

## User and their roles:
- **Anonymous User:** 
    - Anonymous user will be able to register to our system and start to donate or ask for help.
    - They can view gallery, weekly/monthly top donors list, public help seeking posts etc.
- **Registered User:** Registered users will be able to use our system with full privilege. They will: 
    - Donate money/goods.
    - Ask for help.
    - Provide us information about others who need help.
- **Moderators:** 
    - They will review help request before these become visible to others.
    - Manage donations from the donors.
- **Admin User:** 
    - Admin will have the privilege of adding/removing a moderator.
    - Admin will monitor the activities of the moderators

## Use cases of the system:

| Use case | Actor |
| ------- | ------ |
| Create Account | Anonymous user 
| Ask for help | Registered user
| Review help request | Moderator
| Accept Blood donation Request | Registered user
| Donate Money | Registered users
| Verify donation | Moderator
| Submit goods for donation | Registered User
| Update Donor List | System
| Redeem points | Registered user
| Update Gallery | Admin, moderator

<br/><br/>
<img src="https://raw.githubusercontent.com/tahmidurrafid/beADonor/master/Project%20IDeas/beadonor.gif" width="600">

## Technology

The app uses the following technologies:

- Spring Boot
- Spring Data
- Spring Security
- JPA/Hibernate
- JSP/JSTL
- Sitemesh
- Bootstrap/Sass
- jQuery/Ajax
- Adobe XD

## Build Tools:
- Gradle

## Database:
- MySQL


## Author

- [Md. Tahmidur Rafid](https://github.com/tahmidurrafid)

## Installation

Be a Donor requires Gradle 6.3+ to run.

Install the dependencies and devDependencies.

```sh
cd beADonor
gradle clean build
```

