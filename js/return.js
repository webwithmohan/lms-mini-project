

let issuebooks = JSON.parse(localStorage.getItem('issuebooks')) || []
let table = document.querySelector('.table-container .issue-table tbody')




function loadIssue() {

    let table = document.querySelector('.table-container .issue-table tbody')
    table.innerHTML=""
    issuebooks.forEach((issue) => {
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        let dueDate = new Date(issue.dueDate);
        dueDate.setHours(0, 0, 0, 0);

        let statusText = dueDate < today ? "Overdue" : "Issued";
        let statusClass = dueDate < today ? "overdue" : "issued";

        table.innerHTML += ` <tr>
        <td>${issue.issueId}</td>
        <td>${issue.issueBook}
        <span style="display:block">Book Id :${issue.bookId}</span>
        </td>
        <td>
          <strong>${issue.issueMember}</strong>
        
        </td>
        <td>${issue.issueDate}</td>
        <td>
          <span class="date">${issue.dueDate}</</span>
          <span class="status ${statusClass}">${statusText}</span>
        </td>
        <td>
         
          <button class="btn return" onClick=returnBook('${issue.issueId}')>Return</button>
        </td>
      </tr>`

    })



}
document.onload = loadIssue();


// function updateDueDate() {

//     let issue = JSON.parse(localStorage.getItem("issuebooks")) || [];

//     issue = issue.map(issue => {
//         if (issue.issueId == "ISS-102" ) {
//             return {
//                 ...issue,
//                 dueDate: '2026-10-10',
//             };
//         }

//         return issue;
//     });

//     localStorage.setItem("issuebooks", JSON.stringify(issue));

//     console.log("Due date updated successfully!");
// }
// updateDueDate()



//Return Book Management
function returnBook(id){
    issuebooks=issuebooks.filter(issue => issue.issueId !== id);
    localStorage.setItem('issuebooks',JSON.stringify(issuebooks))
    loadIssue()

    
    


}


