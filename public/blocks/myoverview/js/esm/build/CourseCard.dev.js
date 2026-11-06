var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
/**
 * My courses card, rendered with the design system CourseCard.
 *
 * @module     block_myoverview/CourseCard
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
import { use } from "react";
import { CourseCard as MdsCourseCard } from "@moodlehq/design-system";
import { getString } from "@moodle/lms/core/stringUtils";
const decodeHtml = /* @__PURE__ */ __name((html) => new DOMParser().parseFromString(html, "text/html").documentElement.textContent ?? "", "decodeHtml");
function CourseCard({
  id,
  fullname,
  viewurl,
  courseimage,
  coursecategory,
  showcoursecategory = false,
  hasprogress = false,
  progress = 0,
  hidden = false
}) {
  const percent = Math.floor(progress);
  const progressLabel = use(
    getString("completepercent", "block_myoverview", percent)
  );
  const hiddenLabel = use(getString("hiddenfromstudents", "core"));
  const linkLabel = use(getString("continue", "core"));
  return /* @__PURE__ */ jsxDEV(
    MdsCourseCard,
    {
      "data-course-id": id,
      className: "w-100",
      title: decodeHtml(fullname),
      subtitle: showcoursecategory && coursecategory ? decodeHtml(coursecategory) : void 0,
      imageSrc: courseimage || void 0,
      badgeLabel: hidden ? hiddenLabel : void 0,
      progressLabel: hasprogress ? progressLabel : void 0,
      progressValue: percent,
      linkLabel,
      linkHref: viewurl
    },
    void 0,
    false,
    {
      fileName: "public/blocks/myoverview/js/esm/src/CourseCard.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
}
__name(CourseCard, "CourseCard");
export {
  CourseCard as default
};
//# sourceMappingURL=CourseCard.dev.js.map
