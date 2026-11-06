import{use as r}from"react";import{CourseCard as b}from"@moodlehq/design-system";import{getString as o}from"@moodle/lms/core/stringUtils";import{jsx as h}from"react/jsx-runtime";/**
 * My courses card, rendered with the design system CourseCard.
 *
 * @module     block_myoverview/CourseCard
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const t=e=>new DOMParser().parseFromString(e,"text/html").documentElement.textContent??"";function C({id:e,fullname:a,viewurl:i,courseimage:d,coursecategory:n,showcoursecategory:l=!1,hasprogress:u=!1,progress:c=0,hidden:m=!1}){const s=Math.floor(c),g=r(o("completepercent","block_myoverview",s)),f=r(o("hiddenfromstudents","core")),p=r(o("continue","core"));return h(b,{"data-course-id":e,className:"w-100",title:t(a),subtitle:l&&n?t(n):void 0,imageSrc:d||void 0,badgeLabel:m?f:void 0,progressLabel:u?g:void 0,progressValue:s,linkLabel:p,linkHref:i})}export{C as default};
