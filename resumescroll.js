// document.querySelector('#resume').addEventListener('mousedown', function (e) {
//     isMouseDown = true;
//     startY = e.pageY - this.offsetTop;
//     scrollTop = this.scrollTop;
// });

// document.querySelector('#resume').addEventListener('mouseleave', function () {
//     isMouseDown = false;
// });

// document.querySelector('#resume').addEventListener('mouseup', function () {
//     isMouseDown = false;
// });

// document.querySelector('#resume').addEventListener('mousemove', function (e) {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     let y = e.pageY - this.offsetTop;
//     let walk = (y - startY) * 2; // Adjust the multiplier based on your preference
//     this.scrollTop = scrollTop - walk;
// });
// var resumeContainer = document.querySelector('.resume-container');
//     var isMouseDown = false;
//     var startY;
//     var scrollTop;

//     resumeContainer.addEventListener('mousedown', function (e) {
//         isMouseDown = true;
//         startY = e.pageY - this.offsetTop;
//         scrollTop = this.scrollTop;
//     });

//     resumeContainer.addEventListener('mouseleave', function () {
//         isMouseDown = false;
//     });

//     resumeContainer.addEventListener('mouseup', function () {
//         isMouseDown = false;
//     });

//     resumeContainer.addEventListener('mousemove', function (e) {
//         if (!isMouseDown) return;
//         e.preventDefault();
//         var y = e.pageY - this.offsetTop;
//         var walk = (y - startY) * 2; // Adjust the multiplier based on your preference
//         this.scrollTop = scrollTop - walk;
//     });
