// $(function() {
//     var userInfo = localStorage.getItem('userInfo');
//     var userInfoObj = JSON.parse(userInfo);
  
//     $('#name2').text(userInfoObj.name);
//     $('#surname').text(userInfoObj.lastname);
//     $('#Email2').text(userInfoObj.email);
//     $('#EMBG2').text(userInfoObj.embg);
//     $('#Dob').text(userInfoObj.dob);
//     $('#Destination').text(userInfoObj.destination);
//   });


const users = JSON.parse(localStorage.getItem('users')) || [];

        const userTable = document.getElementById('userTable');

        users.forEach(user => {
            const row = document.createElement('tr');
            const usernameCell = document.createElement('td');
            const emailCell = document.createElement('td');

            usernameCell.textContent = user.username;
            emailCell.textContent = user.email;

            row.appendChild(usernameCell);
            row.appendChild(emailCell);
            userTable.appendChild(row);
        });