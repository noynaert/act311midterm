const baseurl = "https://raw.githubusercontent.com/noynaert/act311midterm/main/";
let departmentFile = "CSMP.json";

function first(response) {
    console.log("I am in first!");
    let whence = document.getElementById("statusSpot");
    statusSpot.innerHTML = "Got a response!"
    statusSpot.className = "bg-danger text-white"
    console.log(response);
    console.log("My status code is " + response.status);
    return response.json();
}
function second(data){
    console.log("in second(data)");
    let whence = document.getElementById("statusSpot");
    statusSpot.innerHTML = "&nbsp;Data Received!&nbsp;"
    statusSpot.className = "bg-white text-primary"

    displayCourses(data);

    //no return needed because this is the last promise in the chain.
    //PAST THE POINT OF NO RETURN
}
function displayCourses(courses){
    console.log("In displayCourses()");

    // for(course of courses){
    //    // console.log(course);
    //    console.log(course.course + " "+ course.instructor);
    // }
//     let lines = "<pre> I am here\n";
//     for(o of courses){
//       lines += o.course + "--" + o.course_enrollment["Section Seats Available"]+'\n';
// //       lines += o["course"] + "--" + o["title"]+'\n';

//     }
//     lines = lines + "</pre>";
       courses.sort((a,b)=> (a.instructor<b.instructor)?-1:1);
       let lines = "<table>";
       lines += '<tr><th>Course</th><th>Instructor</th></tr>';
       for(o of courses){
            let line="";
            line += '<tr>';
            line += '<td>'+o.course+'</td>';
            line += '<td>'+o.instructor+'</td>';
            line += '</tr>';
            console.log(line);
            lines += line;
       }
       lines += lines +'</table>';

    document.getElementById("dataSpot").innerHTML = lines;

}

function init() {
    console.log("In init()");
    url = baseurl + departmentFile;
    console.log(url);

    fetch(url)
        .then(response => {
            console.log("I am in first!");
            let whence = document.getElementById("statusSpot");
            statusSpot.innerHTML = "Got a response!"
            statusSpot.className = "bg-danger text-white"
            console.log(response);
            console.log("My status code is " + response.status);
            return response.json()
        })
        //.then(first)
        .then(second)
        //.then(data => console.log(data))
        .catch(err => console.log("Error: " + err));
        console.log("I am after the fetch");
}