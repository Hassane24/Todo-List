(()=>{"use strict";function e(e,t,c,n,i=!1){return{title:e,description:t,dueDate:c,priority:n,isDone:i,getTitle:()=>e,getDescription:()=>t,getPriority:()=>n,toggle:()=>{i=!i},getDate:()=>c}}const t=(()=>{let t=[];const c=document.getElementById("add-button"),n=document.querySelector(".cancel-button"),i=document.querySelector(".submit"),o=document.getElementById("overlay"),a=document.querySelector(".low"),r=document.querySelector(".medium"),d=document.querySelector(".high"),u=document.querySelector("span.error"),l=document.querySelector("[data-title]"),s=document.querySelector("[data-about]"),m=document.getElementById("due-date"),v=document.querySelector(".add-project-button"),y=document.querySelector("#add-project"),h=document.querySelector("#cancel-project"),p=document.querySelector(".projects"),E=document.getElementById("project"),f=document.querySelector(".sidebar"),g=document.querySelector(".title-error");function k(){B(a,"active"),D(r,"active"),D(d,"active"),D(u,"active")}function L(){B(r,"active"),D(a,"active"),D(d,"active"),D(u,"active")}function q(){B(d,"active"),D(r,"active"),D(a,"active"),D(u,"active")}function S(){D(a,"active"),D(r,"active"),D(d,"active"),D(u,"active"),w(s,""),w(l,""),w(m,""),B(document.querySelector("div.form"),"active"),B(o,"active")}function b(){D(document.querySelector("div.form"),"active"),D(o,"active")}function j(){if(""==E.value)return B(g,"active"),P(g,"Please choose a project title"),B(y,"active"),void B(h,"active");B(p,"hide"),D(v,"hide"),function(){const e=document.createElement("img"),t=document.createElement("img");t.src="Images/close-circle-outline.svg",e.src="Images/format-list-checks.svg";const c=document.createElement("span");C(c,E.value);const n=document.createElement("div");x(n,e),x(n,c),x(n,t),B(n,"a-project"),x(f,n)}()}function I(){B(p,"hide"),D(v,"hide")}function A(){w(E,""),B(v,"hide"),D(p,"hide"),D(y,"active"),D(h,"active"),D(g,"active")}function B(e,t){e.classList.add(t)}function D(e,t){e.classList.remove(t)}function P(e,t){e.textContent=t}function w(e,t){e.value=t}function x(e,t){e.append(t)}function C(e,t){e.textContent=t}return{loadHomePage:function(){c.addEventListener("click",S),o.addEventListener("click",b),n.addEventListener("click",b),i.addEventListener("click",(()=>(function(e){const t=document.getElementsByClassName("item");for(;t.length>0;)t[0].parentNode.removeChild(t[0])}(),""==l.value||""==m.value?alert("Task Title is empty or you havent chose the due date"):a.classList.contains("active")||r.classList.contains("active")||d.classList.contains("active")?(a.classList.contains("active")&&(t.push(e(l.value,s.value,m.value,"low")),b()),r.classList.contains("active")&&(t.push(e(l.value,s.value,m.value,"medium")),b()),d.classList.contains("active")&&(t.push(e(l.value,s.value,m.value,"high")),b()),void function(e){const c=document.querySelector(".task-items");for(let n=0;n<e.length;n++){e[n].id="task"+n;const i=document.createElement("div");B(i,"item"),"low"==e[n].priority&&B(i,"low-prio"),"medium"==e[n].priority&&B(i,"mid-prio"),"high"==e[n].priority&&B(i,"high-prio"),console.log(t),x(c,i);const o=document.createElement("div");x(i,o);const a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("id","checkbox");const r=document.createElement("div");B(r,"task-header"),C(r,e[n].title);const d=document.createElement("button");B(d,"delete-button"),d.innerHTML="&times;",x(o,a),x(o,r),x(o,d);const u=document.createElement("div");B(u,"thin-line"),x(i,u);const l=document.createElement("div");B(l,"task-info"),C(l,e[n].description),x(i,l);const s=document.createElement("div");B(s,"thin-line"),x(i,s);const m=document.createElement("div");B(m,"task-status"),x(i,m);const v=document.createElement("input");v.setAttribute("type","date"),v.setAttribute("name","date"),v.setAttribute("id","date"),v.value=e[n].dueDate,x(m,v),d.addEventListener("click",(()=>{i.remove(),e=e.filter((t=>t.id!==e[n].id))}))}}(t)):(B(u,"active"),void P(u,"Please choose a priority"))))),v.addEventListener("click",A),h.addEventListener("click",I),y.addEventListener("click",j),a.addEventListener("click",k),r.addEventListener("click",L),d.addEventListener("click",q)}}})();console.log("55"),t.loadHomePage()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBU3lELEVBQVUsYUFDbkJ4QyxFQUFvQmdDLEVBQVNRLEdBQzdCLE1BQU1DLEVBQWMvRSxTQUFTZ0MsY0FBYyxPQUMzQ1gsRUFBUzBELEVBQWEsYUFDdEIzQyxFQUFpQjJDLEVBQWFiLEVBQU1FLEdBQUdoRixhQUN2Q2tELEVBQW9CZ0MsRUFBU1MsR0FDN0IsTUFBTUMsRUFBWWhGLFNBQVNnQyxjQUFjLE9BQ3pDWCxFQUFTMkQsRUFBVyxhQUNwQjFDLEVBQW9CZ0MsRUFBU1UsR0FDN0IsTUFBTUMsRUFBZ0JqRixTQUFTZ0MsY0FBYyxPQUM3Q1gsRUFBUzRELEVBQWUsZUFDeEIzQyxFQUFvQmdDLEVBQVNXLEdBQzdCLE1BQU1DLEVBQVFsRixTQUFTZ0MsY0FBYyxTQUNyQ2tELEVBQU1SLGFBQWEsT0FBUSxRQUMzQlEsRUFBTVIsYUFBYSxPQUFRLFFBQzNCUSxFQUFNUixhQUFhLEtBQU0sUUFDekJRLEVBQU1yRCxNQUFRcUMsRUFBTUUsR0FBRy9FLFFBQ3ZCaUQsRUFBb0IyQyxFQUFlQyxHQUNuQ04sRUFBYXJCLGlCQUFpQixTQUFTLEtBQ3JDZSxFQUFReEIsU0FDUm9CLEVBQVFBLEVBQU1pQixRQUFRYixHQUNiQSxFQUFRRCxLQUFPSCxFQUFNRSxHQUFHQyxTQXBEbkNlLENBQWF0RixLQXpCWHVCLEVBQVNaLEVBQVcsZUFDcEJxQixFQUFVckIsRUFBVyxnQ0FpSXpCSSxFQUFpQjBDLGlCQUFpQixRQUFTZCxHQUMzQzFCLEVBQWN3QyxpQkFBaUIsUUFBU2YsR0FDeEMxQixFQUFXeUMsaUJBQWlCLFFBQVMzQixHQWhEckN0QixFQUFRaUQsaUJBQWlCLFFBQVNuQyxHQUNsQ2IsRUFBV2dELGlCQUFpQixRQUFTaEMsR0FDckNmLEVBQVMrQyxpQkFBaUIsUUFBUy9CLE1Bekk1QixHQ0RYK0MsUUFBUUMsSUFBSSxNQUNaM0UsRUFBR3lELGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL01vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvTW9kdWxlcy9wb3AtdXAtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUgPSBmYWxzZSkge1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbiAgfTtcblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBpc0RvbmUgPSAhaXNEb25lO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBpc0RvbmUsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgdG9nZ2xlLFxuICAgIGdldERhdGUsXG4gIH07XG59XG5cbmV4cG9ydCB7IHRhc2sgfTtcbiIsImltcG9ydCB7IHRhc2sgfSBmcm9tIFwiLi9UYXNrXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtYnV0dG9uXCIpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1idXR0b25cIik7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuICBjb25zdCBsb3dQcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3dcIik7XG4gIGNvbnN0IG1lZGl1bVByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lZGl1bVwiKTtcbiAgY29uc3QgaGlnaFByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2hcIik7XG4gIGNvbnN0IHByaW9FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmVycm9yXCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuICBjb25zdCB0YXNrQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWJvdXRdXCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcbiAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLXByb2plY3RcIik7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gIGNvbnN0IHRpdGxlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWVycm9yXCIpO1xuXG4gIGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgICBhZGRUYXNrKCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIGFkZFByb2plY3RGb3JtKCk7XG4gICAgcHJpb0J1dHRvbnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vcmVtb3ZpbmcgZWxlbWVudHMgc28gdGhleSBkb250IGR1cGxpY2F0ZVxuICAgICAgcmVtb3ZlRWxlbWVudHNCeUNsYXNzKFwiaXRlbVwiKTtcblxuICAgICAgLy8gICAgIElucHV0IEVycm9yXG5cbiAgICAgIGlmICh0YXNrVGl0bGUudmFsdWUgPT0gXCJcIiB8fCBkYXRlLnZhbHVlID09IFwiXCIpXG4gICAgICAgIHJldHVybiBhbGVydChcIlRhc2sgVGl0bGUgaXMgZW1wdHkgb3IgeW91IGhhdmVudCBjaG9zZSB0aGUgZHVlIGRhdGVcIik7XG5cbiAgICAgIC8vICAgICBQcmlvcml0eSBFcnJvclxuXG4gICAgICBpZiAoXG4gICAgICAgICFsb3dQcmlvLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJlxuICAgICAgICAhbWVkaXVtUHJpby5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgJiZcbiAgICAgICAgIWhpZ2hQcmlvLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgKSB7XG4gICAgICAgIGFkZENsYXNzKHByaW9FcnJvciwgXCJhY3RpdmVcIik7XG4gICAgICAgIHNob3dFcnJvcihwcmlvRXJyb3IsIFwiUGxlYXNlIGNob29zZSBhIHByaW9yaXR5XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChsb3dQcmlvLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICB0YXNrQXJyYXkucHVzaChcbiAgICAgICAgICB0YXNrKHRhc2tUaXRsZS52YWx1ZSwgdGFza0Fib3V0LnZhbHVlLCBkYXRlLnZhbHVlLCBcImxvd1wiKVxuICAgICAgICApO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGl1bVByaW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKFxuICAgICAgICAgIHRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrQWJvdXQudmFsdWUsIGRhdGUudmFsdWUsIFwibWVkaXVtXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGlnaFByaW8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKFxuICAgICAgICAgIHRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrQWJvdXQudmFsdWUsIGRhdGUudmFsdWUsIFwiaGlnaFwiKVxuICAgICAgICApO1xuICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgIH1cbiAgICAgIGRpc3BsYXlUYXNrcyh0YXNrQXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVRhc2tzKGFycmF5KSB7XG4gICAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWl0ZW1zXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXlbaV0uaWQgPSBcInRhc2tcIiArIGk7XG4gICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFkZENsYXNzKGl0ZW1EaXYsIFwiaXRlbVwiKTtcbiAgICAgIGlmIChhcnJheVtpXS5wcmlvcml0eSA9PSBcImxvd1wiKSBhZGRDbGFzcyhpdGVtRGl2LCBcImxvdy1wcmlvXCIpO1xuICAgICAgaWYgKGFycmF5W2ldLnByaW9yaXR5ID09IFwibWVkaXVtXCIpIGFkZENsYXNzKGl0ZW1EaXYsIFwibWlkLXByaW9cIik7XG4gICAgICBpZiAoYXJyYXlbaV0ucHJpb3JpdHkgPT0gXCJoaWdoXCIpIGFkZENsYXNzKGl0ZW1EaXYsIFwiaGlnaC1wcmlvXCIpO1xuICAgICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQodGFza0l0ZW1zLCBpdGVtRGl2KTtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGl0ZW1EaXYsIGRpdik7XG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3ModGFza1RpdGxlRGl2LCBcInRhc2staGVhZGVyXCIpO1xuICAgICAgYWRkVGV4dFRvRWxlbWVudCh0YXNrVGl0bGVEaXYsIGFycmF5W2ldLnRpdGxlKTtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhZGRDbGFzcyhkZWxldGVCdXR0b24sIFwiZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoZGl2LCBjaGVja0JveCk7XG4gICAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgdGFza1RpdGxlRGl2KTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoZGl2LCBkZWxldGVCdXR0b24pO1xuICAgICAgY29uc3QgdGhpbkxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWRkQ2xhc3ModGhpbkxpbmUsIFwidGhpbi1saW5lXCIpO1xuICAgICAgYXBwZW5kQ2hpbGRUb1BhcmVudChpdGVtRGl2LCB0aGluTGluZSk7XG4gICAgICBjb25zdCB0YXNrSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhZGRDbGFzcyh0YXNrSW5mb0RpdiwgXCJ0YXNrLWluZm9cIik7XG4gICAgICBhZGRUZXh0VG9FbGVtZW50KHRhc2tJbmZvRGl2LCBhcnJheVtpXS5kZXNjcmlwdGlvbik7XG4gICAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGl0ZW1EaXYsIHRhc2tJbmZvRGl2KTtcbiAgICAgIGNvbnN0IHRoaW5MaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhZGRDbGFzcyh0aGluTGluZTEsIFwidGhpbi1saW5lXCIpO1xuICAgICAgYXBwZW5kQ2hpbGRUb1BhcmVudChpdGVtRGl2LCB0aGluTGluZTEpO1xuICAgICAgY29uc3QgdGFza1N0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhZGRDbGFzcyh0YXNrU3RhdHVzRGl2LCBcInRhc2stc3RhdHVzXCIpO1xuICAgICAgYXBwZW5kQ2hpbGRUb1BhcmVudChpdGVtRGl2LCB0YXNrU3RhdHVzRGl2KTtcbiAgICAgIGNvbnN0IGRhdGV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgZGF0ZXkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICBkYXRleS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgICAgIGRhdGV5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgICAgIGRhdGV5LnZhbHVlID0gYXJyYXlbaV0uZHVlRGF0ZTtcbiAgICAgIGFwcGVuZENoaWxkVG9QYXJlbnQodGFza1N0YXR1c0RpdiwgZGF0ZXkpO1xuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGl0ZW1EaXYucmVtb3ZlKCk7XG4gICAgICAgIGFycmF5ID0gYXJyYXkuZmlsdGVyKChpdGVtRGl2KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1EaXYuaWQgIT09IGFycmF5W2ldLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW9CdXR0b25zKCkge1xuICAgIGxvd1ByaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW9CdXR0b25zQWN0aXZlR3JlZW4pO1xuICAgIG1lZGl1bVByaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW9CdXR0b25zQWN0aXZlWWVsbG93KTtcbiAgICBoaWdoUHJpby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpb0J1dHRvbnNBY3RpdmVSZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJpb0J1dHRvbnNBY3RpdmVHcmVlbigpIHtcbiAgICBhZGRDbGFzcyhsb3dQcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhtZWRpdW1QcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhoaWdoUHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MocHJpb0Vycm9yLCBcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW9CdXR0b25zQWN0aXZlWWVsbG93KCkge1xuICAgIGFkZENsYXNzKG1lZGl1bVByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKGxvd1ByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKGhpZ2hQcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhwcmlvRXJyb3IsIFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJpb0J1dHRvbnNBY3RpdmVSZWQoKSB7XG4gICAgYWRkQ2xhc3MoaGlnaFByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKG1lZGl1bVByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKGxvd1ByaW8sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKHByaW9FcnJvciwgXCJhY3RpdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICByZW1vdmVDbGFzcyhsb3dQcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhtZWRpdW1QcmlvLCBcImFjdGl2ZVwiKTtcbiAgICByZW1vdmVDbGFzcyhoaWdoUHJpbywgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MocHJpb0Vycm9yLCBcImFjdGl2ZVwiKTtcbiAgICBjbGVhckZvcm1JbnB1dHModGFza0Fib3V0LCBcIlwiKTtcbiAgICBjbGVhckZvcm1JbnB1dHModGFza1RpdGxlLCBcIlwiKTtcbiAgICBjbGVhckZvcm1JbnB1dHMoZGF0ZSwgXCJcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybVwiKTtcbiAgICBhZGRDbGFzcyhmb3JtLCBcImFjdGl2ZVwiKTtcbiAgICBhZGRDbGFzcyhvdmVybGF5LCBcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtXCIpO1xuICAgIHJlbW92ZUNsYXNzKGZvcm0sIFwiYWN0aXZlXCIpO1xuICAgIHJlbW92ZUNsYXNzKG92ZXJsYXksIFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3RGb3JtKTtcbiAgICBjYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RGb3JtKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0VGl0bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdFRpdGxlKCkge1xuICAgIGlmIChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhZGRDbGFzcyh0aXRsZUVycm9yLCBcImFjdGl2ZVwiKTtcbiAgICAgIHNob3dFcnJvcih0aXRsZUVycm9yLCBcIlBsZWFzZSBjaG9vc2UgYSBwcm9qZWN0IHRpdGxlXCIpO1xuICAgICAgYWRkQ2xhc3MoYWRkUHJvamVjdCwgXCJhY3RpdmVcIik7XG4gICAgICBhZGRDbGFzcyhjYW5jZWxQcm9qZWN0LCBcImFjdGl2ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkQ2xhc3MocHJvamVjdEZvcm0sIFwiaGlkZVwiKTtcbiAgICByZW1vdmVDbGFzcyhhZGRQcm9qZWN0QnV0dG9uLCBcImhpZGVcIik7XG4gICAgY3JlYXRlUHJvamVjdHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBjbG9zZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjbG9zZUltYWdlLnNyYyA9IFwiSW1hZ2VzL2Nsb3NlLWNpcmNsZS1vdXRsaW5lLnN2Z1wiO1xuICAgIGltYWdlLnNyYyA9IFwiSW1hZ2VzL2Zvcm1hdC1saXN0LWNoZWNrcy5zdmdcIjtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYWRkVGV4dFRvRWxlbWVudChzcGFuLCBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgaW1hZ2UpO1xuICAgIGFwcGVuZENoaWxkVG9QYXJlbnQoZGl2LCBzcGFuKTtcbiAgICBhcHBlbmRDaGlsZFRvUGFyZW50KGRpdiwgY2xvc2VJbWFnZSk7XG4gICAgYWRkQ2xhc3MoZGl2LCBcImEtcHJvamVjdFwiKTtcbiAgICBhcHBlbmRDaGlsZFRvUGFyZW50KHNpZGVCYXIsIGRpdik7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgIGFkZENsYXNzKHByb2plY3RGb3JtLCBcImhpZGVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoYWRkUHJvamVjdEJ1dHRvbiwgXCJoaWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICAgIGNsZWFyRm9ybUlucHV0cyhwcm9qZWN0VGl0bGVJbnB1dCwgXCJcIik7XG4gICAgYWRkQ2xhc3MoYWRkUHJvamVjdEJ1dHRvbiwgXCJoaWRlXCIpO1xuICAgIHJlbW92ZUNsYXNzKHByb2plY3RGb3JtLCBcImhpZGVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoYWRkUHJvamVjdCwgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3MoY2FuY2VsUHJvamVjdCwgXCJhY3RpdmVcIik7XG4gICAgcmVtb3ZlQ2xhc3ModGl0bGVFcnJvciwgXCJhY3RpdmVcIik7XG4gIH1cblxuICAvLyBVdGlsaXR5IGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Vycm9yKGVsZW1lbnQsIG1lc3NhZ2UpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybUlucHV0cyhlbGVtZW50LCBjbGVhcikge1xuICAgIGVsZW1lbnQudmFsdWUgPSBjbGVhcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZENoaWxkVG9QYXJlbnQocGFyZW50LCBjaGlsZCkge1xuICAgIHBhcmVudC5hcHBlbmQoY2hpbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGV4dFRvRWxlbWVudChlbGVtZW50LCB0ZXh0KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVFbGVtZW50c0J5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XG4gICAgd2hpbGUgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVsZW1lbnRzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZEhvbWVQYWdlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgVUkgfTtcbiIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vTW9kdWxlcy9wb3AtdXAtZm9ybVwiO1xuY29uc29sZS5sb2coXCI1NVwiKTtcblVJLmxvYWRIb21lUGFnZSgpO1xuIl0sIm5hbWVzIjpbInRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiaXNEb25lIiwiZ2V0VGl0bGUiLCJnZXREZXNjcmlwdGlvbiIsImdldFByaW9yaXR5IiwidG9nZ2xlIiwiZ2V0RGF0ZSIsIlVJIiwidGFza0FycmF5IiwiYWRkVGFza0J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW5jZWxCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0QnV0dG9uIiwib3ZlcmxheSIsImxvd1ByaW8iLCJtZWRpdW1QcmlvIiwiaGlnaFByaW8iLCJwcmlvRXJyb3IiLCJ0YXNrVGl0bGUiLCJ0YXNrQWJvdXQiLCJkYXRlIiwiYWRkUHJvamVjdEJ1dHRvbiIsImFkZFByb2plY3QiLCJjYW5jZWxQcm9qZWN0IiwicHJvamVjdEZvcm0iLCJwcm9qZWN0VGl0bGVJbnB1dCIsInNpZGVCYXIiLCJ0aXRsZUVycm9yIiwicHJpb0J1dHRvbnNBY3RpdmVHcmVlbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcmlvQnV0dG9uc0FjdGl2ZVllbGxvdyIsInByaW9CdXR0b25zQWN0aXZlUmVkIiwib3BlbkZvcm0iLCJjbGVhckZvcm1JbnB1dHMiLCJjbG9zZUZvcm0iLCJhZGRQcm9qZWN0VGl0bGUiLCJ2YWx1ZSIsInNob3dFcnJvciIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlSW1hZ2UiLCJzcmMiLCJzcGFuIiwiYWRkVGV4dFRvRWxlbWVudCIsImRpdiIsImFwcGVuZENoaWxkVG9QYXJlbnQiLCJjcmVhdGVQcm9qZWN0cyIsImNsb3NlUHJvamVjdEZvcm0iLCJvcGVuUHJvamVjdEZvcm0iLCJlbGVtZW50IiwiY2xhcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm1lc3NhZ2UiLCJ0ZXh0Q29udGVudCIsImNsZWFyIiwicGFyZW50IiwiY2hpbGQiLCJhcHBlbmQiLCJ0ZXh0IiwibG9hZEhvbWVQYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUVsZW1lbnRzQnlDbGFzcyIsImFsZXJ0IiwiY29udGFpbnMiLCJwdXNoIiwiYXJyYXkiLCJ0YXNrSXRlbXMiLCJpIiwiaWQiLCJpdGVtRGl2IiwiY29uc29sZSIsImxvZyIsImNoZWNrQm94Iiwic2V0QXR0cmlidXRlIiwidGFza1RpdGxlRGl2IiwiZGVsZXRlQnV0dG9uIiwiaW5uZXJIVE1MIiwidGhpbkxpbmUiLCJ0YXNrSW5mb0RpdiIsInRoaW5MaW5lMSIsInRhc2tTdGF0dXNEaXYiLCJkYXRleSIsImZpbHRlciIsImRpc3BsYXlUYXNrcyJdLCJzb3VyY2VSb290IjoiIn0=