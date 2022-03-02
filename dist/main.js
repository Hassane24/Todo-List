(()=>{"use strict";function e(e,t,c,n,i=!1){return{title:e,description:t,dueDate:c,priority:n,isDone:i,getTitle:()=>e,getDescription:()=>t,getPriority:()=>n,toggle:()=>{i=!i},getDate:()=>c}}const t=(()=>{let t=[];const c=document.getElementById("add-button"),n=document.querySelector(".cancel-button"),i=document.querySelector(".submit"),o=document.getElementById("overlay"),a=document.querySelector(".low"),u=document.querySelector(".medium"),d=document.querySelector(".high"),r=document.querySelector("span.error"),l=document.querySelector("[data-title]"),s=document.querySelector("[data-about]"),v=document.getElementById("due-date"),m=document.querySelector(".add-project-button"),y=document.querySelector("#add-project"),E=document.querySelector("#cancel-project"),f=document.querySelector(".projects"),p=document.getElementById("project"),g=document.querySelector(".sidebar"),h=document.querySelector(".title-error");function L(e){const t=document.querySelector(".task-items");console.log(t);for(let c=0;c<e.length;c++){const n=document.createElement("div");P(n,"item"),T(t,n);const i=document.createElement("div");T(n,i);const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("id","checkbox");const a=document.createElement("div");P(a,"task-title"),H(a,e[c].title);const u=document.createElement("button");P(u,"delete-button"),u.innerHTML="&times;",T(i,o),T(i,a),T(i,u);const d=document.createElement("div");P(d,"thin-line"),T(n,d);const r=document.createElement("div");P(r,"task-info"),H(r,e[c].description),T(n,r);const l=document.createElement("div");P(l,"thin-line"),T(n,l);const s=document.createElement("div");P(s,"task-status"),T(n,s);const v=document.createElement("input");v.setAttribute("type","date"),v.setAttribute("name","date"),v.setAttribute("id","date"),v.value=e[c].dueDate,T(s,v)}}function k(){P(a,"active"),w(u,"active"),w(d,"active"),w(r,"active")}function q(){P(u,"active"),w(a,"active"),w(d,"active"),w(r,"active")}function S(){P(d,"active"),w(u,"active"),w(a,"active"),w(r,"active")}function b(){w(a,"active"),w(u,"active"),w(d,"active"),w(r,"active"),B(s,""),B(l,""),P(document.querySelector("div.form"),"active"),P(o,"active")}function j(){w(document.querySelector("div.form"),"active"),w(o,"active")}function I(){if(""==p.value)return P(h,"active"),x(h,"Please choose a project title"),P(y,"active"),void P(E,"active");P(f,"hide"),w(m,"hide"),function(){const e=document.createElement("img"),t=document.createElement("img");t.src="Images/close-circle-outline.svg",e.src="Images/format-list-checks.svg";const c=document.createElement("span");H(c,p.value);const n=document.createElement("div");T(n,e),T(n,c),T(n,t),P(n,"a-project"),T(g,n)}()}function A(){P(f,"hide"),w(m,"hide")}function D(){B(p,""),P(m,"hide"),w(f,"hide"),w(y,"active"),w(E,"active"),w(h,"active")}function P(e,t){e.classList.add(t)}function w(e,t){e.classList.remove(t)}function x(e,t){e.textContent=t}function B(e,t){e.value=t}function T(e,t){e.append(t)}function H(e,t){e.textContent=t}return{loadHomePage:function(){c.addEventListener("click",b),o.addEventListener("click",j),n.addEventListener("click",j),i.addEventListener("click",(()=>""==l.value||""==v.value?alert("Task Title is empty or you havent chose the due date"):a.classList.contains("active")||u.classList.contains("active")||d.classList.contains("active")?(a.classList.contains("active")&&(t.push(e(l.value,s.value,v.value,"low")),L(t),j()),u.classList.contains("active")&&(t.push(e(l.value,s.value,v.value,"low")),L(t),j()),d.classList.contains("active")&&(t.push(e(l.value,s.value,v.value,"low")),L(t),j()),void L(t)):(P(r,"active"),void x(r,"Please choose a priority")))),m.addEventListener("click",D),E.addEventListener("click",A),y.addEventListener("click",I),a.addEventListener("click",k),u.addEventListener("click",q),d.addEventListener("click",S)}}})();console.log("55"),t.loadHomePage()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQ2hDN0UsRUFBVThFLEtBQ1IxRixFQUFLd0IsRUFBVWlDLE1BQU9oQyxFQUFVZ0MsTUFBTy9CLEVBQUsrQixNQUFPLFFBRXJEdkIsRUFBYXRCLEdBQ2JvRCxLQUdFMUMsRUFBU3NELFVBQVVhLFNBQVMsWUFDOUI3RSxFQUFVOEUsS0FDUjFGLEVBQUt3QixFQUFVaUMsTUFBT2hDLEVBQVVnQyxNQUFPL0IsRUFBSytCLE1BQU8sUUFFckR2QixFQUFhdEIsR0FDYm9ELFVBRUY5QixFQUFhdEIsS0E1QlgrQixFQUFTcEIsRUFBVyxlQUNwQjJDLEVBQVUzQyxFQUFXLCtCQXdIekJJLEVBQWlCNEQsaUJBQWlCLFFBQVNkLEdBQzNDNUMsRUFBYzBELGlCQUFpQixRQUFTZixHQUN4QzVDLEVBQVcyRCxpQkFBaUIsUUFBU3RCLEdBL0NyQzdDLEVBQVFtRSxpQkFBaUIsUUFBUzdCLEdBQ2xDckMsRUFBV2tFLGlCQUFpQixRQUFTM0IsR0FDckN0QyxFQUFTaUUsaUJBQWlCLFFBQVMxQixNQTlINUIsR0NEWHhCLFFBQVFDLElBQUksTUFDWjNCLEVBQUcyRSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Nb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZHVsZXMvcG9wLXVwLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNEb25lID0gZmFsc2UpIHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGR1ZURhdGU7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgaXNEb25lID0gIWlzRG9uZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgaXNEb25lLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHRvZ2dsZSxcbiAgICBnZXREYXRlLFxuICB9O1xufVxuXG5leHBvcnQgeyB0YXNrIH07XG4iLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnV0dG9uXCIpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcbiAgY29uc3QgbG93UHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG93XCIpO1xuICBjb25zdCBtZWRpdW1QcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpdW1cIik7XG4gIGNvbnN0IGhpZ2hQcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdoXCIpO1xuICBjb25zdCBwcmlvRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5lcnJvclwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcbiAgY29uc3QgdGFza0Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWFib3V0XVwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIik7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG4gIGNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1wcm9qZWN0XCIpO1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICBjb25zdCB0aXRsZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1lcnJvclwiKTtcblxuICBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgYWRkVGFzaygpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICBhZGRQcm9qZWN0Rm9ybSgpO1xuICAgIHByaW9CdXR0b25zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Gb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgICAgSW5wdXQgRXJyb3JcblxuICAgICAgaWYgKHRhc2tUaXRsZS52YWx1ZSA9PSBcIlwiIHx8IGRhdGUudmFsdWUgPT0gXCJcIilcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVGFzayBUaXRsZSBpcyBlbXB0eSBvciB5b3UgaGF2ZW50IGNob3NlIHRoZSBkdWUgZGF0ZVwiKTtcblxuICAgICAgLy8gICAgIFByaW9yaXR5IEVycm9yXG5cbiAgICAgIGlmIChcbiAgICAgICAgIWxvd1ByaW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmXG4gICAgICAgICFtZWRpdW1QcmlvLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJlxuICAgICAgICAhaGlnaFByaW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICApIHtcbiAgICAgICAgYWRkQ2xhc3MocHJpb0Vycm9yLCBcImFjdGl2ZVwiKTtcbiAgICAgICAgc2hvd0Vycm9yKHByaW9FcnJvciwgXCJQbGVhc2UgY2hvb3NlIGEgcHJpb3JpdHlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxvd1ByaW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKFxuICAgICAgICAgIHRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrQWJvdXQudmFsdWUsIGRhdGUudmFsdWUsIFwibG93XCIpXG4gICAgICAgICk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyh0YXNrQXJyYXkpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGl1bVByaW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKFxuICAgICAgICAgIHRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrQWJvdXQudmFsdWUsIGRhdGUudmFsdWUsIFwibG93XCIpXG4gICAgICAgICk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyh0YXNrQXJyYXkpO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhpZ2hQcmlvLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICB0YXNrQXJyYXkucHVzaChcbiAgICAgICAgICB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza0Fib3V0LnZhbHVlLCBkYXRlLnZhbHVlLCBcImxvd1wiKVxuICAgICAgICApO1xuICAgICAgICBkaXNwbGF5VGFza3ModGFza0FycmF5KTtcbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICB9XG4gICAgICBkaXNwbGF5VGFza3ModGFza0FycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pdGVtc1wiKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrSXRlbXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3MoaXRlbURpdiwgXCJpdGVtXCIpO1xuICAgICAgYXBwZW5kQ2hpbGRUb1BhcmVudCh0YXNrSXRlbXMsIGl0ZW1EaXYpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoaXRlbURpdiwgZGl2KTtcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhZGRDbGFzcyh0YXNrVGl0bGVEaXYsIFwidGFzay10aXRsZVwiKTtcbiAgICAgIGFkZFRleHRUb0VsZW1lbnQodGFza1RpdGxlRGl2LCBhcnJheVtpXS50aXRsZSk7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkQ2xhc3MoZGVsZXRlQnV0dG9uLCBcImRlbGV0ZS1idXR0b25cIik7XG4gICAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gICAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgY2hlY2tCb3gpO1xuICAgICAgYXBwZW5kQ2hpbGRUb1BhcmVudChkaXYsIHRhc2tUaXRsZURpdik7XG4gICAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgZGVsZXRlQnV0dG9uKTtcbiAgICAgIGNvbnN0IHRoaW5MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFkZENsYXNzKHRoaW5MaW5lLCBcInRoaW4tbGluZVwiKTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoaXRlbURpdiwgdGhpbkxpbmUpO1xuICAgICAgY29uc3QgdGFza0luZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3ModGFza0luZm9EaXYsIFwidGFzay1pbmZvXCIpO1xuICAgICAgYWRkVGV4dFRvRWxlbWVudCh0YXNrSW5mb0RpdiwgYXJyYXlbaV0uZGVzY3JpcHRpb24pO1xuICAgICAgYXBwZW5kQ2hpbGRUb1BhcmVudChpdGVtRGl2LCB0YXNrSW5mb0Rpdik7XG4gICAgICBjb25zdCB0aGluTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3ModGhpbkxpbmUxLCBcInRoaW4tbGluZVwiKTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoaXRlbURpdiwgdGhpbkxpbmUxKTtcbiAgICAgIGNvbnN0IHRhc2tTdGF0dXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3ModGFza1N0YXR1c0RpdiwgXCJ0YXNrLXN0YXR1c1wiKTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoaXRlbURpdiwgdGFza1N0YXR1c0Rpdik7XG4gICAgICBjb25zdCBkYXRleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGRhdGV5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgZGF0ZXkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgICBkYXRleS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gICAgICBkYXRleS52YWx1ZSA9IGFycmF5W2ldLmR1ZURhdGU7XG4gICAgICBhcHBlbmRDaGlsZFRvUGFyZW50KHRhc2tTdGF0dXNEaXYsIGRhdGV5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmlvQnV0dG9ucygpIHtcbiAgICBsb3dQcmlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmlvQnV0dG9uc0FjdGl2ZUdyZWVuKTtcbiAgICBtZWRpdW1QcmlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmlvQnV0dG9uc0FjdGl2ZVllbGxvdyk7XG4gICAgaGlnaFByaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW9CdXR0b25zQWN0aXZlUmVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW9CdXR0b25zQWN0aXZlR3JlZW4oKSB7XG4gICAgYWRkQ2xhc3MobG93UHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MobWVkaXVtUHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoaGlnaFByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKHByaW9FcnJvciwgXCJhY3RpdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBwcmlvQnV0dG9uc0FjdGl2ZVllbGxvdygpIHtcbiAgICBhZGRDbGFzcyhtZWRpdW1QcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhsb3dQcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhoaWdoUHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MocHJpb0Vycm9yLCBcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW9CdXR0b25zQWN0aXZlUmVkKCkge1xuICAgIGFkZENsYXNzKGhpZ2hQcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhtZWRpdW1QcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhsb3dQcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhwcmlvRXJyb3IsIFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gICAgcmVtb3ZlQ2xhc3MobG93UHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MobWVkaXVtUHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoaGlnaFByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKHByaW9FcnJvciwgXCJhY3RpdmVcIik7XG4gICAgY2xlYXJGb3JtSW5wdXRzKHRhc2tBYm91dCwgXCJcIik7XG4gICAgY2xlYXJGb3JtSW5wdXRzKHRhc2tUaXRsZSwgXCJcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybVwiKTtcbiAgICBhZGRDbGFzcyhmb3JtLCBcImFjdGl2ZVwiKTtcbiAgICBhZGRDbGFzcyhvdmVybGF5LCBcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtXCIpO1xuICAgIHJlbW92ZUNsYXNzKGZvcm0sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKG92ZXJsYXksIFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RGb3JtKTtcbiAgICBjYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RGb3JtKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0VGl0bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdFRpdGxlKCkge1xuICAgIGlmIChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhZGRDbGFzcyh0aXRsZUVycm9yLCBcImFjdGl2ZVwiKTtcbiAgICAgIHNob3dFcnJvcih0aXRsZUVycm9yLCBcIlBsZWFzZSBjaG9vc2UgYSBwcm9qZWN0IHRpdGxlXCIpO1xuICAgICAgYWRkQ2xhc3MoYWRkUHJvamVjdCwgXCJhY3RpdmVcIik7XG4gICAgICBhZGRDbGFzcyhjYW5jZWxQcm9qZWN0LCBcImFjdGl2ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkQ2xhc3MocHJvamVjdEZvcm0sIFwiaGlkZVwiKTtcbiAgICByZW1vdmVDbGFzcyhhZGRQcm9qZWN0QnV0dG9uLCBcImhpZGVcIik7XG4gICAgY3JlYXRlUHJvamVjdHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBjbG9zZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjbG9zZUltYWdlLnNyYyA9IFwiSW1hZ2VzL2Nsb3NlLWNpcmNsZS1vdXRsaW5lLnN2Z1wiO1xuICAgIGltYWdlLnNyYyA9IFwiSW1hZ2VzL2Zvcm1hdC1saXN0LWNoZWNrcy5zdmdcIjtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYWRkVGV4dFRvRWxlbWVudChzcGFuLCBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgaW1hZ2UpO1xuICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoZGl2LCBzcGFuKTtcbiAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgY2xvc2VJbWFnZSk7XG4gICAgYWRkQ2xhc3MoZGl2LCBcImEtcHJvamVjdFwiKTtcbiAgICBhcHBlbmRDaGlsZFRvUGFyZW50KHNpZGVCYXIsIGRpdik7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGFkZENsYXNzKHByb2plY3RGb3JtLCBcImhpZGVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoYWRkUHJvamVjdEJ1dHRvbiwgXCJoaWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIGNsZWFyRm9ybUlucHV0cyhwcm9qZWN0VGl0bGVJbnB1dCwgXCJcIik7XG4gICAgYWRkQ2xhc3MoYWRkUHJvamVjdEJ1dHRvbiwgXCJoaWRlXCIpO1xuICAgIHJlbW92ZUNsYXNzKHByb2plY3RGb3JtLCBcImhpZGVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoYWRkUHJvamVjdCwgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoY2FuY2VsUHJvamVjdCwgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3ModGl0bGVFcnJvciwgXCJhY3RpdmVcIik7XG4gIH1cblxuICAvLyBVdGlsaXR5IGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Vycm9yKGVsZW1lbnQsIG1lc3NhZ2UpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybUlucHV0cyhlbGVtZW50LCBjbGVhcikge1xuICAgIGVsZW1lbnQudmFsdWUgPSBjbGVhcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZENoaWxkVG9QYXJlbnQocGFyZW50LCBjaGlsZCkge1xuICAgIHBhcmVudC5hcHBlbmQoY2hpbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGV4dFRvRWxlbWVudChlbGVtZW50LCB0ZXh0KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRIb21lUGFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH07XG4iLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL01vZHVsZXMvcG9wLXVwLWZvcm1cIjtcbmNvbnNvbGUubG9nKFwiNTVcIik7XG5VSS5sb2FkSG9tZVBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJ0YXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsImlzRG9uZSIsImdldFRpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJnZXRQcmlvcml0eSIsInRvZ2dsZSIsImdldERhdGUiLCJVSSIsInRhc2tBcnJheSIsImFkZFRhc2tCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FuY2VsQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInN1Ym1pdEJ1dHRvbiIsIm92ZXJsYXkiLCJsb3dQcmlvIiwibWVkaXVtUHJpbyIsImhpZ2hQcmlvIiwicHJpb0Vycm9yIiwidGFza1RpdGxlIiwidGFza0Fib3V0IiwiZGF0ZSIsImFkZFByb2plY3RCdXR0b24iLCJhZGRQcm9qZWN0IiwiY2FuY2VsUHJvamVjdCIsInByb2plY3RGb3JtIiwicHJvamVjdFRpdGxlSW5wdXQiLCJzaWRlQmFyIiwidGl0bGVFcnJvciIsImRpc3BsYXlUYXNrcyIsImFycmF5IiwidGFza0l0ZW1zIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJpdGVtRGl2IiwiY3JlYXRlRWxlbWVudCIsImFkZENsYXNzIiwiYXBwZW5kQ2hpbGRUb1BhcmVudCIsImRpdiIsImNoZWNrQm94Iiwic2V0QXR0cmlidXRlIiwidGFza1RpdGxlRGl2IiwiYWRkVGV4dFRvRWxlbWVudCIsImRlbGV0ZUJ1dHRvbiIsImlubmVySFRNTCIsInRoaW5MaW5lIiwidGFza0luZm9EaXYiLCJ0aGluTGluZTEiLCJ0YXNrU3RhdHVzRGl2IiwiZGF0ZXkiLCJ2YWx1ZSIsInByaW9CdXR0b25zQWN0aXZlR3JlZW4iLCJyZW1vdmVDbGFzcyIsInByaW9CdXR0b25zQWN0aXZlWWVsbG93IiwicHJpb0J1dHRvbnNBY3RpdmVSZWQiLCJvcGVuRm9ybSIsImNsZWFyRm9ybUlucHV0cyIsImNsb3NlRm9ybSIsImFkZFByb2plY3RUaXRsZSIsInNob3dFcnJvciIsImltYWdlIiwiY2xvc2VJbWFnZSIsInNyYyIsInNwYW4iLCJjcmVhdGVQcm9qZWN0cyIsImNsb3NlUHJvamVjdEZvcm0iLCJvcGVuUHJvamVjdEZvcm0iLCJlbGVtZW50IiwiY2xhcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm1lc3NhZ2UiLCJ0ZXh0Q29udGVudCIsImNsZWFyIiwicGFyZW50IiwiY2hpbGQiLCJhcHBlbmQiLCJ0ZXh0IiwibG9hZEhvbWVQYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwiY29udGFpbnMiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==